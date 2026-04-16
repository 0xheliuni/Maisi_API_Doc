import{_ as s,o as n,c as e,ag as p}from"./chunks/framework.DXGyWiRo.js";const h=JSON.parse('{"title":"Gemini（原生接口）","description":"","frontmatter":{},"headers":[],"relativePath":"docs/use/api/gemini.md","filePath":"docs/use/api/gemini.md","lastUpdated":null}'),t={name:"docs/use/api/gemini.md"};function i(l,a,o,c,r,d){return n(),e("div",null,[...a[0]||(a[0]=[p(`<h1 id="gemini-原生接口" tabindex="-1">Gemini（原生接口） <a class="header-anchor" href="#gemini-原生接口" aria-label="Permalink to &quot;Gemini（原生接口）&quot;">​</a></h1><p>Maisi 支持 Gemini 的原生接口形态（Google Gemini API / GenAI 风格）。</p><h2 id="base-url-鉴权" tabindex="-1">Base URL / 鉴权 <a class="header-anchor" href="#base-url-鉴权" aria-label="Permalink to &quot;Base URL / 鉴权&quot;">​</a></h2><ul><li>Base URL：<code>https://api.maisi-ai.com/gemini</code></li><li>Header：<code>x-goog-api-key: &lt;your-api-key&gt;</code></li></ul><h2 id="非流式-generatecontent" tabindex="-1">非流式（generateContent） <a class="header-anchor" href="#非流式-generatecontent" aria-label="Permalink to &quot;非流式（generateContent）&quot;">​</a></h2><ul><li>Endpoint：<code>POST /gemini/v1beta/models/{model}:generateContent</code></li></ul><p>bash</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>curl --request POST \\</span></span>
<span class="line"><span>  --url &#39;https://api.maisi-ai.com/gemini/v1beta/models/gemini-2.5-flash:generateContent&#39; \\</span></span>
<span class="line"><span>  --header &#39;Content-Type: application/json&#39; \\</span></span>
<span class="line"><span>  --header &#39;x-goog-api-key: &lt;your-api-key&gt;&#39; \\</span></span>
<span class="line"><span>  --data &#39;{</span></span>
<span class="line"><span>    &quot;contents&quot;: [</span></span>
<span class="line"><span>      {</span></span>
<span class="line"><span>        &quot;role&quot;: &quot;user&quot;,</span></span>
<span class="line"><span>        &quot;parts&quot;: [{&quot;text&quot;: &quot;Why is the ocean salty?&quot;}]</span></span>
<span class="line"><span>      }</span></span>
<span class="line"><span>    ]</span></span>
<span class="line"><span>  }&#39;</span></span></code></pre></div><h2 id="流式-sse" tabindex="-1">流式（SSE） <a class="header-anchor" href="#流式-sse" aria-label="Permalink to &quot;流式（SSE）&quot;">​</a></h2><ul><li>Endpoint：<code>POST /gemini/v1beta/models/{model}:streamGenerateContent?alt=sse</code></li></ul><p>bash</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>curl --request POST \\</span></span>
<span class="line"><span>  --url &#39;https://api.maisi-ai.com/gemini/v1beta/models/gemini-2.5-flash:streamGenerateContent?alt=sse&#39; \\</span></span>
<span class="line"><span>  --header &#39;Content-Type: application/json&#39; \\</span></span>
<span class="line"><span>  --header &#39;x-goog-api-key: &lt;your-api-key&gt;&#39; \\</span></span>
<span class="line"><span>  --data &#39;{</span></span>
<span class="line"><span>    &quot;contents&quot;: [</span></span>
<span class="line"><span>      {</span></span>
<span class="line"><span>        &quot;role&quot;: &quot;user&quot;,</span></span>
<span class="line"><span>        &quot;parts&quot;: [{&quot;text&quot;: &quot;hi~&quot;}]</span></span>
<span class="line"><span>      }</span></span>
<span class="line"><span>    ]</span></span>
<span class="line"><span>  }&#39;</span></span></code></pre></div><h2 id="sdk-示例-python" tabindex="-1">SDK 示例（Python） <a class="header-anchor" href="#sdk-示例-python" aria-label="Permalink to &quot;SDK 示例（Python）&quot;">​</a></h2><p>bash</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>pip install -q -U google-genai</span></span></code></pre></div><p>python</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>from google import genai</span></span>
<span class="line"><span>from google.genai import types</span></span>
<span class="line"><span></span></span>
<span class="line"><span>client = genai.Client(</span></span>
<span class="line"><span>    http_options=types.HttpOptions(base_url=&quot;https://api.maisi-ai.com/gemini&quot;),</span></span>
<span class="line"><span>    api_key=&quot;&lt;your-api-key&gt;&quot;,</span></span>
<span class="line"><span>)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>response = client.models.generate_content(</span></span>
<span class="line"><span>    model=&quot;gemini-2.5-flash&quot;,</span></span>
<span class="line"><span>    contents=&quot;hi~&quot;,</span></span>
<span class="line"><span>)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>print(response.text)</span></span></code></pre></div><h2 id="相关内容" tabindex="-1">相关内容 <a class="header-anchor" href="#相关内容" aria-label="Permalink to &quot;相关内容&quot;">​</a></h2><ul><li>推荐入口：见 <a href="/docs/use/api/openai_compatible.html">OpenAI 兼容接口</a></li><li>Gemini SDK 配置：见 <a href="/docs/use/gemini_sdk.html">Gemini SDK 设置</a></li><li>常见错误：见 <a href="/docs/error.html">常见错误以及解决办法</a></li></ul>`,19)])])}const m=s(t,[["render",i]]);export{h as __pageData,m as default};
