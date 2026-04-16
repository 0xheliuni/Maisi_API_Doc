import{_ as s,o as n,c as e,ag as p}from"./chunks/framework.DXGyWiRo.js";const h=JSON.parse('{"title":"Claude（原生接口）","description":"","frontmatter":{},"headers":[],"relativePath":"docs/use/api/claude.md","filePath":"docs/use/api/claude.md","lastUpdated":null}'),l={name:"docs/use/api/claude.md"};function t(i,a,o,c,u,d){return n(),e("div",null,[...a[0]||(a[0]=[p(`<h1 id="claude-原生接口" tabindex="-1">Claude（原生接口） <a class="header-anchor" href="#claude-原生接口" aria-label="Permalink to &quot;Claude（原生接口）&quot;">​</a></h1><p>Maisi 支持 Claude 的原生接口形态（Anthropic Messages API 风格）。</p><h2 id="base-url-鉴权" tabindex="-1">Base URL / 鉴权 <a class="header-anchor" href="#base-url-鉴权" aria-label="Permalink to &quot;Base URL / 鉴权&quot;">​</a></h2><ul><li>Base URL：<code>https://api.maisi-ai.com/claude</code></li><li>Header：<code>x-api-key: &lt;your-api-key&gt;</code></li><li>Endpoint：<code>POST /claude/v1/messages</code></li></ul><h2 id="curl-示例-文本" tabindex="-1">curl 示例（文本） <a class="header-anchor" href="#curl-示例-文本" aria-label="Permalink to &quot;curl 示例（文本）&quot;">​</a></h2><p>bash</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>curl --request POST \\</span></span>
<span class="line"><span>  --url https://api.maisi-ai.com/claude/v1/messages \\</span></span>
<span class="line"><span>  --header &#39;Content-Type: application/json&#39; \\</span></span>
<span class="line"><span>  --header &#39;x-api-key: &lt;your-api-key&gt;&#39; \\</span></span>
<span class="line"><span>  --data &#39;{</span></span>
<span class="line"><span>    &quot;model&quot;: &quot;claude-3-haiku-20240307&quot;,</span></span>
<span class="line"><span>    &quot;max_tokens&quot;: 1024,</span></span>
<span class="line"><span>    &quot;messages&quot;: [</span></span>
<span class="line"><span>      {&quot;role&quot;: &quot;user&quot;, &quot;content&quot;: &quot;Hello, world&quot;}</span></span>
<span class="line"><span>    ]</span></span>
<span class="line"><span>  }&#39;</span></span></code></pre></div><h2 id="sdk-示例-python" tabindex="-1">SDK 示例（Python） <a class="header-anchor" href="#sdk-示例-python" aria-label="Permalink to &quot;SDK 示例（Python）&quot;">​</a></h2><p>bash</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>pip install anthropic</span></span></code></pre></div><p>python</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>import anthropic</span></span>
<span class="line"><span></span></span>
<span class="line"><span>client = anthropic.Anthropic(</span></span>
<span class="line"><span>    api_key=&quot;&lt;your-api-key&gt;&quot;,</span></span>
<span class="line"><span>    base_url=&quot;https://api.maisi-ai.com/claude&quot;,</span></span>
<span class="line"><span>)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>message = client.messages.create(</span></span>
<span class="line"><span>    model=&quot;claude-3-5-sonnet-20240620&quot;,</span></span>
<span class="line"><span>    max_tokens=1024,</span></span>
<span class="line"><span>    messages=[</span></span>
<span class="line"><span>        {&quot;role&quot;: &quot;user&quot;, &quot;content&quot;: &quot;Hello, Claude&quot;}</span></span>
<span class="line"><span>    ],</span></span>
<span class="line"><span>)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>print(message.content)</span></span></code></pre></div><h2 id="相关内容" tabindex="-1">相关内容 <a class="header-anchor" href="#相关内容" aria-label="Permalink to &quot;相关内容&quot;">​</a></h2><ul><li>推荐入口：见 <a href="/docs/use/api/openai_compatible.html">OpenAI 兼容接口</a></li><li>常见错误：见 <a href="/docs/error.html">常见错误以及解决办法</a></li></ul>`,14)])])}const m=s(l,[["render",t]]);export{h as __pageData,m as default};
