# Audio 

Maisi 支持通过 OpenAI 兼容的 Audio 接口进行音频相关调用。

-   Base URL：`https://api.maisi-ai.com/v1`
-   鉴权：`Authorization: Bearer <your-api-key>`

完整参数（以 API 开发文档为准）：[https://api-docs.maisi-ai.com/](https://api-docs.maisi-ai.com/)

## 语音转文字（Transcriptions） 

-   Endpoint：`POST /v1/audio/transcriptions`

bash

```
curl --request POST \
  --url https://api.maisi-ai.com/v1/audio/transcriptions \
  --header 'Authorization: Bearer <your-api-key>' \
  --header 'Content-Type: multipart/form-data' \
  --form file=@/path/to/audio.mp3 \
  --form model=whisper-1
```

## 文字转语音（Speech / TTS） 

-   Endpoint：`POST /v1/audio/speech`

bash

```
curl --request POST \
  --url https://api.maisi-ai.com/v1/audio/speech \
  --header 'Content-Type: application/json' \
  --header 'Authorization: Bearer <your-api-key>' \
  --data '{
    "model": "tts-1",
    "input": "你说点什么，包括中文！",
    "voice": "alloy"
  }' \
  --output speech.mp3
```