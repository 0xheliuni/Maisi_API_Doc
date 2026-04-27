# 令牌说明 

令牌是您的请求认证，请妥善保管。

## 令牌创建 

1.  点击[令牌页面](https://maisi-ai.com/dashboard/key)，进入令牌页面, 并点击创建按钮。 ![令牌页面](/image/token1.webp)
2.  生成令牌后，点击列表中的复制按钮，即可获取生成的令牌。 ![令牌页面](/image/token2.webp)

## 令牌使用 

### 平台已配置的第三方应用 

我们平台已经配置以下应用的配置链接：

-   [Next Chat](https://github.com/ChatGPTNextWeb/NextChat)
-   [Lobe Chat](https://github.com/lobehub/lobe-chat)
-   [Midjourney Proxy](https://github.com/Dooy/chatgpt-web-midjourney-proxy)
-   [OpenChat](https://opencat.app/zh-Hans/)
-   [BotGem](https://botgem.com/)

您可以直接点击列表中的`聊天`按钮使用， 也可以点击`复制`按钮旁边的三角形按钮，将配置链接复制到您的剪贴板中。

### 平台未配置的第三方应用 

如果您需要使用平台未配置的第三方应用，您需要将我们的 API 地址以及您的令牌添加到第三方应用中。

不同的客户端需要填写不同的`BASE_URL`，请尝试如下地址：

-   `https://maisi-ai.com`
-   `https://maisi-ai.com/v1`
-   `https://maisi-ai.com/v1/chat/completions`