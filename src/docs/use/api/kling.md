# 可灵（Kling） 

## Base URL / 鉴权 

-   Base URL：`https://api.maisi-ai.com/kling`
-   鉴权：`Authorization: Bearer <your-api-key>`

python

```
"""
Kling Image Generation API SDK

支持图像生成任务的创建和查询
"""

import time
import requests
from typing import Optional, Dict, Any, List
from enum import Enum

class ModelName(str, Enum):
    """模型名称枚举"""
    KLING_V1 = "kling-v1"
    KLING_V1_5 = "kling-v1-5"
    KLING_V2 = "kling-v2"
    KLING_V2_1 = "kling-v2-1"

class ImageReference(str, Enum):
    """图片参考类型枚举"""
    SUBJECT = "subject"  # 角色特征参考
    FACE = "face"  # 人物长相参考

class Resolution(str, Enum):
    """分辨率枚举"""
    K1 = "1k"  # 1K标清
    K2 = "2k"  # 2K高清

class AspectRatio(str, Enum):
    """画面纵横比枚举"""
    RATIO_16_9 = "16:9"
    RATIO_9_16 = "9:16"
    RATIO_1_1 = "1:1"
    RATIO_4_3 = "4:3"
    RATIO_3_4 = "3:4"
    RATIO_3_2 = "3:2"
    RATIO_2_3 = "2:3"
    RATIO_21_9 = "21:9"

class TaskStatus(str, Enum):
    """任务状态枚举"""
    SUBMITTED = "submitted"  # 已提交
    PROCESSING = "processing"  # 处理中
    SUCCEED = "succeed"  # 成功
    FAILED = "failed"  # 失败

class KlingImageSDK:
    """Kling 图像生成 API SDK"""

    def __init__(self, api_key: str, base_url: str = "https://api.maisi-ai.com/kling"):
        """
        初始化 SDK

        Args:
            api_key: API 密钥
            base_url: API 基础地址
        """
        self.api_key = api_key
        self.base_url = base_url.rstrip('/')
        self.session = requests.Session()
        self.session.headers.update({
            'Content-Type': 'application/json',
            'Authorization': f'Bearer {api_key}'
        })

    def create_generation_task(
        self,
        prompt: str,
        model_name: str = ModelName.KLING_V1,
        negative_prompt: Optional[str] = None,
        image: Optional[str] = None,
        image_reference: Optional[str] = None,
        image_fidelity: float = 0.5,
        human_fidelity: float = 0.45,
        resolution: str = Resolution.K1,
        n: int = 1,
        aspect_ratio: str = AspectRatio.RATIO_16_9,
        callback_url: Optional[str] = None
    ) -> Dict[str, Any]:
        url = f"{self.base_url}/v1/images/generations"

        payload = {
            "model_name": model_name,
            "prompt": prompt,
            "resolution": resolution,
            "n": n,
            "aspect_ratio": aspect_ratio
        }

        if negative_prompt:
            payload["negative_prompt"] = negative_prompt
        if image:
            payload["image"] = image
        if image_reference:
            payload["image_reference"] = image_reference
        if image_fidelity != 0.5:
            payload["image_fidelity"] = image_fidelity
        if human_fidelity != 0.45:
            payload["human_fidelity"] = human_fidelity
        if callback_url:
            payload["callback_url"] = callback_url

        try:
            response = self.session.post(url, json=payload)
            response.raise_for_status()
            return response.json()
        except requests.exceptions.RequestException as e:
            return {
                "code": -1,
                "message": f"请求失败: {str(e)}",
                "request_id": None,
                "data": None
            }

    def query_task(self, task_id: str) -> Dict[str, Any]:
        url = f"{self.base_url}/v1/images/generations/{task_id}"

        try:
            response = self.session.get(url)
            response.raise_for_status()
            return response.json()
        except requests.exceptions.RequestException as e:
            return {
                "code": -1,
                "message": f"请求失败: {str(e)}",
                "request_id": None,
                "data": None
            }

    def wait_for_completion(
        self,
        task_id: str,
        poll_interval: int = 3,
        max_wait_time: int = 300
    ) -> Dict[str, Any]:
        start_time = time.time()

        while True:
            if time.time() - start_time > max_wait_time:
                return {
                    "code": -1,
                    "message": f"等待超时（超过{max_wait_time}秒）",
                    "request_id": None,
                    "data": None
                }

            result = self.query_task(task_id)

            if result.get("code") != 0:
                return result

            task_status = result.get("data", {}).get("task_status")

            if task_status == TaskStatus.SUCCEED:
                return result

            if task_status == TaskStatus.FAILED:
                return result

            time.sleep(poll_interval)
```