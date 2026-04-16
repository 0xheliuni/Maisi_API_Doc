# 接口兼容 

## responses 

目前所有非 OpenAI 模型的请求均支持`responses`接口。 OpenAI 模型在[OpenAI 模型列表](https://platform.openai.com/docs/models)中查看支持情况。

## chat 

目前我们针对以下 OpenAI 模型做了`chat`接口兼容的支持：

-   o3-pro-2025-06-10
-   o3-pro
-   o1-pro-2025-03-19
-   o1-pro
-   o3-deep-research-2025-06-26
-   o3-deep-research
-   o4-mini-deep-research-2025-06-26
-   o4-mini-deep-research
-   codex-mini-latest

### 内部工具调用 

直接在 tool 字段中添加你想要使用的工具

json

```
{
  "model": "o3-pro",
  "stream": true,
  "messages": [
    {
      "role": "user",
      "content": "今天有什么新闻？"
    }
  ],
  "tools": [
    {
      "type": "web_search_preview"
    }
  ]
}
```

### 输出推理摘要 

如果存在推理摘要，他们将在`reasoning_content`字段中显示。

json

```
{
  "model": "o3-pro",
  "stream": true,
  "messages": [
    {
      "role": "user",
      "content": "今天有什么新闻？"
    }
  ],
  "reasoning": {
    "summary": "detailed"
  }
}
```

### 推理努力程度 

两种设置方法，他们等效

json

```
{
  "model": "o3-pro",
  "stream": true,
  "messages": [
    {
      "role": "user",
      "content": "今天有什么新闻？"
    }
  ],
  "reasoning": {
    "effort": "high"
  }
}
```

json

```
{
  "model": "o3-pro",
  "stream": true,
  "messages": [
    {
      "role": "user",
      "content": "今天有什么新闻？"
    }
  ],
  "reasoning_effort": "high"
}
```