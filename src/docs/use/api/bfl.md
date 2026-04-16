# BFL 

BFL 属于任务型接口：创建任务 → 查询结果。

## Base URL / 鉴权 

-   Base URL：`https://api.maisi-ai.com/bfl`
-   Header：`x-key: <your-api-key>`

> 你原文示例也体现了这一点：client headers 使用 `x-key`。

## 主要接口 

-   `POST /v1/{model}`
-   `GET /v1/get_result?id={task_id}`

具体字段与返回结构以 API 开发文档为准：[https://api-docs.maisi-ai.com/](https://api-docs.maisi-ai.com/)

## 示例 

python

```
import time
import requests
import json
import os
from typing import Dict, Any, List, Union, Optional

class BFLAPIError(Exception):
    """BFL API Error"""

    def __init__(self, status_code: int, message: str):
        self.status_code = status_code
        self.message = message
        super().__init__(f"API Error [{status_code}]: {message}")

    @classmethod
    def from_response(cls, response: requests.Response):
        """Create exception from response object"""
        try:
            data = response.json()
            if 'detail' in data and data['detail']:
                message = data['detail']
            elif 'details' in data and data['details']:
                message = json.dumps(data['details'], ensure_ascii=False)
            else:
                message = response.text or "Unknown Error"
        except Exception:
            message = response.text or "Unknown Error"

        return cls(
            status_code=response.status_code,
            message=message
        )

class BFLOutput:
    """Handle BFL API Output"""

    def __init__(self, result: Dict[str, Any], task_id: str):
        self._result = result
        self._task_id = task_id
        self._sample_url = result.get('sample')

    def url(self) -> Optional[str]:
        """Return the sample URL"""
        return self._sample_url

    def save(self, path: str) -> str:
        if not self._sample_url:
            raise ValueError("No sample URL available to save")

        os.makedirs(path, exist_ok=True)

        if '.png' in self._sample_url.lower():
            ext = '.png'
        elif '.jpg' in self._sample_url.lower() or '.jpeg' in self._sample_url.lower():
            ext = '.jpg'
        else:
            ext = '.jpg'

        filename = f"{self._task_id}{ext}"
        filepath = os.path.join(path, filename)

        response = requests.get(self._sample_url, stream=True)
        response.raise_for_status()

        with open(filepath, 'wb') as f:
            for chunk in response.iter_content(chunk_size=8192):
                f.write(chunk)

        return filepath

class BFLClient:
    """BFL API Client"""

    def __init__(self, api_key: str, base_url: str = "https://api.maisi-ai.com/bfl"):
        self.api_key = api_key
        self.base_url = base_url.rstrip('/')
        self.session = requests.Session()
        self.session.headers.update({
            'x-key': api_key,
            'Content-Type': 'application/json'
        })

    def run(
        self,
        model: str,
        input: Dict[str, Any],
        poll_interval: float = 1.0,
        timeout: Optional[float] = None
    ) -> BFLOutput:
        task_id = self._create_task(model, input)
        print(f"Task created: {task_id}")

        result_data = self._poll_result(task_id, poll_interval, timeout)

        return BFLOutput(result_data['result'], task_id)

    def _create_task(self, model: str, input: Dict[str, Any]) -> str:
        url = f"{self.base_url}/v1/{model}"

        response = self.session.post(url, json=input)

        if response.status_code != 200:
            raise BFLAPIError.from_response(response)

        data = response.json()
        return data['id']

    def _poll_result(
        self,
        task_id: str,
        poll_interval: float,
        timeout: Optional[float]
    ) -> Dict[str, Any]:
        url = f"{self.base_url}/v1/get_result"
        params = {'id': task_id}

        start_time = time.time()

        while True:
            if timeout and (time.time() - start_time) > timeout:
                raise TimeoutError(f"Task {task_id} timed out")

            response = self.session.get(url, params=params)

            # Handle 404 by ignoring and continuing
            if response.status_code == 404:
                time.sleep(poll_interval)
                continue

            if response.status_code != 200:
                raise BFLAPIError.from_response(response)

            data = response.json()
            status = data.get('status')

            if status == 'Ready':
                result = data.get('result')
                if not result or 'sample' not in result:
                    raise RuntimeError("Task Ready but result or sample missing")
                return data

            elif status in ['Request Moderated', 'Content Moderated', 'Error']:
                details = data.get('details')
                if not details:
                    raise RuntimeError(
                        f"Task failed with status {status}. Details: {data.get('detail') or 'No details provided'}"
                    )

                if isinstance(details, (dict, list)):
                    details_str = json.dumps(details, ensure_ascii=False)
                else:
                    details_str = str(details)

                raise RuntimeError(f"Task failed with status {status}: {details_str}")

            elif status == 'Pending':
                time.sleep(poll_interval)

            elif status == 'Task not found':
                print(f"Status: {status}, waiting...")
                time.sleep(poll_interval)

            else:
                print(f"Unknown status: {status}, waiting...")
                time.sleep(poll_interval)

if __name__ == "__main__":
    client = BFLClient(
        api_key="sk-xxxxxx",
        base_url="https://api.maisi-ai.com/bfl" 
    )

    input_data = {
        "prompt": "A futuristic city with flying cars, neon lights, cyberpunk style",
        "width": 1024,
        "height": 768
    }

    try:
        output = client.run(
            "flux-pro-1.1",
            input=input_data
        )

        print("Output URL:")
        print(output.url())

        saved_file = output.save("./output")
        print(f"\nSaved file: {saved_file}")

    except Exception as e:
        print(f"An error occurred: {e}")
```