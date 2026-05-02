# Gemini SDK 设置 

Gemini API 让您可以访问 Google 最新的生成模型。此 API 参考提供了 Gemini API SDK 中可用类和方法的详细信息。

::: warning ⚠️ 注意
注意：Gemini API 目前仅支持 `Gemini` 模型。 其他模型无法使用 Gemini API 进行调用
:::

## 安装官方 SDK 

### Python 

使用 [Python 3.9+](https://www.python.org/downloads/)及以上版本, 使用以下 [pip](https://packaging.python.org/en/latest/tutorials/installing-packages/) 命令安装 [google-genai](https://pypi.org/project/google-genai/) 包:

bash

```
pip install -q -U google-genai
```

安装 Gemini SDK 后，创建一个名为 `example.py` 的文件，并将示例代码复制到其中：

python

```

from google import genai
from google.genai import types

client = genai.Client(
    http_options=types.HttpOptions(base_url='https://api.maisi-ai.com/gemini'),
    api_key="YOUR_API_KEY")

response = client.models.generate_content(
    model="gemini-2.0-flash", contents="Explain how AI works in a few words"
)
print(response.text)
```

使用 `python example.py` 执行代码。几秒钟后，您应该能看到 API 请求的输出。

[在 GitHub 上查看

查看 Gemini Python SDK 的源代码和文档。

](https://github.com/googleapis/python-genai)

### JavaScript 

使用 [Node.js v18+](https://nodejs.org/en/download/package-manager)，通过以下 [npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm) 命令安装适用于 TypeScript 和 JavaScript 的 [Google Gen AI SDK](https://www.npmjs.com/package/@google/genai)：

bash

```
npm install @google/genai
```

js

```
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({
  apiKey: "<your-api-key>",
  httpOptions: {
    baseUrl: "https://api.maisi-ai.com/gemini",
  },
});

async function main() {
  const response = await ai.models.generateContent({
    model: "gemini-2.0-flash",
    contents: "Explain how AI works in a few words",
  });
  console.log(response.text);
}

main();
```

使用 `node example.mjs` （或 Deno 或 Bun 的等效命令）执行代码。几秒钟后，你应该能看到 API 请求的输出结果。

[在 GitHub 上查看

查看 Gemini JavaScript SDK 的源代码和文档。

](https://github.com/googleapis/js-genai)