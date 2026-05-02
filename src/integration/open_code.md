# OpenCode 

详细文档请参考 [OpenCode 官方文档](https://opencode.ai/docs/#install)

## 安装 

快速安装NPMYarnBunbrew

bash

```
curl -fsSL https://opencode.ai/install | bash
```

bash

```
npm install -g opencode-ai
```

bash

```
yarn global add opencode-ai
```

bash

```
bun install -g opencode-ai
```

bash

```
brew install anomalyco/tap/opencode
```

## 添加配置文件 

打开配置文件

-   Mac/Linux: `~/.config/opencode/opencode.json`
-   Windows: `Users\***\.config\opencode\opencode.json`

在配置文件中添加 Maisi 的 provider 配置，示例如下(复制时，记得把下面的注释删除)：

json

```
{
  "$schema": "https://opencode.ai/config.json",
  "provider": {
    "anthropic": {
      "name": "Anthropic",
      "options": {
        "baseURL": "https://api.maisi-ai.com/v1"
      }
    },
    "openai": {
      "options": {
        "baseURL": "https://api.maisi-ai.com/v1"
      },
      "models": {
        "gpt-5.2": {
          "options": { # 注意：include和store需要按这里配置，否则可能无法正常使用
            "include": ["reasoning.encrypted_content"],
            "store": false,
            "reasoningEffort": "high",
            "textVerbosity": "high",
            "reasoningSummary": "auto"
          }
        },
        "gpt-5.2-codex": {
          "options": {
            "include": ["reasoning.encrypted_content"],
            "store": false
          }
        }
      }
    },
    "maisi": { // 这是定义第三方模型的配置
      "npm": "@ai-sdk/openai-compatible",
      "name": "Maisi", // 显示名称
      "options": {
        "baseURL": "https://api.maisi-ai.com/v1" // Maisi 的基础 URL
      },
      "models": {
        "deepseek-v3.2": {  // 这里的 "deepseek-v3.2" 是模型 ID，可以根据需要更改(可查看我们的[模型列表](https://api.maisi-ai.com/dashboard/model_list))
          "name": "DeepSeek V3.2" // 显示名称
        }
      }
    }
  }
}
```

::: warning ⚠️ 注意
为什么要拆分成`OpenAI`/`Anthropic`/`Maisi`三种 provider 呢？ 因为 OpenCode 内置的 OpenAI 和 Anthropic provider 有一些特殊的功能和优化，如果直接用 Maisi 作为 OpenAI/Anthropic 的 provider，可能会导致某些功能无法使用或者体验不佳。
:::

## 添加认证信息 

1.  在 Maisi 平台[令牌管理](https://api.maisi-ai.com/dashboard/key)中生成的 API Key。
2.  终端中执行`opencode auth login`,先选择`OpenAI`，选择`Manually enter API Key`，然后输入你的 API Key。
3.  再在终端中执行`opencode auth login`添加`Anthropic`的认证信息，选择`Manually enter API Key`，然后输入你的 API Key。
4.  最后我们添加`maisi`的认证信息，执行`opencode auth login`，然后选择最下面的`Other`，系统会提示你输入 Provider ID，请输入`maisi`,然后输入你的 API Key。

bash

```
opencode auth login

┌  Add credential
│
◇  Select provider
│  Anthropic
│
◇  Login method
│  Manually enter API Key
│
◇  Enter your API key
│  ▪▪▪▪▪▪▪▪▪▪▪▪▪▪▪▪▪▪▪▪▪▪▪▪▪▪▪▪▪▪▪▪▪▪▪▪▪▪▪▪▪▪▪▪▪▪▪▪▪▪▪▪▪▪▪▪▪▪▪▪▪▪
│
└  Done

opencode auth login

┌  Add credential
│
◇  Select provider
│  Other
│
◇  Enter provider id
│  maisi
│
▲  This only stores a credential for maisi - you will need configure it in opencode.json, check the docs for examples.
│
◆  Enter your API key
│  ▪▪▪▪▪▪▪▪▪▪▪▪▪▪▪▪▪▪▪▪▪▪▪▪▪▪▪▪▪▪▪▪▪▪▪▪▪▪▪▪▪▪▪▪▪▪▪▪▪▪▪▪▪▪▪▪▪▪▪▪▪▪
```

## 使用 

在你的代码目录中，启动 OpenCode：

bash

```
opencode
```

第一次使用时，请先初始化，在`opencode`中执行：

bash

```
/init
```

然后就可以愉快地使用 OpenCode 了！,通过`/models`命令可以切换模型。

使用`TAB`键可以切换`plan`和`build`模式。建议使用`plan`模式生成计划，确认无误后，使用`build`模式生成代码。

# Oh My OpenCode 

[Oh My OpenCode](https://github.com/code-yeongyu/oh-my-opencode) 是 OpenCode 的增强工具， 它提供了一些预设和插件，可以提升 OpenCode 的使用体验。

## 安装 

首先你需要按照上面的教程安装 OpenCode。

然后在终端中，打开`opencode`.

bash

```
opencode
```

在`opencode`中的聊天界面，输入以下文本并回车：

text

```
Install and configure oh-my-opencode by following the instructions here:
https://raw.githubusercontent.com/code-yeongyu/oh-my-opencode/refs/heads/master/docs/guide/installation.md
```

你的 OpenCode 会自动开始安装 Oh My OpenCode。在此期间，他会询问你三个问题：

1.  你是否有`Claude code Pro/Max`订阅？ 不建议选择`Yes`，因为目前Claude可能会封号。
2.  你是否有`ChatGPT Plus/Pro`订阅？ 根据你的实际情况选择`Yes`或`No`。
3.  你是否想集成`Google Gemini`？ 根据你的实际情况选择`Yes`或`No`。如果你有Gemini的订阅（包括学生领取的免费一年），可以选择`Yes`，否则选择`No`。

回答完成后它会自动帮你安装上对应的订阅插件，让你能够把自己的订阅接入到 OpenCode 中。

## 配置 

安装完成后，你会发现`opencode.json`配置文件中多了一些内容，这些内容是 Oh My OpenCode 自动帮你添加的。

json

```
{
  "$schema": "https://opencode.ai/config.json",
  "provider": {
    "anthropic": {
      "name": "Anthropic",
      "options": {
        "baseURL": "https://api.maisi-ai.com/v1"
      }
    },
    "openai": {
      "options": {
        "baseURL": "https://api.maisi-ai.com/v1"
      },
      "models": {
        "gpt-5.2": {
          "options": {
            "include": ["reasoning.encrypted_content"],
            "store": false,
            "reasoningEffort": "high",
            "textVerbosity": "high",
            "reasoningSummary": "auto"
          }
        },
        "gpt-5.2-codex": {
          "options": {
            "include": ["reasoning.encrypted_content"],
            "store": false
          }
        }
      }
    },
    "maisi": {
      "npm": "@ai-sdk/openai-compatible",
      "name": "Maisi",
      "options": {
        "baseURL": "https://api.maisi-ai.com/v1"
      },
      "models": {
        "deepseek-v3.2": {
          "name": "DeepSeek V3.2"
        }
      }
    },
    "google": {
      "name": "Google",
      "models": {
        "antigravity-gemini-3-pro-high": {
          "name": "Gemini 3 Pro High (Antigravity)",
          "thinking": true,
          "attachment": true,
          "limit": {
            "context": 1048576,
            "output": 65535
          },
          "modalities": {
            "input": ["text", "image", "pdf"],
            "output": ["text"]
          }
        },
        "antigravity-gemini-3-pro-low": {
          "name": "Gemini 3 Pro Low (Antigravity)",
          "thinking": true,
          "attachment": true,
          "limit": {
            "context": 1048576,
            "output": 65535
          },
          "modalities": {
            "input": ["text", "image", "pdf"],
            "output": ["text"]
          }
        },
        "antigravity-gemini-3-flash": {
          "name": "Gemini 3 Flash (Antigravity)",
          "attachment": true,
          "limit": {
            "context": 1048576,
            "output": 65536
          },
          "modalities": {
            "input": ["text", "image", "pdf"],
            "output": ["text"]
          }
        }
      }
    }
  },
  "plugin": ["oh-my-opencode", "[email protected]"]
}
```

并且它自动添加了一个配置文件：`~/.config/opencode/oh-my-opencode.json`，用于存储 Oh My OpenCode 的相关配置。

json

```
{
  "$schema": "https://raw.githubusercontent.com/code-yeongyu/oh-my-opencode/master/assets/oh-my-opencode.schema.json",
  "google_auth": false, // 如果用反重力插件的话，这个需要设为 false
  "claude_code": { // 禁止 OpenCode 自动读取 Claude 的配置
    "mcp": false,
    "commands": false,
    "skills": false,
    "agents": false,
    "hooks": false
  },
  "agents": {
    // 西西弗斯，负责协调和直接执行简单的任务
    "Sisyphus": {
      "model": "openai/gpt-5.2"
    },
    // 先知，执行困难的任务和debug
    "oracle": {
      "model": "openai/gpt-5.2"
    },
    // 帮助你查找库相关的信息
    "librarian": {
      "model": "anthropic/claude-sonnet-4-5-20250929"
    },
    // 探索现有代码仓库
    "explore": {
      "model": "anthropic/claude-sonnet-4-5-20250929"
    },
    // 前端设计专家
    "frontend-ui-ux-engineer": {
      "model": "google/antigravity-gemini-3-pro-high"
    },
    // 文档编写专家
    "document-writer": {
      "model": "google/antigravity-gemini-3-flash"
    },
    // 多模态识别专家
    "multimodal-looker": {
      "model": "google/antigravity-gemini-3-flash"
    }
  }
}
```

如果你选择集成了`Google Gemini`，那么你可以在这里查看它的[模型映射](https://github.com/NoeFabris/opencode-antigravity-auth?tab=readme-ov-file#model-reference)，并根据需要在上面添加你需要的模型。

::: warning ⚠️ 注意
集成`Google Gemini`时，你需要先通过`opencode auth login`，选择Google进行授权登录，才可以使用。
:::