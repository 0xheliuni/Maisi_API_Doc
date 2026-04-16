# 常见错误以及解决办法 

## 为什么询问ai大模型的名称，它们无法正确回答？ 

**训练数据的时间差**

模型训练时使用的数据通常早于模型发布，训练数据中不包含关于"自己"的信息，模型无法"知道"自己最终会被命名为什么

**自我认知的缺失**

AI模型本质上是在预测下一个词，它们没有真正的"自我意识"，关于自身身份的信息需要被明确编程或注入

如果你需要模型正确回答自己是哪个模型，可以在系统提示词中加入相关信息，例如：

```
You are GPT-4, a large language model trained by OpenAI.
```

## 为什么 ChatGPT / Claude 等官方网页版应用能够正确回答自己是哪个模型？ 

这是因为官方网页版应用是to C 产品，它们在系统提示词中已经加入了相关信息，所以它们能够正确回答自己是哪个模型。

## 常见错误代码 

错误代码

说明

400 Bad Request

请求格式错误或无效。这通常意味着你的请求参数有误，需要你检查并修正请求参数。

401 Unauthorized

请求令牌无效。这通常意味着你的请求令牌有误，需要你检查并修正请求参数。

403 Forbidden

余额不足

404 Not Found

请求地址错误

413 Request Entity Too Large

请求体太大。你可能需要减少你的请求数据量。

429 Too Many Requests

由于短时间内发送过多的请求，你已经超过了你的速率限制。

500 Internal Server Error

服务器内部错误。

503 Service Unavailable

服务暂时不可用。这可能是由于 OpenAI 正在进行维护或者服务器过载。

## 后台额度充足，使用 API 提示额度不足？ 

请确认你后台创建的令牌余额充足

## 提示当前分组下没有可用渠道？ 

1.  确认模型名称是否正确
2.  确认当前渠道类型是否有该模型

## 为什么GPT-5 等推理模型会返回空响应内容？ 

请检查是否设置了`max_tokens` 参数，如果设置了，请尝试移除该参数，或者将其设置为一个较大的值。

这是因为`推理tokens` 同样会计算在`max_tokens`中，如果设置的值过小，当推理tokens > `max_tokens` 时，已经满足了限制条件，会立即停止输出内容，导致返回空响应。

特别是OpenAI的推理模型，由于OpenAI不会返回推理内容，所以会直接返回空响应内容。

chat接口可以通过返回的`finish_reason` 字段来判断是否是因为`max_tokens` 导致的响应中断。

finish\_reason 内容

说明

stop

正常结束

length

达到 max\_tokens 限制

content\_filter

内容被过滤

response接口通过判断`status`字段，如果`status` 字段为`completed` 则表示正常结束，如果为`incomplete` 则表示出现异常，然后通过`incomplete_details.reason` 字段来判断具体原因。

reason 内容

说明

max\_output\_tokens

达到 max\_tokens 限制

## 为什么`o3-deep-research` / `o4-mini-deep-research` 请求报错 

OpenAI的`deep-research`模型必须要使用`网络搜索工具`或者`mcp工具`才能运行。

### 使用`web_search_preview`工具 

bash

```
curl --location --request POST 'https://api.maisi-ai.com/v1/responses' \
--header 'Content-Type: application/json' \
--header 'Authorization: Bearer sk-xxxx' \
--data-raw '{
    "model": "o3-deep-research",
    "stream" : true,
    "input": [
      {
        "role": "user",
        "content": "今天是2025-07-23,有哪些新闻？"
      }
    ],
    "tools": [
        {
            "type": "web_search_preview"
        }
    ]
}'
```

### 使用`mcp`工具 

json

```
{
    "model": "o3-deep-research",
    "stream" : true,
    "input": [
      {
        "role": "user",
        "content": "获取网页内容并总结：https://xxxxx"
      }
    ],
    "tools": [
        {
            "type": "mcp",
            "server_label": "modelscope",
            "server_url": "https://mcp.api-inference.modelscope.net/xxxx/sse"
        }
        
    ]
}
```

## GPT-5 / GPT-5-mini 为什么这么慢？ 

这是因为GPT-5系列是推理模型，而OpenAI不输出推理内容，所以我们需要等待OpenAI推理完成后，才能返回结果。

如果想要响应速度更快，可以降低推理程度。例如：

json

```
{
  "model": "gpt-5",
  "stream": true,
  "input": "hi~",
  "reasoning": {
    "effort": "minimal"
  }
}
```

努力程度

说明

minimal

最小努力，响应速度最快, 仅支持gpt-5系列模型使用， o系列无法使用

low

较低努力，响应速度较快

medium

中等努力，响应速度较慢

high

最大努力，响应速度最慢

## Gemini 2.5 Flash为什么这么慢 

这是因为`Gemini 2.5 Flash` 是混合模型，默认开启推理。

如果想要响应速度更快，可以关闭推理。

OpenAI chat API 接口可以直接请求`gemini-2.5-flash-nothinking`。

如果使用Gemini API 接口，需要设置`thinkingConfig` 参数：

json

```
curl --location --request POST 'https://api.maisi-ai.com/gemini/v1beta/models/gemini-2.5-flash:streamGenerateContent?alt=sse' \
--header 'Content-Type: application/json' \
--header 'x-goog-api-key: sk-xxxxx' \
--data-raw '{
  "contents": [
    {
      "role": "user",
      "parts": [
        {
          "text": "hi~"
        }
      ]
    }
  ],
  "generationConfig": {
    "thinkingConfig": {
      "includeThoughts": false,
      "thinkingBudget": 0
    }
  }
}'
```

## 为什么推理模型很容易请求失败 / 超时 ？ 

这是因为推理模型会需要更多的耗时，特别是在遇到复杂的任务时， 耗时可能超过`2000s`，所以很容易请求失败或者超时。 解决方法：

1.  尽量使用`stream` 模式，避免请求超时。
2.  如果想要在`非 stream` 模式下使用，需要增加请求超时设置。
3.  也可以在`令牌管理`页面中，打开`心跳设置(实验性)`的开关。

::: warning ⚠️ 注意
心跳设置是指当在请求时，如果长时间没有返回数据，您的客户端可能会因为超时机制而断开连接。为了保持TCP连接不会因超时中断，您可以开启心跳设置，当请求超出您设置的开始时间，且无响应时，我们将会每隔5秒发送一次心跳请求(非流式请求返回空行，流式返回::PING)，以保持连接。注意：如果您在使用中转程序时，请不要开启该设置，可能会出现不可预知的问题。
:::