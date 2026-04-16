# Lobe Chat 

[GitHub](https://github.com/lobehub/lobe-chat)

## 简单配置 

`https://{url}/?settings={"keyVaults":{"openai":{"apiKey":"{key}","baseURL":"https://api.maisi-ai.com/v1"}},"languageModel":{"openai":{"autoFetchModelLists":true,"enabled":true,"enabledModels":["gpt-4o","gpt-4o-mini","o1-preview","o1-mini","gpt-4o-2024-08-06","gpt-4-turbo","chatgpt-4o-latest","claude-3-5-sonnet-20240620","claude-3-haiku-20240307","claude-3-opus-20240229","claude-3-sonnet-20240229","gemini-1.5-flash-latest","gemini-1.5-pro-latest"]}, "ollama": {"enabled": false}}, "check_updates": false}}`

-   `{url}` 是您部署的服务器地址
-   `{key}` 是您的令牌

替换`{url}`和`{key}`后，在浏览器中打开即可使用

## 手动配置 

应用配置 - 语言模型 - OpenAI:

1.  API KEY 填写您的令牌
2.  BASE URL 填写 `https://api.maisi-ai.com/v1`
3.  点击`获取模型列表`按钮，获取模型列表
4.  点击`模型列表`， 添加需要使用的模型

![令牌页面](/image/lobe_chat.webp)