# OpenAI Codex 

1.  安装

shell

```
# 使用 Homebrew 安装
brew install codex

#使用 npm 安装
npm install -g @openai/codex
```

2.  配置

打开配置文件：

shell

```

vim ~/.codex/config.toml
```

填写以下内容：

toml

```
# 填写你默认使用的模型
model = "o3"
# 填写你默认使用的模型提供者
model_provider = "openai-chat-completions"

# 模型提供者的配置
[model_providers.openai-chat-completions]
# 将在Codex用户界面中显示的提供者名称。
name = "Maisi"

# API的基本URL。Codex将使用此URL来发送POST请求。
base_url = "https://maisi-ai.com/v1"
# 如果设置了 `env_key`，则标识在使用 Codex 与此提供者时必须设置的环境变量。环境变量的值必须非空，并将用于 POST 请求的 `Bearer TOKEN` HTTP 头中。
env_key = "Maisi_API_KEY"
# wire_api 的有效值为 "chat" 和 "responses"。如果省略，默认为 "chat"。
wire_api = "chat"
```

3.  设置环境变量

shell

```
export Maisi_API_KEY="sk-xxxx"
```

4.  使用

shell

```
# 交互式使用
codex

# 直接询问
codex "What is the capital of France?"
```