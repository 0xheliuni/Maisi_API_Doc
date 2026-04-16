import{_ as a,o as n,c as t,ag as o}from"./chunks/framework.DXGyWiRo.js";const r=JSON.parse('{"title":"特殊用法","description":"","frontmatter":{},"headers":[],"relativePath":"docs/use/special_usage.md","filePath":"docs/use/special_usage.md","lastUpdated":null}'),p={name:"docs/use/special_usage.md"};function e(i,s,l,c,u,q){return n(),t("div",null,[...s[0]||(s[0]=[o(`<h1 id="特殊用法" tabindex="-1">特殊用法 <a class="header-anchor" href="#特殊用法" aria-label="Permalink to &quot;特殊用法&quot;">​</a></h1><p>由于现在越来越多的模型支持了很多新特性， OpenAI API 格式已经无法满足需求，所以有些特殊的调用方法，将在本页面进行说明。</p><h2 id="o1-o3-mini-o1-mini-快速切换-reasoningeffort" tabindex="-1">o1 / o3-mini / o1-mini 快速切换 ReasoningEffort <a class="header-anchor" href="#o1-o3-mini-o1-mini-快速切换-reasoningeffort" aria-label="Permalink to &quot;o1 / o3-mini / o1-mini 快速切换 ReasoningEffort&quot;">​</a></h2><p>在请求时，将模型名称后面添加 <code>#low</code>/<code>#medium</code>/<code>#high</code> 可以快速切换 ReasoningEffort 参数。 例如：</p><p>bash</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>curl -X POST https://api.maisi-ai.com/v1/chat/completions \\</span></span>
<span class="line"><span>  -H &quot;Content-Type: application/json&quot; \\</span></span>
<span class="line"><span>  -H &quot;Authorization: Bearer sk-proj-1234567890&quot; \\</span></span>
<span class="line"><span>  -d &#39;{</span></span>
<span class="line"><span>    &quot;model&quot;: &quot;o1-mini#low&quot;,</span></span>
<span class="line"><span>    &quot;messages&quot;: [{&quot;role&quot;: &quot;user&quot;, &quot;content&quot;: &quot;你好&quot;}]</span></span>
<span class="line"><span>  }&#39;</span></span></code></pre></div><h2 id="gemini-模型-开启联网搜索" tabindex="-1">Gemini 模型 开启联网搜索 <a class="header-anchor" href="#gemini-模型-开启联网搜索" aria-label="Permalink to &quot;Gemini 模型 开启联网搜索&quot;">​</a></h2><p>在请求时，增加 <code>tools</code> 参数，并设置 <code>name</code> 为 <code>googleSearch</code> 即可开启联网搜索。</p><p>bash</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>curl -X POST https://api.maisi-ai.com/v1/chat/completions \\</span></span>
<span class="line"><span>  -H &quot;Content-Type: application/json&quot; \\</span></span>
<span class="line"><span>  -H &quot;Authorization: Bearer sk-proj-1234567890&quot; \\</span></span>
<span class="line"><span>  -d &#39;{</span></span>
<span class="line"><span>    &quot;model&quot;: &quot;gemini-1.5-flash-002&quot;,</span></span>
<span class="line"><span>    &quot;messages&quot;: [{&quot;role&quot;: &quot;user&quot;, &quot;content&quot;: &quot;今天有什么新闻&quot;}],</span></span>
<span class="line"><span>    &quot;tools&quot;: [</span></span>
<span class="line"><span>		{</span></span>
<span class="line"><span>			&quot;function&quot;: {</span></span>
<span class="line"><span>				&quot;name&quot;: &quot;googleSearch&quot;,</span></span>
<span class="line"><span>				&quot;parameters&quot;: {}</span></span>
<span class="line"><span>			},</span></span>
<span class="line"><span>			&quot;type&quot;: &quot;function&quot;</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>	]</span></span>
<span class="line"><span>  }&#39;</span></span></code></pre></div><h2 id="gemini-模型-开启代码执行" tabindex="-1">Gemini 模型 开启代码执行 <a class="header-anchor" href="#gemini-模型-开启代码执行" aria-label="Permalink to &quot;Gemini 模型 开启代码执行&quot;">​</a></h2><p>在请求时，增加 <code>tools</code> 参数，并设置 <code>name</code> 为 <code>codeExecution</code> 即可开启代码执行。</p><p>bash</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>curl -X POST https://api.maisi-ai.com/v1/chat/completions \\</span></span>
<span class="line"><span>  -H &quot;Content-Type: application/json&quot; \\</span></span>
<span class="line"><span>  -H &quot;Authorization: Bearer sk-proj-1234567890&quot; \\</span></span>
<span class="line"><span>  -d &#39;{</span></span>
<span class="line"><span>    &quot;model&quot;: &quot;gemini-1.5-flash-002&quot;,</span></span>
<span class="line"><span>    &quot;messages&quot;: [{&quot;role&quot;: &quot;user&quot;, &quot;content&quot;: &quot;计算2的7次方&quot;}],</span></span>
<span class="line"><span>    &quot;tools&quot;: [</span></span>
<span class="line"><span>		{</span></span>
<span class="line"><span>			&quot;function&quot;: {</span></span>
<span class="line"><span>				&quot;name&quot;: &quot;codeExecution&quot;,</span></span>
<span class="line"><span>				&quot;parameters&quot;: {}</span></span>
<span class="line"><span>			},</span></span>
<span class="line"><span>			&quot;type&quot;: &quot;function&quot;</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>	]</span></span>
<span class="line"><span>  }&#39;</span></span></code></pre></div>`,14)])])}const h=a(p,[["render",e]]);export{r as __pageData,h as default};
