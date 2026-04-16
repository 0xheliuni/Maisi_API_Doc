import{_ as a,o as n,c as p,ag as e}from"./chunks/framework.DXGyWiRo.js";const d=JSON.parse('{"title":"接口兼容","description":"","frontmatter":{},"headers":[],"relativePath":"docs/use/chat.md","filePath":"docs/use/chat.md","lastUpdated":null}'),t={name:"docs/use/chat.md"};function o(l,s,i,c,u,r){return n(),p("div",null,[...s[0]||(s[0]=[e(`<h1 id="接口兼容" tabindex="-1">接口兼容 <a class="header-anchor" href="#接口兼容" aria-label="Permalink to &quot;接口兼容&quot;">​</a></h1><h2 id="responses" tabindex="-1">responses <a class="header-anchor" href="#responses" aria-label="Permalink to &quot;responses&quot;">​</a></h2><p>目前所有非 OpenAI 模型的请求均支持<code>responses</code>接口。 OpenAI 模型在<a href="https://platform.openai.com/docs/models" target="_blank" rel="noreferrer">OpenAI 模型列表</a>中查看支持情况。</p><h2 id="chat" tabindex="-1">chat <a class="header-anchor" href="#chat" aria-label="Permalink to &quot;chat&quot;">​</a></h2><p>目前我们针对以下 OpenAI 模型做了<code>chat</code>接口兼容的支持：</p><ul><li>o3-pro-2025-06-10</li><li>o3-pro</li><li>o1-pro-2025-03-19</li><li>o1-pro</li><li>o3-deep-research-2025-06-26</li><li>o3-deep-research</li><li>o4-mini-deep-research-2025-06-26</li><li>o4-mini-deep-research</li><li>codex-mini-latest</li></ul><h3 id="内部工具调用" tabindex="-1">内部工具调用 <a class="header-anchor" href="#内部工具调用" aria-label="Permalink to &quot;内部工具调用&quot;">​</a></h3><p>直接在 tool 字段中添加你想要使用的工具</p><p>json</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>{</span></span>
<span class="line"><span>  &quot;model&quot;: &quot;o3-pro&quot;,</span></span>
<span class="line"><span>  &quot;stream&quot;: true,</span></span>
<span class="line"><span>  &quot;messages&quot;: [</span></span>
<span class="line"><span>    {</span></span>
<span class="line"><span>      &quot;role&quot;: &quot;user&quot;,</span></span>
<span class="line"><span>      &quot;content&quot;: &quot;今天有什么新闻？&quot;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  ],</span></span>
<span class="line"><span>  &quot;tools&quot;: [</span></span>
<span class="line"><span>    {</span></span>
<span class="line"><span>      &quot;type&quot;: &quot;web_search_preview&quot;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  ]</span></span>
<span class="line"><span>}</span></span></code></pre></div><h3 id="输出推理摘要" tabindex="-1">输出推理摘要 <a class="header-anchor" href="#输出推理摘要" aria-label="Permalink to &quot;输出推理摘要&quot;">​</a></h3><p>如果存在推理摘要，他们将在<code>reasoning_content</code>字段中显示。</p><p>json</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>{</span></span>
<span class="line"><span>  &quot;model&quot;: &quot;o3-pro&quot;,</span></span>
<span class="line"><span>  &quot;stream&quot;: true,</span></span>
<span class="line"><span>  &quot;messages&quot;: [</span></span>
<span class="line"><span>    {</span></span>
<span class="line"><span>      &quot;role&quot;: &quot;user&quot;,</span></span>
<span class="line"><span>      &quot;content&quot;: &quot;今天有什么新闻？&quot;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  ],</span></span>
<span class="line"><span>  &quot;reasoning&quot;: {</span></span>
<span class="line"><span>    &quot;summary&quot;: &quot;detailed&quot;</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span></code></pre></div><h3 id="推理努力程度" tabindex="-1">推理努力程度 <a class="header-anchor" href="#推理努力程度" aria-label="Permalink to &quot;推理努力程度&quot;">​</a></h3><p>两种设置方法，他们等效</p><p>json</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>{</span></span>
<span class="line"><span>  &quot;model&quot;: &quot;o3-pro&quot;,</span></span>
<span class="line"><span>  &quot;stream&quot;: true,</span></span>
<span class="line"><span>  &quot;messages&quot;: [</span></span>
<span class="line"><span>    {</span></span>
<span class="line"><span>      &quot;role&quot;: &quot;user&quot;,</span></span>
<span class="line"><span>      &quot;content&quot;: &quot;今天有什么新闻？&quot;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  ],</span></span>
<span class="line"><span>  &quot;reasoning&quot;: {</span></span>
<span class="line"><span>    &quot;effort&quot;: &quot;high&quot;</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>json</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>{</span></span>
<span class="line"><span>  &quot;model&quot;: &quot;o3-pro&quot;,</span></span>
<span class="line"><span>  &quot;stream&quot;: true,</span></span>
<span class="line"><span>  &quot;messages&quot;: [</span></span>
<span class="line"><span>    {</span></span>
<span class="line"><span>      &quot;role&quot;: &quot;user&quot;,</span></span>
<span class="line"><span>      &quot;content&quot;: &quot;今天有什么新闻？&quot;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  ],</span></span>
<span class="line"><span>  &quot;reasoning_effort&quot;: &quot;high&quot;</span></span>
<span class="line"><span>}</span></span></code></pre></div>`,20)])])}const h=a(t,[["render",o]]);export{d as __pageData,h as default};
