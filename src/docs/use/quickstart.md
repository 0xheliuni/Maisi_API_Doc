# 快速开始 

## 创建令牌 

注册好帐号后，前往 [令牌管理](https://maisi-ai.com/console/token) 页面创建一个新的 API 密钥。请妥善保存此密钥，因为它将用于身份验证。 详细步骤，请查看 [令牌说明](/docs/use/token.html)。

获取到令牌后，您需要将下面的代码中的 `<your-api-key>` 替换为您的实际 API 密钥。

## 选择模型 

我们支持多种模型，您可以在 [模型广场](https://maisi-ai.com/pricing) 中查看可用模型。选择适合您需求的模型。

## OpenAI API 请求 

### 通过 API URL 调用 

文本生成图像输入内置工具函数调用

bash

```
curl "https://api.maisi-ai.com/v1/chat/completions" \
    -H "Content-Type: application/json" \
    -H "Authorization: Bearer <your-api-key>" \
    -d '{
        "model": "gpt-4.1",
        "messages": [
            {
                "role": "user",
                "content": "Write a one-sentence bedtime story about a unicorn."
            }
        ]
    }'
```

bash

```
curl "https://api.maisi-ai.com/v1/chat/completions" \
    -H "Content-Type: application/json" \
    -H "Authorization: Bearer <your-api-key>" \
    -d '{
        "model": "gpt-4.1",
        "messages": [
		{
			"role": "user",
			"content": [
				{
					"type": "text",
					"text": "What is in this image？"
				},
				{
					"type": "image_url",
					"image_url": {
						"url": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Gfp-wisconsin-madison-the-nature-boardwalk.jpg/2560px-Gfp-wisconsin-madison-the-nature-boardwalk.jpg"
					}
				}
			]
		}
	]
    }'
```

bash

```
curl "https://api.maisi-ai.com/v1/chat/completions" \
    -H "Content-Type: application/json" \
    -H "Authorization: Bearer <your-api-key>" \
    -d '{
        "model": "gpt-4o-search-preview",
        "web_search_options": {},
        "messages": [{
            "role": "user",
            "content": "What was a positive news story from today?"
        }]
    }'
```

bash

```
curl https://api.maisi-ai.com/v1/chat/completions \
-H "Content-Type: application/json" \
-H "Authorization: Bearer <your-api-key>" \
-d '{
  "model": "gpt-4.1",
  "messages": [
    {
      "role": "user",
      "content": "What is the weather like in Boston today?"
    }
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
            "location": {
              "type": "string",
              "description": "The city and state, e.g. San Francisco, CA"
            },
            "unit": {
              "type": "string",
              "enum": ["celsius", "fahrenheit"]
            }
          },
          "required": ["location"]
        }
      }
    }
  ],
  "tool_choice": "auto"
}'
```

### 通过 SDK 调用 

更多语言的 SDK 使用示例，请参考 [OpenAI SDK 文档](/docs/use/openai_sdk.html)。

PythonJavaScript

py

```
from openai import OpenAI
client = OpenAI(
    api_key="<your-api-key>",
    base_url="https://api.maisi-ai.com/v1"
)

completion = client.chat.completions.create(
    model="gpt-4.1",
    messages=[
        {
            "role": "user",
            "content": "Write a one-sentence bedtime story about a unicorn."
        }
    ]
)

print(completion.choices[0].message.content)
```

ts

```
import OpenAI from "openai";
const client = new OpenAI({
  apiKey: "<your-api-key>",
  baseURL: "https://api.maisi-ai.com/v1",
});

const completion = await client.chat.completions.create({
  model: "gpt-4.1",
  messages: [
    {
      role: "user",
      content: "Write a one-sentence bedtime story about a unicorn.",
    },
  ],
});

console.log(completion.choices[0].message.content);
```

## Claude API 请求 

::: warning ⚠️ 注意
注意：Claude API 目前仅支持 `Claude` 模型。 其他模型无法使用 Claude API 进行调用
:::

### 通过 API URL 调用 

文本生成函数调用图像输入

bash

```
curl -X POST https://api.maisi-ai.com/claude/v1/messages \
    -H "Content-Type: application/json" \
    -H "x-api-key: <your-api-key>" \
    -d '{
        "model": "claude-opus-4-20250514",
        "messages": [
            {
                "role": "user",
                "content": "Why is the ocean salty?"
            }
        ]
    }'
```

bash

```
curl https://api.maisi-ai.com/claude/v1/messages \
  -H "content-type: application/json" \
  -H "x-api-key: <your-api-key>" \
  -d '{
    "model": "claude-opus-4-1-20250805",
    "max_tokens": 1024,
    "tools": [
      {
        "name": "get_weather",
        "description": "Get the current weather in a given location",
        "input_schema": {
          "type": "object",
          "properties": {
            "location": {
              "type": "string",
              "description": "The city and state, e.g. San Francisco, CA"
            }
          },
          "required": ["location"]
        }
      }
    ],
    "messages": [
      {
        "role": "user",
        "content": "What is the weather like in San Francisco?"
      }
    ]
  }'
```

bash

```
curl https://api.maisi-ai.com/claude/v1/messages \
  -H "x-api-key: <your-api-key>" \
  -H "content-type: application/json" \
  -d '{
    "model": "claude-sonnet-4-20250514",
    "max_tokens": 1024,
    "messages": [
      {
        "role": "user",
        "content": [
          {
            "type": "image",
            "source": {
              "type": "base64",
              "media_type": "image/jpeg",
              "data": "base64 data。。。。"
            }
          },
          {
            "type": "text",
            "text": "Describe this image."
          }
        ]
      }
    ]
  }'
```

### 通过 SDK 调用 

更多语言的 SDK 使用示例，请参考 [Claude SDK 文档](/docs/use/claude_sdk.html)。

PythonJavaScript

py

```
import anthropic

client = anthropic.Anthropic(
    api_key="your_api_key_here",
    base_url="https://api.maisi-ai.com/claude"
)

message = client.messages.create(
    model="claude-opus-4-20250514",
    max_tokens=1000,
    temperature=1,
    system="You are a world-class poet. Respond only with short poems.",
    messages=[
        {
            "role": "user",
            "content": [
                {
                    "type": "text",
                    "text": "Why is the ocean salty?"
                }
            ]
        }
    ]
)
print(message.content)
```

ts

```
import Anthropic from "@anthropic-ai/sdk";

const anthropic = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY,
  baseURL: "https://api.maisi-ai.com/claude",
});

const msg = await anthropic.messages.create({
  model: "claude-opus-4-20250514",
  max_tokens: 1000,
  temperature: 1,
  system: "Respond only with short poems.",
  messages: [
    {
      role: "user",
      content: [
        {
          type: "text",
          text: "Why is the ocean salty?",
        },
      ],
    },
  ],
});
console.log(msg);
```

## Gemini API 请求 

::: warning ⚠️ 注意
注意：Gemini API 目前仅支持 `Gemini` 模型。 其他模型无法使用 Gemini API 进行调用
:::

### 通过 API URL 调用 

文本生成函数调用图像输入音频输入图像输出

bash

```
curl -X POST 'https://api.maisi-ai.com/gemini/v1beta/models/gemini-2.5-flash:generateContent' \
--header 'Content-Type: application/json' \
--header 'x-goog-api-key: <your-api-key>' \
--data-raw '{
  "contents": [
    {
      "parts": [
        {
          "text": "Why is the ocean salty?"
        }
      ],
      "role": "user"
    }
  ]
}'
```

bash

```
curl "https://api.maisi-ai.com/gemini/v1beta/models/gemini-2.5-flash:generateContent" \
  -H "x-goog-api-key: <your-api-key>" \
  -H 'Content-Type: application/json' \
  -X POST \
  -d '{
    "contents": [
      {
        "role": "user",
        "parts": [
          {
            "text": "What'\''s the temperature in London?"
          }
        ]
      }
    ],
    "tools": [
      {
        "functionDeclarations": [
          {
            "name": "get_current_temperature",
            "description": "Gets the current temperature for a given location.",
            "parameters": {
              "type": "object",
              "properties": {
                "location": {
                  "type": "string",
                  "description": "The city name, e.g. San Francisco"
                }
              },
              "required": ["location"]
            }
          }
        ]
      }
    ]
  }'
```

bash

```
curl --location --request POST 'https://api.maisi-ai.com/gemini/v1beta/models/gemini-2.5-flash:generateContent' \
--header 'Content-Type: application/json' \
--header 'x-goog-api-key: <your-api-key>' \
--data-raw '{
  "contents": [
    {
      "parts": [
        {
          "inlineData": {
            "mimeType": "image/png",
            "data": "base64 data ...."
          }
        },
        {
          "text": "图片有什么？"
        }
      ],
      "role": "user"
    }
  ]
}'
```

bash

```
curl --location --request POST 'https://api.maisi-ai.com/gemini/v1beta/models/gemini-2.5-flash:streamGenerateContent?alt=sse' \
--header 'Content-Type: application/json' \
--header 'x-goog-api-key: <your-api-key>' \
--data-raw '{
  "generationConfig": {
    "responseModalities": [
      "Text",
      "Image"
    ]
  },
  "contents": [
    {
      "role": "user",
      "parts": [
        {
          "text": "音频中说了什么？"
        },
        {
          "inlineData": {
            "mimeType": "audio/wav",
            "data": "audio base64 data ...."
          }
        }
      ]
    }
  ]
}'
```

bash

```
curl --location --request POST 'https://api.maisi-ai.com/gemini/v1beta/models/gemini-2.5-flash-image-preview:streamGenerateContent?alt=sse' \
--header 'Content-Type: application/json' \
--header 'x-goog-api-key: <your-api-key>' \
--data-raw '{
  "generationConfig": {
    "responseModalities": [
      "Text",
      "Image"
    ]
  },
  "contents": [
    {
      "role": "user",
      "parts": [
        {
          "text": "画一只可爱的猫"
        }
      ]
    }
  ]
}'
```

### 通过 SDK 调用 

更多语言的 SDK 使用示例，请参考 [Gemini SDK 文档](/docs/use/gemini_sdk.html)。

Python

py

```
from google import genai
from google.genai import types

prompt = "Explain the Occam's Razor concept and provide everyday examples of it"
budget = 1024  # You can set this variable to any value between 0 and 24k

client = genai.Client(
    http_options=types.HttpOptions(base_url='https://api.maisi-ai.com/gemini'),
    api_key="<your-api-key>",
    )
response = client.models.generate_content(
    model="gemini-2.5-flash",
    contents=prompt,
    config=types.GenerateContentConfig(
        thinking_config=types.ThinkingConfig(thinking_budget=budget, include_thoughts=True)
    ),
)

print(response.text)
```

## 通过第三方应用调用 

如果您使用的是第三方应用（如 LobeChat 等），请参考我们的 [集成文档](/integration/) 以获取更多信息。