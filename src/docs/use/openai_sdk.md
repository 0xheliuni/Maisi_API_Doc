# OpenAI SDK 设置 

设置您的开发环境，以便使用您首选语言的 SDK 调用 OpenAI API。

本页介绍如何设置本地开发环境以使用 OpenAI API。您可以使用官方支持的 SDK、社区库，或您自己喜欢的 HTTP 客户端。

## 创建并导出 API 密钥 

开始之前，请通过[令牌说明](/docs/use/token.html)创建一个 API 密钥，用于安全访问 API。将密钥存储在安全位置，例如 `.zshrc` 文件或您电脑上的其他文本文件。生成 API 密钥后，在终端中将其导出为环境变量。

macOS/LinuxWindows

bash

```
export OPENAI_API_KEY="your_api_key_here"
```

bash

```
setx OPENAI_API_KEY "your_api_key_here"
```

OpenAI SDK 会自动从系统环境中读取您的 API 密钥。

当然，您也可以在代码中直接设置 API 密钥，但这并不安全，尤其是在共享代码时。建议使用环境变量来保护您的密钥。

## 安装官方 SDK 

### JavaScript 

要在服务器端的 JavaScript 环境中使用 OpenAI API，如 Node.js、Deno 或 Bun，可以使用官方的 TypeScript 和 JavaScript OpenAI SDK。通过 npm 或你喜欢的包管理器安装 SDK 开始使用：

bash

```
npm install openai
```

安装 OpenAI SDK 后，创建一个名为 `example.mjs` 的文件，并将示例代码复制到其中：

js

```
import OpenAI from "openai";
const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
  baseURL: "https://api.maisi-ai.com/v1", // 如果使用 Maisi，请确保设置正确的 baseURL
});

const response = await client.responses.create({
  model: "gpt-4.1",
  input: "Write a one-sentence bedtime story about a unicorn.",
});

console.log(response.output_text);
```

使用 `node example.mjs` （或 Deno 或 Bun 的等效命令）执行代码。几秒钟后，你应该能看到 API 请求的输出结果。

