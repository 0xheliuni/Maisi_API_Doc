# Claude（原生接口） 

Maisi 支持 Claude 的原生接口形态（Anthropic Messages API 风格）。

## Base URL / 鉴权 

-   Base URL：`https://api.maisi-ai.com/claude`
-   Header：`x-api-key: <your-api-key>`
-   Endpoint：`POST /claude/v1/messages`

## curl 示例（文本） 

bash

```
curl --request POST \
  --url https://api.maisi-ai.com/claude/v1/messages \
  --header 'Content-Type: application/json' \
  --header 'x-api-key: <your-api-key>' \
  --data '{
    "model": "claude-3-haiku-20240307",
    "max_tokens": 1024,
    "messages": [
      {"role": "user", "content": "Hello, world"}
    ]
  }'
```

## SDK 示例（Python） 

bash

```
pip install anthropic
```

python

```
import anthropic

client = anthropic.Anthropic(
    api_key="<your-api-key>",
    base_url="https://api.maisi-ai.com/claude",
)

message = client.messages.create(
    model="claude-3-5-sonnet-20240620",
    max_tokens=1024,
    messages=[
        {"role": "user", "content": "Hello, Claude"}
    ],
)

print(message.content)
```

## 相关内容 

-   推荐入口：见 [OpenAI 兼容接口](/docs/use/api/openai_compatible.html)
-   常见错误：见 [常见错误以及解决办法](/docs/error.html)