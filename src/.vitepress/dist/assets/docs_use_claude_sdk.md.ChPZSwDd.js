import{_ as a,o as n,c as p,ag as e}from"./chunks/framework.DXGyWiRo.js";const d=JSON.parse('{"title":"Claude(Anthropic) SDK 设置","description":"","frontmatter":{},"headers":[],"relativePath":"docs/use/claude_sdk.md","filePath":"docs/use/claude_sdk.md","lastUpdated":null}'),t={name:"docs/use/claude_sdk.md"};function i(l,s,o,c,r,h){return n(),p("div",null,[...s[0]||(s[0]=[e(`<h1 id="claude-anthropic-sdk-设置" tabindex="-1">Claude(Anthropic) SDK 设置 <a class="header-anchor" href="#claude-anthropic-sdk-设置" aria-label="Permalink to &quot;Claude(Anthropic) SDK 设置&quot;">​</a></h1><p>设置您的开发环境，以便使用您首选语言的 SDK 调用 Claude API。</p><p>本页介绍如何设置本地开发环境以使用 Claude API。</p><div class="warning custom-block"><p class="custom-block-title">⚠️ 注意</p><p>注意：Claude API 目前仅支持 <code>Claude</code> 模型。 其他模型无法使用 Claude API 进行调用</p></div><h2 id="创建令牌" tabindex="-1">创建令牌 <a class="header-anchor" href="#创建令牌" aria-label="Permalink to &quot;创建令牌&quot;">​</a></h2><p>开始之前，请通过<a href="/docs/use/token.html">令牌说明</a>创建一个 API 密钥，用于安全访问 API。将密钥存储在安全位置，例如 <code>.zshrc</code> 文件或您电脑上的其他文本文件。生成 API 密钥后，在终端中将其导出为环境变量。</p><p>macOS/LinuxWindows</p><p>bash</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>export ANTHROPIC_API_KEY=&quot;your_api_key_here&quot;</span></span></code></pre></div><p>bash</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>setx ANTHROPIC_API_KEY &quot;your_api_key_here&quot;</span></span></code></pre></div><p>Claude(Anthropics) SDK 会自动从系统环境中读取您的 API 密钥。</p><p>当然，您也可以在代码中直接设置 API 密钥，但这并不安全，尤其是在共享代码时。建议使用环境变量来保护您的密钥。</p><h2 id="安装-sdk" tabindex="-1">安装 SDK <a class="header-anchor" href="#安装-sdk" aria-label="Permalink to &quot;安装 SDK&quot;">​</a></h2><h3 id="javascript" tabindex="-1">JavaScript <a class="header-anchor" href="#javascript" aria-label="Permalink to &quot;JavaScript&quot;">​</a></h3><p>bash</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>npm install @anthropic-ai/sdk</span></span></code></pre></div><p>安装 Claude(Anthropics) SDK 后，创建一个名为 <code>example.mjs</code> 的文件，并将示例代码复制到其中：</p><p>js</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>import Anthropic from &quot;@anthropic-ai/sdk&quot;;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const anthropic = new Anthropic({</span></span>
<span class="line"><span>  apiKey: process.env.ANTHROPIC_API_KEY,</span></span>
<span class="line"><span>  baseURL: &quot;https://api.maisi-ai.com/claude&quot;,</span></span>
<span class="line"><span>});</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const msg = await anthropic.messages.create({</span></span>
<span class="line"><span>  model: &quot;claude-opus-4-20250514&quot;,</span></span>
<span class="line"><span>  max_tokens: 1000,</span></span>
<span class="line"><span>  temperature: 1,</span></span>
<span class="line"><span>  system: &quot;Respond only with short poems.&quot;,</span></span>
<span class="line"><span>  messages: [</span></span>
<span class="line"><span>    {</span></span>
<span class="line"><span>      role: &quot;user&quot;,</span></span>
<span class="line"><span>      content: [</span></span>
<span class="line"><span>        {</span></span>
<span class="line"><span>          type: &quot;text&quot;,</span></span>
<span class="line"><span>          text: &quot;Why is the ocean salty?&quot;,</span></span>
<span class="line"><span>        },</span></span>
<span class="line"><span>      ],</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span>  ],</span></span>
<span class="line"><span>});</span></span>
<span class="line"><span>console.log(msg);</span></span></code></pre></div><p>使用 <code>node example.mjs</code> （或 Deno 或 Bun 的等效命令）执行代码。几秒钟后，你应该能看到 API 请求的输出结果。</p><p>[在 GitHub 上查看</p><p>查看 Claude(Anthropics) JavaScript SDK 的源代码和文档。</p><p>](<a href="https://github.com/anthropics/anthropic-sdk-typescript" target="_blank" rel="noreferrer">https://github.com/anthropics/anthropic-sdk-typescript</a>)</p><h3 id="python" tabindex="-1">Python <a class="header-anchor" href="#python" aria-label="Permalink to &quot;Python&quot;">​</a></h3><p>要在 Python 中使用 Claude(Anthropics) API，您可以使用官方的 <a href="https://github.com/anthropics/anthropic-sdk-python" target="_blank" rel="noreferrer">Claude(Anthropics) Python SDK</a>。首先通过 <a href="https://pypi.org/project/pip/" target="_blank" rel="noreferrer">pip</a> 安装该 SDK：</p><p>bash</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>pip install anthropic</span></span></code></pre></div><p>安装 Claude(Anthropics) SDK 后，创建一个名为 <code>example.py</code> 的文件，并将示例代码复制到其中：</p><p>python</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>import anthropic</span></span>
<span class="line"><span></span></span>
<span class="line"><span>client = anthropic.Anthropic(</span></span>
<span class="line"><span>    api_key=&quot;your_api_key_here&quot;,</span></span>
<span class="line"><span>    base_url=&quot;https://api.maisi-ai.com/claude&quot;</span></span>
<span class="line"><span>)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>message = client.messages.create(</span></span>
<span class="line"><span>    model=&quot;claude-opus-4-20250514&quot;,</span></span>
<span class="line"><span>    max_tokens=1000,</span></span>
<span class="line"><span>    temperature=1,</span></span>
<span class="line"><span>    system=&quot;You are a world-class poet. Respond only with short poems.&quot;,</span></span>
<span class="line"><span>    messages=[</span></span>
<span class="line"><span>        {</span></span>
<span class="line"><span>            &quot;role&quot;: &quot;user&quot;,</span></span>
<span class="line"><span>            &quot;content&quot;: [</span></span>
<span class="line"><span>                {</span></span>
<span class="line"><span>                    &quot;type&quot;: &quot;text&quot;,</span></span>
<span class="line"><span>                    &quot;text&quot;: &quot;Why is the ocean salty?&quot;</span></span>
<span class="line"><span>                }</span></span>
<span class="line"><span>            ]</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    ]</span></span>
<span class="line"><span>)</span></span>
<span class="line"><span>print(message.content)</span></span></code></pre></div><p>使用 <code>python example.py</code> 执行代码。几秒钟后，您应该能看到 API 请求的输出。</p><p>[在 GitHub 上查看</p><p>查看 Claude(Anthropics) Python SDK 的源代码和文档。</p><p>](<a href="https://github.com/anthropics/anthropic-sdk-python" target="_blank" rel="noreferrer">https://github.com/anthropics/anthropic-sdk-python</a>)</p><h3 id="java" tabindex="-1">Java <a class="header-anchor" href="#java" aria-label="Permalink to &quot;Java&quot;">​</a></h3><p>Anthropic 提供了一个针对 Java 编程语言的 API 辅助工具，目前处于测试阶段。您可以使用以下配置来包含 Maven 依赖：</p><p>xml</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>&lt;dependency&gt;</span></span>
<span class="line"><span>  &lt;groupId&gt;com.anthropic&lt;/groupId&gt;</span></span>
<span class="line"><span>  &lt;artifactId&gt;anthropic-java&lt;/artifactId&gt;</span></span>
<span class="line"><span>  &lt;version&gt;2.2.0&lt;/version&gt;</span></span>
<span class="line"><span>&lt;/dependency&gt;</span></span></code></pre></div><p>一个简单的聊天补全 API 请求看起来像这样：</p><p>java</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>import com.anthropic.client.AnthropicClient;</span></span>
<span class="line"><span>import com.anthropic.client.okhttp.AnthropicOkHttpClient;</span></span>
<span class="line"><span>import com.anthropic.models.messages.Message;</span></span>
<span class="line"><span>import com.anthropic.models.messages.MessageCreateParams;</span></span>
<span class="line"><span>import com.anthropic.models.messages.Model;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// Configures using the \`ANTHROPIC_API_KEY\`, \`ANTHROPIC_AUTH_TOKEN\` and \`ANTHROPIC_BASE_URL\` environment variables</span></span>
<span class="line"><span>AnthropicClient client = AnthropicOkHttpClient.fromEnv();</span></span>
<span class="line"><span></span></span>
<span class="line"><span>MessageCreateParams params = MessageCreateParams.builder()</span></span>
<span class="line"><span>    .maxTokens(1024L)</span></span>
<span class="line"><span>    .addUserMessage(&quot;Hello, Claude&quot;)</span></span>
<span class="line"><span>    .model(Model.CLAUDE_SONNET_4_20250514)</span></span>
<span class="line"><span>    .build();</span></span>
<span class="line"><span>Message message = client.messages().create(params);</span></span></code></pre></div><p>[在 GitHub 上查看</p><p>查看 Claude(Anthropics) Java SDK 的源代码和文档。</p><p>](<a href="https://github.com/anthropics/anthropic-sdk-java" target="_blank" rel="noreferrer">https://github.com/anthropics/anthropic-sdk-java</a>)</p><h3 id="go" tabindex="-1">Go <a class="header-anchor" href="#go" aria-label="Permalink to &quot;Go&quot;">​</a></h3><p>Anthropic 提供了一个针对 Go 编程语言的 API 辅助工具，目前处于测试阶段。您可以使用以下代码导入该库：</p><p>go</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>import (</span></span>
<span class="line"><span>	&quot;github.com/anthropics/anthropic-sdk-go&quot;</span><span> // imported as anthropic</span></span>
<span class="line"><span>)</span></span></code></pre></div><p>go</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>package main</span></span>
<span class="line"><span></span></span>
<span class="line"><span>import (</span></span>
<span class="line"><span>	&quot;context&quot;</span></span>
<span class="line"><span>	&quot;fmt&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>	&quot;github.com/anthropics/anthropic-sdk-go&quot;</span></span>
<span class="line"><span>	&quot;github.com/anthropics/anthropic-sdk-go/option&quot;</span></span>
<span class="line"><span>)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>func main() {</span></span>
<span class="line"><span>	client := anthropic.NewClient(</span></span>
<span class="line"><span>		option.WithAPIKey(&quot;my-anthropic-api-key&quot;), // defaults to os.LookupEnv(&quot;ANTHROPIC_API_KEY&quot;)</span></span>
<span class="line"><span>        option.WithBaseURL(&quot;https://api.maisi-ai.com/claude&quot;), // defaults to os.LookupEnv(&quot;ANTHROPIC_BASE_URL&quot;)</span></span>
<span class="line"><span>	)</span></span>
<span class="line"><span>	message, err := client.Messages.New(context.TODO(), anthropic.MessageNewParams{</span></span>
<span class="line"><span>		MaxTokens: 1024,</span></span>
<span class="line"><span>		Messages: []anthropic.MessageParam{</span></span>
<span class="line"><span>			anthropic.NewUserMessage(anthropic.NewTextBlock(&quot;What is a quaternion?&quot;)),</span></span>
<span class="line"><span>		},</span></span>
<span class="line"><span>		Model: anthropic.ModelClaudeSonnet4_20250514,</span></span>
<span class="line"><span>	})</span></span>
<span class="line"><span>	if err != nil {</span></span>
<span class="line"><span>		panic(err.Error())</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	fmt.Printf(&quot;%+v\\n&quot;, message.Content)</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>[在 GitHub 上查看</p><p>查看 Claude(Anthropics) Go SDK 的源代码和文档。</p><p>](<a href="https://github.com/anthropics/anthropic-sdk-go" target="_blank" rel="noreferrer">https://github.com/anthropics/anthropic-sdk-go</a>)</p><h3 id="ruby" tabindex="-1">Ruby <a class="header-anchor" href="#ruby" aria-label="Permalink to &quot;Ruby&quot;">​</a></h3><p>Anthropic Ruby 库为任何 Ruby 3.2.0+ 应用程序提供便捷访问 Anthropic REST API 的功能。它附带了全面的类型和 Yard、RBS 及 RBI 格式的文档字符串——下面有使用 Sorbet 的示例。标准库的 net/http 用作 HTTP 传输，连接池通过 <code>connection_pool gem</code> 实现。</p><p>ruby</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>gem &quot;anthropic&quot;, &quot;~&gt; 1.2.0&quot;</span></span></code></pre></div><p>ruby</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>require &quot;bundler/setup&quot;</span></span>
<span class="line"><span>require &quot;anthropic&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>anthropic = Anthropic::Client.new(</span></span>
<span class="line"><span>  api_key: ENV[&quot;ANTHROPIC_API_KEY&quot;], # This is the default and can be omitted</span></span>
<span class="line"><span>  base_url: &quot;https://api.maisi-ai.com/claude&quot; # This is the default and can be omitted</span></span>
<span class="line"><span>)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>message = anthropic.messages.create(</span></span>
<span class="line"><span>  max_tokens: 1024,</span></span>
<span class="line"><span>  messages: [{role: &quot;user&quot;, content: &quot;Hello, Claude&quot;}],</span></span>
<span class="line"><span>  model: :&quot;claude-sonnet-4-20250514&quot;</span></span>
<span class="line"><span>)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>puts(message.content)</span></span></code></pre></div><p>[在 GitHub 上查看</p><p>查看 Claude(Anthropics) Ruby SDK 的源代码和文档。</p><p>](<a href="https://github.com/anthropics/anthropic-sdk-ruby" target="_blank" rel="noreferrer">https://github.com/anthropics/anthropic-sdk-ruby</a>)</p>`,63)])])}const g=a(t,[["render",i]]);export{d as __pageData,g as default};
