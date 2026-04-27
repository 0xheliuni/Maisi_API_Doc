# Replicate 

Replicate 属于任务型接口：创建 prediction → 轮询查询 → 获取 output。

## Base URL / 鉴权 

-   Base URL：`https://maisi-ai.com/replicate`
-   Header：`Authorization: Bearer <your-api-key>`

## 主要接口 

-   `POST /v1/models/{model}/predictions`
-   `GET /v1/predictions/{task_id}`

具体字段与返回结构以 API 开发文档为准：[https://api-docs.maisi-ai.com/](https://api-docs.maisi-ai.com/)

## SDK 

如果你使用 replicate 官方 SDK，可以在初始化 client 时将 `base_url` 指向 Maisi。

### 官方 SDK 调用示例 

python

```
from replicate.client import Client

client = Client(api_token="sk-xxxxx", base_url="https://maisi-ai.com/replicate")

input = {
    "prompt": "The photo: Create a cinematic, photorealistic medium shot capturing the dynamic energy of a high-octane action film. The focus is a young woman with wind-swept dark hair streaked with pink highlights and determined features, looking directly and intently into the camera lens, she is slightly off-center. She wears a fitted pink and gold racing jacket over a black tank top with \"Imagen 4 Fast\" in motion-stylized lettering and on the next line \"on Replicate\" emblazoned across the chest and aviator sunglasses pushed up on her head. The lighting is dramatic with motion blur streaks and neon reflections from passing city lights, creating dynamic lens flares and light trails (they do not cover her face). The background shows a blurred urban nightscape with streaking car headlights and illuminated skyscrapers rushing past, rendered with heavy motion blur and shallow depth of field. High contrast lighting, vibrant neon color palette with deep blues and electric yellows, and razor-sharp focus on her intense eyes enhance the fast-paced, electrifying atmosphere. She is illuminated while the background is darker.",
    "aspect_ratio": "4:3"
}

output = client.run(
    "google/imagen-4-fast",
    input=input
)

# To access the file URL:
print(output)
```

### 直接调用示例 

python

```
import time
import requests
from typing import Dict, Any, List, Union, Optional
from pathlib import Path
import os

class ReplicateAPIError(Exception):
    """Replicate API 错误"""

    def __init__(self, status_code: int, detail: str, title: str = ""):
        self.status_code = status_code
        self.detail = detail
        self.title = title

        error_message = f"API 错误 [{status_code}]"
        if title:
            error_message += f" - {title}"
        if detail:
            error_message += f": {detail}"

        super().__init__(error_message)

    @classmethod
    def from_response(cls, response: requests.Response):
        """从响应对象创建异常"""
        try:
            data = response.json()
            return cls(
                status_code=data.get('status', response.status_code),
                detail=data.get('detail', ''),
                title=data.get('title', '')
            )
        except Exception:
            return cls(
                status_code=response.status_code,
                detail=response.text or '未知错误',
                title=''
            )

class ReplicateOutput:
    """处理 Replicate API 返回的输出结果"""

    def __init__(self, output: Union[str, List[str], None], task_id: str):
        self._output = output
        self._task_id = task_id

    def url(self) -> List[str]:
        if self._output is None:
            return []

        if isinstance(self._output, str):
            return [self._output]

        if isinstance(self._output, list):
            return self._output

        return []

    def save(self, path: str) -> List[str]:
        urls = self.url()
        if not urls:
            raise ValueError("没有可保存的输出文件")

        os.makedirs(path, exist_ok=True)

        saved_files = []

        for index, url in enumerate(urls):
            file_ext = self._get_file_extension(url)

            filename = f"{self._task_id}_{index}{file_ext}"
            filepath = os.path.join(path, filename)

            response = requests.get(url, stream=True)
            response.raise_for_status()

            with open(filepath, 'wb') as f:
                for chunk in response.iter_content(chunk_size=8192):
                    f.write(chunk)

            saved_files.append(filepath)
            print(f"文件已保存: {filepath}")

        return saved_files

    def _get_file_extension(self, url: str) -> str:
        url_without_params = url.split('?')[0]
        ext = os.path.splitext(url_without_params)[1]

        if not ext:
            if 'mp4' in url.lower():
                ext = '.mp4'
            elif 'jpg' in url.lower() or 'jpeg' in url.lower():
                ext = '.jpg'
            elif 'png' in url.lower():
                ext = '.png'
            else:
                ext = '.bin'

        return ext

class ReplicateClient:
    """自定义 Replicate API 客户端"""

    def __init__(self, api_token: str, base_url: str = "https://maisi-ai.com/replicate"):
        self.api_token = api_token
        self.base_url = base_url.rstrip('/')
        self.session = requests.Session()
        self.session.headers.update({
            'Authorization': f'Bearer {api_token}',
            'Content-Type': 'application/json'
        })

    def run(
        self,
        model: str,
        input: Dict[str, Any],
        poll_interval: float = 1.0,
        timeout: Optional[float] = None
    ) -> ReplicateOutput:
        task_id = self._create_prediction(model, input)
        print(f"任务已创建: {task_id}")

        result = self._poll_prediction(task_id, poll_interval, timeout)

        return ReplicateOutput(result['output'], task_id)

    def _create_prediction(self, model: str, input: Dict[str, Any]) -> str:
        url = f"{self.base_url}/v1/models/{model}/predictions"

        payload = {
            "input": input
        }

        response = self.session.post(url, json=payload)

        if response.status_code != 200:
            raise ReplicateAPIError.from_response(response)

        data = response.json()
        return data['id']

    def _poll_prediction(
        self,
        task_id: str,
        poll_interval: float,
        timeout: Optional[float]
    ) -> Dict[str, Any]:
        url = f"{self.base_url}/v1/predictions/{task_id}"

        start_time = time.time()

        while True:
            if timeout and (time.time() - start_time) > timeout:
                raise TimeoutError(f"任务 {task_id} 超时")

            response = self.session.get(url)

            if response.status_code != 200:
                raise ReplicateAPIError.from_response(response)

            data = response.json()
            status = data['status']

            print(f"任务状态: {status}")

            if status == 'succeeded':
                print("任务成功完成")
                return data

            elif status == 'failed':
                error_msg = data.get('error', '未知错误')
                raise RuntimeError(f"任务失败: {error_msg}")

            elif status in ['starting', 'processing']:
                time.sleep(poll_interval)

            else:
                print(f"警告: 未知状态 {status}")
                time.sleep(poll_interval)

    def get_prediction(self, task_id: str) -> Dict[str, Any]:
        url = f"{self.base_url}/v1/predictions/{task_id}"
        response = self.session.get(url)

        if response.status_code != 200:
            raise ReplicateAPIError.from_response(response)

        return response.json()

if __name__ == "__main__":
    client = ReplicateClient(
        api_token="sk-xxxxx",
        base_url="https://maisi-ai.com/replicate"
    )

    input = {
        "prompt": "The photo: Create a cinematic, photorealistic medium shot capturing the dynamic energy of a high-octane action film. The focus is a young woman with wind-swept dark hair streaked with pink highlights and determined features, looking directly and intently into the camera lens, she is slightly off-center. She wears a fitted pink and gold racing jacket over a black tank top with \"Imagen 4 Fast\" in motion-stylized lettering and on the next line \"on Replicate\" emblazoned across the chest and aviator sunglasses pushed up on her head. The lighting is dramatic with motion blur streaks and neon reflections from passing city lights, creating dynamic lens flares and light trails (they do not cover her face). The background shows a blurred urban nightscape with streaking car headlights and illuminated skyscrapers rushing past, rendered with heavy motion blur and shallow depth of field. High contrast lighting, vibrant neon color palette with deep blues and electric yellows, and razor-sharp focus on her intense eyes enhance the fast-paced, electrifying atmosphere. She is illuminated while the background is darker.",
        "aspect_ratio": "4:31"
    }

    output = client.run(
        "google/imagen-4-fast",
        input=input
    )

    print("输出 URL:")
    print(output.url())

    saved_files = output.save("./output")
    print(f"\n已保存文件: {saved_files}")
```