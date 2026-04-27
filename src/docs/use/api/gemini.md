# Gemini（原生接口） 

Maisi 支持 Gemini 的原生接口形态（Google Gemini API / GenAI 风格）。

## Base URL / 鉴权 

-   Base URL：`https://maisi-ai.com/gemini`
-   Header：`x-goog-api-key: <your-api-key>`

## 非流式（generateContent） 

-   Endpoint：`POST /gemini/v1beta/models/{model}:generateContent`

bash

```
curl --request POST \
  --url 'https://maisi-ai.com/gemini/v1beta/models/gemini-2.5-flash:generateContent' \
  --header 'Content-Type: application/json' \
  --header 'x-goog-api-key: <your-api-key>' \
  --data '{
    "contents": [
      {
        "role": "user",
        "parts": [{"text": "Why is the ocean salty?"}]
      }
    ]
  }'
```

## 流式（SSE） 

-   Endpoint：`POST /gemini/v1beta/models/{model}:streamGenerateContent?alt=sse`

bash

```
curl --request POST \
  --url 'https://maisi-ai.com/gemini/v1beta/models/gemini-2.5-flash:streamGenerateContent?alt=sse' \
  --header 'Content-Type: application/json' \
  --header 'x-goog-api-key: <your-api-key>' \
  --data '{
    "contents": [
      {
        "role": "user",
        "parts": [{"text": "hi~"}]
      }
    ]
  }'
```

## SDK 示例（Python） 

bash

```
pip install -q -U google-genai
```

python

```
from google import genai
from google.genai import types

client = genai.Client(
    http_options=types.HttpOptions(base_url="https://maisi-ai.com/gemini"),
    api_key="<your-api-key>",
)

response = client.models.generate_content(
    model="gemini-2.5-flash",
    contents="hi~",
)

print(response.text)
```

## 相关内容 

-   推荐入口：见 [OpenAI 兼容接口](/docs/use/api/openai_compatible.html)
-   Gemini SDK 配置：见 [Gemini SDK 设置](/docs/use/gemini_sdk.html)
-   常见错误：见 [常见错误以及解决办法](/docs/error.html)