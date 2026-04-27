# Chat Completions 

-   Endpoint：`POST /v1/chat/completions`
-   Base URL：`https://maisi-ai.com/v1`
-   鉴权：`Authorization: Bearer <your-api-key>`
-   API 参考：
    -   Maisi：`/v1/chat/completions`（见 [API 文档](https://api-docs.maisi-ai.com/api-297251415.md)）
    -   OpenAI 官方：[https://platform.openai.com/docs/api-reference/chat/create](https://platform.openai.com/docs/api-reference/chat/create)

## 文本请求 

bash

```
curl --request POST \
  --url https://maisi-ai.com/v1/chat/completions \
  --header 'Content-Type: application/json' \
  --header 'Authorization: Bearer <your-api-key>' \
  --data '{
    "model": "gpt-4o-mini",
    "messages": [
      {"role": "user", "content": "Write a one-sentence bedtime story about a unicorn."}
    ]
  }'
```

## 多模态（图像输入） 

bash

```
curl --request POST \
  --url https://maisi-ai.com/v1/chat/completions \
  --header 'Content-Type: application/json' \
  --header 'Authorization: Bearer <your-api-key>' \
  --data '{
    "model": "gpt-4.1",
    "messages": [
      {
        "role": "user",
        "content": [
          {"type": "text", "text": "What is in this image?"},
          {"type": "image_url", "image_url": {"url": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Gfp-wisconsin-madison-the-nature-boardwalk.jpg/2560px-Gfp-wisconsin-madison-the-nature-boardwalk.jpg"}}
        ]
      }
    ],
    "max_tokens": 300
  }'
```

## 流式（SSE） 

将请求体中的 `stream` 设为 `true`：

bash

```
curl --request POST \
  --url https://maisi-ai.com/v1/chat/completions \
  --header 'Content-Type: application/json' \
  --header 'Authorization: Bearer <your-api-key>' \
  --data '{
    "model": "gpt-4o-mini",
    "stream": true,
    "messages": [
      {"role": "user", "content": "Say hello in 3 short sentences."}
    ]
  }'
```

返回为 SSE 数据流（`chat.completion.chunk`）。常见终止信号是某个 chunk 出现 `finish_reason: "stop"`。

## 函数调用（Tools） 

bash

```
curl --request POST \
  --url https://maisi-ai.com/v1/chat/completions \
  --header 'Content-Type: application/json' \
  --header 'Authorization: Bearer <your-api-key>' \
  --data '{
    "model": "gpt-4.1",
    "messages": [
      {"role": "user", "content": "What is the weather like in Boston today?"}
    ],
    "tools": [
      {
        "type": "function",
        "function": {
          "name": "get_current_weather",
          "description": "Get the current weather in a given location",
          "parameters": {
            "type": "object",
            "properties": {
              "location": {"type": "string", "description": "The city and state, e.g. San Francisco, CA"},
              "unit": {"type": "string", "enum": ["celsius", "fahrenheit"]}
            },
            "required": ["location"]
          }
        }
      }
    ],
    "tool_choice": "auto"
  }'
```

## 相关内容 

-   图片生成：见 [Images](/docs/use/api/images.html)
-   音频（Whisper/TTS）：见 [Audio](/docs/use/api/audio.html)
-   接口兼容（chat vs responses）：见 [接口兼容](/docs/use/chat.html)
-   推理模型与推理参数：见 [推理设置](/docs/use/reasoning.html)
-   常见错误排查：见 [常见错误以及解决办法](/docs/error.html)