# Suno 

Suno 属于任务型接口：通常需要提交任务，然后轮询查询状态，成功后获取结果。

-   Base URL：`https://maisi-ai.com/suno`
-   鉴权：`Authorization: Bearer <your-api-key>`
-   详细参数与接口：以 [API 开发文档](https://api-docs.maisi-ai.com/) 中 Suno 相关条目为准

## 调用流程（建议） 

1.  提交歌词生成（如需要）
2.  提交音乐生成
3.  轮询任务状态（`SUCCESS/FAILURE/IN_PROGRESS`）
4.  成功后读取音频/封面/视频等 URL

## 示例 

python

```
import requests
import time
from typing import Dict, Any

key = "sk-xxxxx"  # 替换为你的key
BASE_URL = "https://maisi-ai.com/suno"

def get_headers() -> Dict[str, str]:
    return {
        "Authorization": f"Bearer {key}",
        "Content-Type": "application/json"
    }

def handle_response(response: requests.Response) -> Dict[str, Any]:
    response_data = response.json()
    if response.status_code != 200:
        raise Exception(f"请求失败，状态码: {response.status_code}，响应信息: {response_data}")
    if response_data.get("code") != "success":
        raise Exception(f"操作失败，响应信息: {response_data}")
    return response_data["data"]

def submit_lyrics(prompt: str) -> str:
    url = f"{BASE_URL}/submit/lyrics"
    data = {"prompt": prompt}
    response = requests.post(url, headers=get_headers(), json=data)
    return handle_response(response)

def fetch(task_id: str) -> Dict[str, Any]:
    url = f"{BASE_URL}/fetch/{task_id}"
    response = requests.get(url, headers=get_headers())
    return handle_response(response)

def submit_song(payload: Dict[str, Any]) -> str:
    url = f"{BASE_URL}/submit/music"
    response = requests.post(url, headers=get_headers(), json=payload)
    return handle_response(response)

def main():
    prompt = "愉快的，摇滚的，学猫叫"
    try:
        lyrics_task_id = submit_lyrics(prompt)
        lyrics_text = ""

        while True:
            lyrics_fetch = fetch(lyrics_task_id)
            task_status = lyrics_fetch["status"]
            if task_status == "FAILURE":
                raise Exception("歌词生成失败")
            if task_status == "SUCCESS":
                lyrics_text = lyrics_fetch['data']['text']
                break
            print(f"歌词生成状态： {task_status}，请等待2s...")
            time.sleep(2)

        print("歌词内容:" + lyrics_text)

        if not lyrics_text:
            raise Exception("歌词为空终止调用")

        # 组装歌曲生成请求
        payload = {
            "prompt": lyrics_text,
            "tags": "emotional punk",
            "mv": "chirp-v3-5",
            "title": "学猫叫"
        }

        # 提交歌曲生成请求
        song_task_id = submit_song(payload)
        print("歌曲任务ID:" + song_task_id)

        isStream = False
        # 轮询查询歌曲生成状态
        while True:
            task_data = fetch(song_task_id)
            task_status = task_data["status"]

            if task_status == "FAILURE":
                raise Exception("歌曲生成失败")

            if task_status == "SUCCESS":
                break

            if task_status == "IN_PROGRESS" and isStream == False:
                isStream = True
                print(f"歌曲已经可以通过流播放，但不可下载")
                for song in task_data["data"]:
                    print(f"歌曲名称: {song['title']}")
                    print(f"歌曲封面: {song['image_url']}")
                    print(f"音频地址: {song['audio_url']}")
                    print("-" * 40)

            print(f"歌曲生成状态： {task_status}，请等待15s...")

            time.sleep(15)
        # 打印歌曲信息
        for song in task_data["data"]:
            print(f"歌曲名称: {song['title']}")
            print(f"歌曲封面: {song['image_url']}")
            print(f"音频地址: {song['audio_url']}")
            print(f"视频地址: {song['video_url']}")
            print("-" * 40)

    except Exception as e:
        print(f"发生错误: {e}")

if __name__ == "__main__":
    main()
```