import{_ as s,o as n,c as e,ag as p}from"./chunks/framework.DXGyWiRo.js";const h=JSON.parse('{"title":"Responses","description":"","frontmatter":{},"headers":[],"relativePath":"docs/use/api/responses.md","filePath":"docs/use/api/responses.md","lastUpdated":null}'),t={name:"docs/use/api/responses.md"};function o(i,a,l,r,c,u){return n(),e("div",null,[...a[0]||(a[0]=[p(`<h1 id="responses" tabindex="-1">Responses <a class="header-anchor" href="#responses" aria-label="Permalink to &quot;Responses&quot;">​</a></h1><ul><li>Endpoint：<code>POST /v1/responses</code></li><li>Base URL：<code>https://api.maisi-ai.com/v1</code></li><li>鉴权：<code>Authorization: Bearer &lt;your-api-key&gt;</code></li><li>API 参考： <ul><li>Maisi：<code>/v1/responses</code>（见 <a href="https://api-docs.maisi-ai.com/api-297251423.md" target="_blank" rel="noreferrer">API 文档</a>）</li><li>OpenAI 官方：<a href="https://platform.openai.com/docs/api-reference/responses/create" target="_blank" rel="noreferrer">https://platform.openai.com/docs/api-reference/responses/create</a></li></ul></li></ul><h2 id="文本请求" tabindex="-1">文本请求 <a class="header-anchor" href="#文本请求" aria-label="Permalink to &quot;文本请求&quot;">​</a></h2><p>bash</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>curl --request POST \\</span></span>
<span class="line"><span>  --url https://api.maisi-ai.com/v1/responses \\</span></span>
<span class="line"><span>  --header &#39;Content-Type: application/json&#39; \\</span></span>
<span class="line"><span>  --header &#39;Authorization: Bearer &lt;your-api-key&gt;&#39; \\</span></span>
<span class="line"><span>  --data &#39;{</span></span>
<span class="line"><span>    &quot;model&quot;: &quot;gpt-4.1&quot;,</span></span>
<span class="line"><span>    &quot;input&quot;: &quot;Tell me a three sentence bedtime story about a unicorn.&quot;</span></span>
<span class="line"><span>  }&#39;</span></span></code></pre></div><h2 id="图像输入-示例" tabindex="-1">图像输入（示例） <a class="header-anchor" href="#图像输入-示例" aria-label="Permalink to &quot;图像输入（示例）&quot;">​</a></h2><p>bash</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>curl --request POST \\</span></span>
<span class="line"><span>  --url https://api.maisi-ai.com/v1/responses \\</span></span>
<span class="line"><span>  --header &#39;Content-Type: application/json&#39; \\</span></span>
<span class="line"><span>  --header &#39;Authorization: Bearer &lt;your-api-key&gt;&#39; \\</span></span>
<span class="line"><span>  --data &#39;{</span></span>
<span class="line"><span>    &quot;model&quot;: &quot;gpt-4.1&quot;,</span></span>
<span class="line"><span>    &quot;input&quot;: [</span></span>
<span class="line"><span>      {</span></span>
<span class="line"><span>        &quot;role&quot;: &quot;user&quot;,</span></span>
<span class="line"><span>        &quot;content&quot;: [</span></span>
<span class="line"><span>          {&quot;type&quot;: &quot;input_text&quot;, &quot;text&quot;: &quot;what is in this image?&quot;},</span></span>
<span class="line"><span>          {&quot;type&quot;: &quot;input_image&quot;, &quot;image_url&quot;: &quot;https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Gfp-wisconsin-madison-the-nature-boardwalk.jpg/2560px-Gfp-wisconsin-madison-the-nature-boardwalk.jpg&quot;}</span></span>
<span class="line"><span>        ]</span></span>
<span class="line"><span>      }</span></span>
<span class="line"><span>    ]</span></span>
<span class="line"><span>  }&#39;</span></span></code></pre></div><h2 id="工具-web-search-preview" tabindex="-1">工具：web_search_preview <a class="header-anchor" href="#工具-web-search-preview" aria-label="Permalink to &quot;工具：web\\_search\\_preview&quot;">​</a></h2><p>bash</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>curl --request POST \\</span></span>
<span class="line"><span>  --url https://api.maisi-ai.com/v1/responses \\</span></span>
<span class="line"><span>  --header &#39;Content-Type: application/json&#39; \\</span></span>
<span class="line"><span>  --header &#39;Authorization: Bearer &lt;your-api-key&gt;&#39; \\</span></span>
<span class="line"><span>  --data &#39;{</span></span>
<span class="line"><span>    &quot;model&quot;: &quot;gpt-4.1&quot;,</span></span>
<span class="line"><span>    &quot;tools&quot;: [{&quot;type&quot;: &quot;web_search_preview&quot;}],</span></span>
<span class="line"><span>    &quot;input&quot;: &quot;What was a positive news story from today?&quot;</span></span>
<span class="line"><span>  }&#39;</span></span></code></pre></div><h2 id="推理参数-reasoning" tabindex="-1">推理参数（reasoning） <a class="header-anchor" href="#推理参数-reasoning" aria-label="Permalink to &quot;推理参数（reasoning）&quot;">​</a></h2><p>bash</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>curl --request POST \\</span></span>
<span class="line"><span>  --url https://api.maisi-ai.com/v1/responses \\</span></span>
<span class="line"><span>  --header &#39;Content-Type: application/json&#39; \\</span></span>
<span class="line"><span>  --header &#39;Authorization: Bearer &lt;your-api-key&gt;&#39; \\</span></span>
<span class="line"><span>  --data &#39;{</span></span>
<span class="line"><span>    &quot;model&quot;: &quot;o3-mini&quot;,</span></span>
<span class="line"><span>    &quot;input&quot;: &quot;How much wood would a woodchuck chuck?&quot;,</span></span>
<span class="line"><span>    &quot;reasoning&quot;: {&quot;effort&quot;: &quot;high&quot;}</span></span>
<span class="line"><span>  }&#39;</span></span></code></pre></div><h2 id="相关内容" tabindex="-1">相关内容 <a class="header-anchor" href="#相关内容" aria-label="Permalink to &quot;相关内容&quot;">​</a></h2><ul><li>接口兼容与说明：见 <a href="/docs/use/chat.html">接口兼容</a></li><li>推理设置：见 <a href="/docs/use/reasoning.html">推理设置</a></li><li>常见错误与超时：见 <a href="/docs/error.html">常见错误以及解决办法</a></li></ul>`,16)])])}const q=s(t,[["render",o]]);export{h as __pageData,q as default};
