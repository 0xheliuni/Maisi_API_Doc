# Claude(Anthropic) SDK 设置 

设置您的开发环境，以便使用您首选语言的 SDK 调用 Claude API。

本页介绍如何设置本地开发环境以使用 Claude API。

::: warning ⚠️ 注意
注意：Claude API 目前仅支持 `Claude` 模型。 其他模型无法使用 Claude API 进行调用
:::

## 创建令牌 

开始之前，请通过[令牌说明](/docs/use/token.html)创建一个 API 密钥，用于安全访问 API。将密钥存储在安全位置，例如 `.zshrc` 文件或您电脑上的其他文本文件。生成 API 密钥后，在终端中将其导出为环境变量。

macOS/LinuxWindows

bash

```
export ANTHROPIC_API_KEY="your_api_key_here"
```

bash

```
setx ANTHROPIC_API_KEY "your_api_key_here"
```

Claude(Anthropics) SDK 会自动从系统环境中读取您的 API 密钥。

当然，您也可以在代码中直接设置 API 密钥，但这并不安全，尤其是在共享代码时。建议使用环境变量来保护您的密钥。

## 安装 SDK 

### JavaScript 

bash

```
npm install @anthropic-ai/sdk
```

安装 Claude(Anthropics) SDK 后，创建一个名为 `example.mjs` 的文件，并将示例代码复制到其中：

js

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

使用 `node example.mjs` （或 Deno 或 Bun 的等效命令）执行代码。几秒钟后，你应该能看到 API 请求的输出结果。

[在 GitHub 上查看

查看 Claude(Anthropics) JavaScript SDK 的源代码和文档。

](https://github.com/anthropics/anthropic-sdk-typescript)

### Python 

要在 Python 中使用 Claude(Anthropics) API，您可以使用官方的 [Claude(Anthropics) Python SDK](https://github.com/anthropics/anthropic-sdk-python)。首先通过 [pip](https://pypi.org/project/pip/) 安装该 SDK：

bash

```
pip install anthropic
```

安装 Claude(Anthropics) SDK 后，创建一个名为 `example.py` 的文件，并将示例代码复制到其中：

python

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

使用 `python example.py` 执行代码。几秒钟后，您应该能看到 API 请求的输出。

[在 GitHub 上查看

查看 Claude(Anthropics) Python SDK 的源代码和文档。

](https://github.com/anthropics/anthropic-sdk-python)

### Java 

Anthropic 提供了一个针对 Java 编程语言的 API 辅助工具，目前处于测试阶段。您可以使用以下配置来包含 Maven 依赖：

xml

```
<dependency>
  <groupId>com.anthropic</groupId>
  <artifactId>anthropic-java</artifactId>
  <version>2.2.0</version>
</dependency>
```

一个简单的聊天补全 API 请求看起来像这样：

java

```
import com.anthropic.client.AnthropicClient;
import com.anthropic.client.okhttp.AnthropicOkHttpClient;
import com.anthropic.models.messages.Message;
import com.anthropic.models.messages.MessageCreateParams;
import com.anthropic.models.messages.Model;

// Configures using the `ANTHROPIC_API_KEY`, `ANTHROPIC_AUTH_TOKEN` and `ANTHROPIC_BASE_URL` environment variables
AnthropicClient client = AnthropicOkHttpClient.fromEnv();

MessageCreateParams params = MessageCreateParams.builder()
    .maxTokens(1024L)
    .addUserMessage("Hello, Claude")
    .model(Model.CLAUDE_SONNET_4_20250514)
    .build();
Message message = client.messages().create(params);
```

[在 GitHub 上查看

查看 Claude(Anthropics) Java SDK 的源代码和文档。

](https://github.com/anthropics/anthropic-sdk-java)

### Go 

Anthropic 提供了一个针对 Go 编程语言的 API 辅助工具，目前处于测试阶段。您可以使用以下代码导入该库：

go

```
import (
	"github.com/anthropics/anthropic-sdk-go" // imported as anthropic
)
```

go

```
package main

import (
	"context"
	"fmt"

	"github.com/anthropics/anthropic-sdk-go"
	"github.com/anthropics/anthropic-sdk-go/option"
)

func main() {
	client := anthropic.NewClient(
		option.WithAPIKey("my-anthropic-api-key"), // defaults to os.LookupEnv("ANTHROPIC_API_KEY")
        option.WithBaseURL("https://api.maisi-ai.com/claude"), // defaults to os.LookupEnv("ANTHROPIC_BASE_URL")
	)
	message, err := client.Messages.New(context.TODO(), anthropic.MessageNewParams{
		MaxTokens: 1024,
		Messages: []anthropic.MessageParam{
			anthropic.NewUserMessage(anthropic.NewTextBlock("What is a quaternion?")),
		},
		Model: anthropic.ModelClaudeSonnet4_20250514,
	})
	if err != nil {
		panic(err.Error())
	}
	fmt.Printf("%+v\n", message.Content)
}
```

[在 GitHub 上查看

查看 Claude(Anthropics) Go SDK 的源代码和文档。

](https://github.com/anthropics/anthropic-sdk-go)

### Ruby 

Anthropic Ruby 库为任何 Ruby 3.2.0+ 应用程序提供便捷访问 Anthropic REST API 的功能。它附带了全面的类型和 Yard、RBS 及 RBI 格式的文档字符串——下面有使用 Sorbet 的示例。标准库的 net/http 用作 HTTP 传输，连接池通过 `connection_pool gem` 实现。

ruby

```
gem "anthropic", "~> 1.2.0"
```

ruby

```
require "bundler/setup"
require "anthropic"

anthropic = Anthropic::Client.new(
  api_key: ENV["ANTHROPIC_API_KEY"], # This is the default and can be omitted
  base_url: "https://api.maisi-ai.com/claude" # This is the default and can be omitted
)

message = anthropic.messages.create(
  max_tokens: 1024,
  messages: [{role: "user", content: "Hello, Claude"}],
  model: :"claude-sonnet-4-20250514"
)

puts(message.content)
```

[在 GitHub 上查看

查看 Claude(Anthropics) Ruby SDK 的源代码和文档。

](https://github.com/anthropics/anthropic-sdk-ruby)