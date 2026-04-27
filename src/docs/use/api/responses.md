# Responses 

-   Endpoint：`POST /v1/responses`
-   Base URL：`https://maisi-ai.com/v1`
-   鉴权：`Authorization: Bearer <your-api-key>`
-   API 参考：
    -   Maisi：`/v1/responses`（见 [API 文档](https://api-docs.maisi-ai.com/api-297251423.md)）
    -   OpenAI 官方：[https://platform.openai.com/docs/api-reference/responses/create](https://platform.openai.com/docs/api-reference/responses/create)

## 文本请求 

bash

```
curl --request POST \
  --url https://maisi-ai.com/v1/responses \
  --header 'Content-Type: application/json' \
  --header 'Authorization: Bearer <your-api-key>' \
  --data '{
    "model": "gpt-4.1",
    "input": "Tell me a three sentence bedtime story about a unicorn."
  }'
```

## 图像输入（示例） 

bash

```
curl --request POST \
  --url https://maisi-ai.com/v1/responses \
  --header 'Content-Type: application/json' \
  --header 'Authorization: Bearer <your-api-key>' \
  --data '{
    "model": "gpt-4.1",
    "input": [
      {
        "role": "user",
        "content": [
          {"type": "input_text", "text": "what is in this image?"},
          {"type": "input_image", "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Gfp-wisconsin-madison-the-nature-boardwalk.jpg/2560px-Gfp-wisconsin-madison-the-nature-boardwalk.jpg"}
        ]
      }
    ]
  }'
```

## 工具：web\_search\_preview 

bash

```
curl --request POST \
  --url https://maisi-ai.com/v1/responses \
  --header 'Content-Type: application/json' \
  --header 'Authorization: Bearer <your-api-key>' \
  --data '{
    "model": "gpt-4.1",
    "tools": [{"type": "web_search_preview"}],
    "input": "What was a positive news story from today?"
  }'
```

## 推理参数（reasoning） 

bash

```
curl --request POST \
  --url https://maisi-ai.com/v1/responses \
  --header 'Content-Type: application/json' \
  --header 'Authorization: Bearer <your-api-key>' \
  --data '{
    "model": "o3-mini",
    "input": "How much wood would a woodchuck chuck?",
    "reasoning": {"effort": "high"}
  }'
```

## 相关内容 

-   接口兼容与说明：见 [接口兼容](/docs/use/chat.html)
-   推理设置：见 [推理设置](/docs/use/reasoning.html)
-   常见错误与超时：见 [常见错误以及解决办法](/docs/error.html)