[在 GitHub 上查看

查看 OpenAI JavaScript SDK 的源代码和文档。

](https://github.com/openai/openai-node)

### Python 

要在 Python 中使用 OpenAI API，您可以使用官方的 [OpenAI Python SDK](https://github.com/openai/openai-python)。首先通过 [pip](https://pypi.org/project/pip/) 安装该 SDK：

bash

```
pip install openai
```

安装 OpenAI SDK 后，创建一个名为 `example.py` 的文件，并将示例代码复制到其中：

python

```
from openai import OpenAI
import os

base_url = "https://api.maisi-ai.com/v1"  # 如果使用 Maisi，请确保设置正确的 baseURL
api_key = os.getenv("OPENAI_API_KEY") # 从环境变量中获取 API 密钥
client = OpenAI(base_url=base_url, api_key=api_key)

response = client.chat.completions.create(
  model="gpt-4.1",
  messages=[
    {
      "role": "user",
      "content": "Write a one-sentence bedtime story about a unicorn."
    }
  ]
)

print(response.choices[0].message.content)
```

使用 `python example.py` 执行代码。几秒钟后，您应该能看到 API 请求的输出。

[在 GitHub 上查看

查看 OpenAI Python SDK 的源代码和文档。

](https://github.com/openai/openai-python)

### .NET 

OpenAI 与微软合作，提供了官方支持的 C# API 客户端。您可以通过.NET CLI 从 NuGet 安装它。

bash

```
dotnet add package OpenAI
```

一个简单的聊天补全 API 请求看起来像这样：

csharp

```
using OpenAI.Chat;

ChatClient client = new(
  model: "gpt-4.1",
  apiKey: Environment.GetEnvironmentVariable("OPENAI_API_KEY"),
  baseUrl: "https://api.maisi-ai.com/v1" // 如果使用 Maisi，请确保设置正确的 baseURL
);

ChatCompletion completion = client.CompleteChat("Say 'this is a test.'");

Console.WriteLine($"[ASSISTANT]: {completion.Content[0].Text}");
```

[在 GitHub 上查看

查看 OpenAI .NET SDK 的源代码和文档。

](https://github.com/openai/openai-dotnet)

### Java 

OpenAI 提供了一个针对 Java 编程语言的 API 辅助工具，目前处于测试阶段。您可以使用以下配置来包含 Maven 依赖：

xml

```
<dependency>
    <groupId>com.openai</groupId>
    <artifactId>openai-java</artifactId>
    <version>0.31.0</version>
</dependency>
```

一个简单的聊天补全 API 请求看起来像这样：

java

```
import com.openai.client.OpenAIClient;
import com.openai.client.okhttp.OpenAIOkHttpClient;
import com.openai.models.ChatCompletion;
import com.openai.models.ChatCompletionCreateParams;
import com.openai.models.ChatModel;

// Configures using the `OPENAI_API_KEY`, `OPENAI_ORG_ID` and `OPENAI_PROJECT_ID`
// environment variables
OpenAIClient client = OpenAIOkHttpClient.fromEnv();

ChatCompletionCreateParams params = ChatCompletionCreateParams.builder()
    .addUserMessage("Say this is a test")
    .model(ChatModel.O3_MINI)
    .build();
ChatCompletion chatCompletion = client.chat().completions().create(params);
```

[在 GitHub 上查看

查看 OpenAI Java SDK 的源代码和文档。

](https://github.com/openai/openai-java)

### Go 

OpenAI 提供了一个针对 Go 编程语言的 API 辅助工具，目前处于测试阶段。您可以使用以下代码导入该库：

go

```
import (
  "github.com/openai/openai-go" // imported as openai
)
```

一个简单的聊天补全 API 请求看起来像这样：

go

```
package main

import (
  "context"
  "fmt"

  "github.com/openai/openai-go"
  "github.com/openai/openai-go/option"
)

func main() {
  client := openai.NewClient(
    option.WithAPIKey("My API Key"), // defaults to os.LookupEnv("OPENAI_API_KEY")
    option.WithBaseURL("https://api.maisi-ai.com/v1"), // 如果使用 Maisi，请确保设置正确的 baseURL
  )
  chatCompletion, err := client.Chat.Completions.New(
    context.TODO(), openai.ChatCompletionNewParams{
      Messages: openai.F(
        []openai.ChatCompletionMessageParamUnion{
          openai.UserMessage("Say this is a test"),
        }
      ),
      Model: openai.F(openai.ChatModelGPT4o),
    }
  )

  if err != nil {
    panic(err.Error())
  }

  println(chatCompletion.Choices[0].Message.Content)
}
```

[在 GitHub 上查看

查看 OpenAI Go SDK 的源代码和文档。

](https://github.com/openai/openai-go)

## 社区库 

以下库由更广泛的开发者社区构建和维护。您也可以关注我们在 GitHub 上的 [OpenAPI 规范仓库](https://github.com/openai/openai-openapi)，以便及时获取我们对 API 进行更改的最新信息。

请注意，OpenAI 不会验证这些项目的正确性或安全性。使用时请自行承担风险！

### C#/.NET 

-   [Betalgo.OpenAI](https://github.com/betalgo/openai) 由 [Betalgo](https://github.com/betalgo) 提供
-   [OpenAI-API-dotnet](https://github.com/OkGoDoIt/OpenAI-API-dotnet) 由 [OkGoDoIt](https://github.com/OkGoDoIt) 提供
-   [OpenAI-DotNet](https://github.com/RageAgainstThePixel/OpenAI-DotNet) 由 [RageAgainstThePixel](https://github.com/RageAgainstThePixel) 提供

### C++ 

-   [liboai](https://github.com/D7EAD/liboai) 由 [D7EAD](https://github.com/D7EAD) 提供

### Clojure 

-   [openai-clojure](https://github.com/wkok/openai-clojure) 由 [wkok](https://github.com/wkok) 提供

### Crystal 

-   [openai.cr](https://github.com/sferik/openai-crystal) 由 [sferik](https://github.com/sferik) 提供

### Dart/Flutter 

-   [openai](https://github.com/anasfik/openai) 由 [anasfik](https://github.com/anasfik) 提供

### Delphi 

-   [DelphiOpenAI](https://github.com/HemulGM/DelphiOpenAI) 由 [HemulGM](https://github.com/HemulGM) 提供

### Elixir 

-   [openai.ex](https://github.com/mgallo/openai.ex) 由 [mgallo](https://github.com/mgallo) 提供

### Go 

-   [go-gpt3](https://github.com/sashabaranov/go-gpt3) 由 [sashabaranov](https://github.com/sashabaranov) 提供

### Java 

-   [simple-openai](https://github.com/sashirestela/simple-openai) 由 [Sashir Estela](https://github.com/sashirestela) 提供
-   [Spring AI](https://spring.io/projects/spring-ai)

### Julia 

-   [OpenAI.jl](https://github.com/rory-linehan/OpenAI.jl) 由 [rory-linehan](https://github.com/rory-linehan) 提供

### Kotlin 

-   [openai-kotlin](https://github.com/Aallam/openai-kotlin) 由 [Mouaad Aallam](https://github.com/Aallam) 提供

### Node.js 

-   [openai-api](https://www.npmjs.com/package/openai-api) 由 [Njerschow](https://github.com/Njerschow) 提供
-   [openai-api-node](https://www.npmjs.com/package/openai-api-node) 由 [erlapso](https://github.com/erlapso) 提供
-   [gpt-x](https://www.npmjs.com/package/gpt-x) 由 [ceifa](https://github.com/ceifa) 提供
-   [gpt3](https://www.npmjs.com/package/gpt3) 由 [poteat](https://github.com/poteat) 提供
-   [gpts](https://www.npmjs.com/package/gpts) 由 [thencc](https://github.com/thencc) 提供
-   [@dalenguyen/openai](https://www.npmjs.com/package/@dalenguyen/openai) 由 [dalenguyen](https://github.com/dalenguyen) 提供
-   [tectalic/openai](https://github.com/tectalichq/public-openai-client-js) 由 [tectalic](https://tectalic.com/) 提供

### PHP 

-   [orhanerday/open-ai](https://packagist.org/packages/orhanerday/open-ai) 由 [orhanerday](https://github.com/orhanerday) 提供
-   [tectalic/openai](https://github.com/tectalichq/public-openai-client-php) 由 [tectalic](https://tectalic.com/) 提供
-   [openai-php](https://github.com/openai-php/client) 由 [openai-php](https://github.com/openai-php) 提供

### Python 

-   [chronology](https://github.com/OthersideAI/chronology) 由 [OthersideAI](https://www.othersideai.com/) 提供

### R 

-   [rgpt3](https://github.com/ben-aaron188/rgpt3) 由 [ben-aaron188](https://github.com/ben-aaron188) 提供

### Ruby 

-   [openai](https://github.com/nileshtrivedi/openai/) 由 [nileshtrivedi](https://github.com/nileshtrivedi) 提供
-   [ruby-openai](https://github.com/alexrudall/ruby-openai) 由 [alexrudall](https://github.com/alexrudall) 提供

### Rust 

-   [async-openai](https://github.com/64bit/async-openai) 由 [64bit](https://github.com/64bit) 提供
-   [fieri](https://github.com/lbkolev/fieri) 由 [lbkolev](https://github.com/lbkolev) 提供

### Scala 

-   [openai-scala-client](https://github.com/cequence-io/openai-scala-client) 由 [cequence-io](https://github.com/cequence-io) 提供

### Swift 

-   [AIProxySwift](https://github.com/lzell/AIProxySwift) 由 [Lou Zell](https://github.com/lzell) 提供
-   [OpenAIKit](https://github.com/dylanshine/openai-kit) 由 [dylanshine](https://github.com/dylanshine) 提供
-   [OpenAI](https://github.com/MacPaw/OpenAI/) 由 [MacPaw](https://github.com/MacPaw) 提供

### Unity 

-   [OpenAi-Api-Unity](https://github.com/hexthedev/OpenAi-Api-Unity) 由 [hexthedev](https://github.com/hexthedev) 提供
-   [com.openai.unity](https://github.com/RageAgainstThePixel/com.openai.unity) 由 [RageAgainstThePixel](https://github.com/RageAgainstThePixel) 提供

### Unreal Engine 

-   [OpenAI-Api-Unreal](https://github.com/KellanM/OpenAI-Api-Unreal) 由 [KellanM](https://github.com/KellanM) 提供

### Other OpenAI repositories 

-   [tiktoken](https://github.com/openai/tiktoken) - 计数令牌
-   [simple-evals](https://github.com/openai/simple-evals) - 简单评估库
-   [mle-bench](https://github.com/openai/mle-bench) - 评估机器学习工程师代理的库
-   [gym](https://github.com/openai/gym) - 强化学习环境
-   [swarm](https://github.com/openai/swarm) - 教育编排仓库