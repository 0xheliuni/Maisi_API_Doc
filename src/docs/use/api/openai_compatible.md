# OpenAI 兼容接口 

Maisi 对大多数模型提供 **OpenAI Compatible** 的调用方式。

-   Base URL：`https://maisi-ai.com/v1`
-   鉴权：`Authorization: Bearer <your-api-key>`

## 最小示例（Chat Completions） 

bash

```
curl --request POST \
  --url https://maisi-ai.com/v1/chat/completions \
  --header 'Content-Type: application/json' \
  --header 'Authorization: Bearer <your-api-key>' \
  --data '​​{
    "model": "gpt-4o-mini",
    "messages": [
      {"role": "user", "content": "hi"}
    ]
  }'
```

## 下一步 

-   文本/多模态对话：见 [Chat Completions](/docs/use/api/chat_completions.html)
-   新一代统一接口：见 [Responses](/docs/use/api/responses.html)
-   图片生成：见 [Images](/docs/use/api/images.html)
-   音频（TTS/STT）：见 [Audio](/docs/use/api/audio.html)