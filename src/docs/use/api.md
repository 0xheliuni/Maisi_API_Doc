# 调用说明 

Maisi 提供多种大模型/多模态模型的统一调用入口。

-   完整接口清单与参数：以 [API 开发文档](https://api-docs.maisi-ai.com/) 为准
-   常见报错排查：见 [常见错误以及解决办法](/docs/error.html)

## 1\. 基础地址（Base URL） 

所有地址数据互通，可按网络情况切换：

-   主站节点：`https://maisi-ai.com`
-   大陆优化：`https://api.maisi-ai.com`

## 2\. 鉴权方式（Authorization） 

> 你在控制台创建的 API Key，本质上就是调用 API 的凭证。请妥善保管。

接口风格

Base URL

Header

适用场景

OpenAI 兼容（推荐）

`https://api.maisi-ai.com/v1`

`Authorization: Bearer <API_KEY>`

统一调用大多数模型（文本/图像/音频/工具/流式等）

Claude 原生

`https://api.maisi-ai.com/claude`

`x-api-key: <API_KEY>`

需要严格对齐 Anthropic API 形态/字段

Gemini 原生

`https://api.maisi-ai.com/gemini`

`x-goog-api-key: <API_KEY>`

需要严格对齐 Gemini API 形态/字段（含 `?alt=sse`）

## 3\. 推荐阅读路径 

### 3.1 推荐：OpenAI 兼容接口（大多数用户只需要这一套） 

-   [OpenAI 兼容接口（总览）](/docs/use/api/openai_compatible.html)
-   [Chat Completions（/v1/chat/completions）](/docs/use/api/chat_completions.html)
-   [Responses（/v1/responses）](/docs/use/api/responses.html)
-   [Images（/v1/images/\*）](/docs/use/api/images.html)
-   [Audio（/v1/audio/\*）](/docs/use/api/audio.html)

### 3.2 厂商原生接口（可选） 

当你需要与官方 SDK / 字段完全一致时使用：

-   [Claude（原生接口）](/docs/use/api/claude.html)
-   [Gemini（原生接口）](/docs/use/api/gemini.html)

### 3.3 其他能力 / 任务型接口 

-   [OCR](/docs/use/api/ocr.html)
-   [Midjourney](/docs/use/api/midjourney.html)
-   [Suno](/docs/use/api/suno.html)
-   [FalAI](/docs/use/api/falai.html)
-   [可灵（Kling）](/docs/use/api/kling.html)
-   [Replicate](/docs/use/api/replicate.html)
-   [BFL](/docs/use/api/bfl.html)

## 4\. 相关主题 

-   SDK 配置：
    -   [OpenAI SDK 设置](/docs/use/openai_sdk.html)
    -   [Claude SDK 设置](/docs/use/claude_sdk.html)
    -   [Gemini SDK 设置](/docs/use/gemini_sdk.html)
-   推理与高级能力：
    -   [推理设置](/docs/use/reasoning.html)
    -   [特殊用法](/docs/use/special_usage.html)
    -   [接口兼容](/docs/use/chat.html)