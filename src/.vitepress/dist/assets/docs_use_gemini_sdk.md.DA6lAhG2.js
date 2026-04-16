import{_ as n,o as s,c as e,ag as p}from"./chunks/framework.DXGyWiRo.js";const h=JSON.parse('{"title":"Gemini SDK 设置","description":"","frontmatter":{},"headers":[],"relativePath":"docs/use/gemini_sdk.md","filePath":"docs/use/gemini_sdk.md","lastUpdated":null}'),t={name:"docs/use/gemini_sdk.md"};function i(o,a,l,r,c,g){return s(),e("div",null,[...a[0]||(a[0]=[p(`<h1 id="gemini-sdk-设置" tabindex="-1">Gemini SDK 设置 <a class="header-anchor" href="#gemini-sdk-设置" aria-label="Permalink to &quot;Gemini SDK 设置&quot;">​</a></h1><p>Gemini API 让您可以访问 Google 最新的生成模型。此 API 参考提供了 Gemini API SDK 中可用类和方法的详细信息。</p><div class="warning custom-block"><p class="custom-block-title">⚠️ 注意</p><p>注意：Gemini API 目前仅支持 <code>Gemini</code> 模型。 其他模型无法使用 Gemini API 进行调用</p></div><h2 id="安装官方-sdk" tabindex="-1">安装官方 SDK <a class="header-anchor" href="#安装官方-sdk" aria-label="Permalink to &quot;安装官方 SDK&quot;">​</a></h2><h3 id="python" tabindex="-1">Python <a class="header-anchor" href="#python" aria-label="Permalink to &quot;Python&quot;">​</a></h3><p>使用 <a href="https://www.python.org/downloads/" target="_blank" rel="noreferrer">Python 3.9+</a>及以上版本, 使用以下 <a href="https://packaging.python.org/en/latest/tutorials/installing-packages/" target="_blank" rel="noreferrer">pip</a> 命令安装 <a href="https://pypi.org/project/google-genai/" target="_blank" rel="noreferrer">google-genai</a> 包:</p><p>bash</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>pip install -q -U google-genai</span></span></code></pre></div><p>安装 Gemini SDK 后，创建一个名为 <code>example.py</code> 的文件，并将示例代码复制到其中：</p><p>python</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span></span></span>
<span class="line"><span>from google import genai</span></span>
<span class="line"><span>from google.genai import types</span></span>
<span class="line"><span></span></span>
<span class="line"><span>client = genai.Client(</span></span>
<span class="line"><span>    http_options=types.HttpOptions(base_url=&#39;https://api.maisi-ai.com/gemini&#39;),</span></span>
<span class="line"><span>    api_key=&quot;YOUR_API_KEY&quot;)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>response = client.models.generate_content(</span></span>
<span class="line"><span>    model=&quot;gemini-2.0-flash&quot;, contents=&quot;Explain how AI works in a few words&quot;</span></span>
<span class="line"><span>)</span></span>
<span class="line"><span>print(response.text)</span></span></code></pre></div><p>使用 <code>python example.py</code> 执行代码。几秒钟后，您应该能看到 API 请求的输出。</p><p>[在 GitHub 上查看</p><p>查看 Gemini Python SDK 的源代码和文档。</p><p>](<a href="https://github.com/googleapis/python-genai" target="_blank" rel="noreferrer">https://github.com/googleapis/python-genai</a>)</p><h3 id="javascript" tabindex="-1">JavaScript <a class="header-anchor" href="#javascript" aria-label="Permalink to &quot;JavaScript&quot;">​</a></h3><p>使用 <a href="https://nodejs.org/en/download/package-manager" target="_blank" rel="noreferrer">Node.js v18+</a>，通过以下 <a href="https://docs.npmjs.com/downloading-and-installing-node-js-and-npm" target="_blank" rel="noreferrer">npm</a> 命令安装适用于 TypeScript 和 JavaScript 的 <a href="https://www.npmjs.com/package/@google/genai" target="_blank" rel="noreferrer">Google Gen AI SDK</a>：</p><p>bash</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>npm install @google/genai</span></span></code></pre></div><p>js</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>import { GoogleGenAI } from &quot;@google/genai&quot;;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const ai = new GoogleGenAI({</span></span>
<span class="line"><span>  apiKey: &quot;&lt;your-api-key&gt;&quot;,</span></span>
<span class="line"><span>  httpOptions: {</span></span>
<span class="line"><span>    baseUrl: &quot;https://api.maisi-ai.com/gemini&quot;,</span></span>
<span class="line"><span>  },</span></span>
<span class="line"><span>});</span></span>
<span class="line"><span></span></span>
<span class="line"><span>async function main() {</span></span>
<span class="line"><span>  const response = await ai.models.generateContent({</span></span>
<span class="line"><span>    model: &quot;gemini-2.0-flash&quot;,</span></span>
<span class="line"><span>    contents: &quot;Explain how AI works in a few words&quot;,</span></span>
<span class="line"><span>  });</span></span>
<span class="line"><span>  console.log(response.text);</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>main();</span></span></code></pre></div><p>使用 <code>node example.mjs</code> （或 Deno 或 Bun 的等效命令）执行代码。几秒钟后，你应该能看到 API 请求的输出结果。</p><p>[在 GitHub 上查看</p><p>查看 Gemini JavaScript SDK 的源代码和文档。</p><p>](<a href="https://github.com/googleapis/js-genai" target="_blank" rel="noreferrer">https://github.com/googleapis/js-genai</a>)</p>`,25)])])}const m=n(t,[["render",i]]);export{h as __pageData,m as default};
