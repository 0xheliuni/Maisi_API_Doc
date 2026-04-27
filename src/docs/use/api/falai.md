# FalAI 

FalAI 的图像与视频调用方式相近，通常为任务型：提交任务 → 查询状态 → 获取结果。

## Base URL / 鉴权 

-   Base URL：`https://maisi-ai.com/fal-ai`
-   Header：`Authorization: Key <your-api-key>`

::: warning ⚠️ 注意
根据 FalAI 官方规则，如果因输入参数错误导致请求失败，积分可能不予退还。 详见：[https://docs.fal.ai/faq#do-you-charge-for-failed-requests](https://docs.fal.ai/faq#do-you-charge-for-failed-requests)
:::

## 两种常见调用方式 

1.  **FalAI 原生任务接口**（最常见）
2.  **OpenAI Images 形态**：部分模型可通过 `POST /v1/images/generations` 调用，但不同模型参数不完全一致

建议以外部模型参数文档为准（FalAI 示例：[https://fal.ai/models/fal-ai/flux-pro/kontext](https://fal.ai/models/fal-ai/flux-pro/kontext)）。

### Python（提交任务 + 轮询） 

python

```
import requests
import time
from typing import Dict, Any

key = "sk-xxx"  # 替换为实际的 Bearer Token
BASE_URL = "https://maisi-ai.com/fal-ai"

def get_headers() -> Dict[str, str]:
    return {
        "Authorization": f"Key {key}",
        "Content-Type": "application/json"
    }

def handle_response(response: requests.Response) -> Dict[str, Any]:
    response_data = response.json()
    if response.status_code != 200:
        raise Exception(f"请求失败，状态码: {response.status_code}，响应信息: {response_data}")
    if response_data.get("status") == "FAILURE":
        raise Exception(f"操作失败，响应信息: {response_data}")
    return response_data

def submit(model: str, data: Dict[str, Any]) -> str:
    url = f"{BASE_URL}/{model}"
    response = requests.post(url, headers=get_headers(), json=data)
    return handle_response(response)

def fetch(url: str) -> Dict[str, Any]:
    response = requests.get(url, headers=get_headers())
    return handle_response(response)

def main():
    model = "flux-pro/kontext/text-to-image"
    data = {
  "prompt": "Extreme close-up of a single tiger eye, direct frontal view. Detailed iris and pupil. Sharp focus on eye texture and color. Natural lighting to capture authentic eye shine and depth. The word \"FLUX\" is painted over it in big, white brush strokes with visible texture.",
  "guidance_scale": 1,
  "num_images": 1,
  "safety_tolerance": "2",
  "output_format": "jpeg",
  "aspect_ratio": "9:21"
}
    try:
        task = submit(model, data)
        status_url = task['status_url']
        response_url = task['response_url']

        while True:
            status_fetch = fetch(status_url)
            task_status = status_fetch["status"]
            if task_status != "COMPLETED":
                print(f"视频生成状态： {task_status}，请等待2s...")
                time.sleep(2)
                continue

            response_fetch = fetch(response_url)
            print("响应:")
            print(response_fetch)
            break

    except Exception as e:
        print(f"发生错误: {e}")

if __name__ == "__main__":
    main()
```

### OpenAI Images 形态 

bash

```
curl --request POST \
  --url https://maisi-ai.com/v1/images/generations \
  --header 'Authorization: Bearer sk-xxx' \
  --header 'Content-Type: application/json' \
  --data '{
"model": "flux-pro/kontext/text-to-image",
  "prompt": "Extreme close-up of a single tiger eye, direct frontal view. Detailed iris and pupil. Sharp focus on eye texture and color. Natural lighting to capture authentic eye shine and depth. The word \"FLUX\" is painted over it in big, white brush strokes with visible texture.",
  "guidance_scale": 1,
  "n": 1,
  "num_images": 2,
  "safety_tolerance": "2",
  "output_format": "jpeg",
  "aspect_ratio": "1:1"
}
'
```