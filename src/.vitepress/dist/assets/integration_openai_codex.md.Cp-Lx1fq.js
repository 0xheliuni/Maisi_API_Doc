import{_ as a,o as n,c as p,ag as e}from"./chunks/framework.DXGyWiRo.js";const h=JSON.parse('{"title":"OpenAI Codex","description":"","frontmatter":{},"headers":[],"relativePath":"integration/openai_codex.md","filePath":"integration/openai_codex.md","lastUpdated":null}'),i={name:"integration/openai_codex.md"};function l(t,s,o,c,d,r){return n(),p("div",null,[...s[0]||(s[0]=[e(`<h1 id="openai-codex" tabindex="-1">OpenAI Codex <a class="header-anchor" href="#openai-codex" aria-label="Permalink to &quot;OpenAI Codex&quot;">​</a></h1><ol><li>安装</li></ol><p>shell</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span># 使用 Homebrew 安装</span></span>
<span class="line"><span>brew install codex</span></span>
<span class="line"><span></span></span>
<span class="line"><span>#使用 npm 安装</span></span>
<span class="line"><span>npm install -g @openai/codex</span></span></code></pre></div><ol start="2"><li>配置</li></ol><p>打开配置文件：</p><p>shell</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span></span></span>
<span class="line"><span>vim ~/.codex/config.toml</span></span></code></pre></div><p>填写以下内容：</p><p>toml</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span># 填写你默认使用的模型</span></span>
<span class="line"><span>model = &quot;o3&quot;</span></span>
<span class="line"><span># 填写你默认使用的模型提供者</span></span>
<span class="line"><span>model_provider = &quot;openai-chat-completions&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 模型提供者的配置</span></span>
<span class="line"><span>[model_providers.openai-chat-completions]</span></span>
<span class="line"><span># 将在Codex用户界面中显示的提供者名称。</span></span>
<span class="line"><span>name = &quot;Maisi&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span># API的基本URL。Codex将使用此URL来发送POST请求。</span></span>
<span class="line"><span>base_url = &quot;https://api.maisi-ai.com/v1&quot;</span></span>
<span class="line"><span># 如果设置了 \`env_key\`，则标识在使用 Codex 与此提供者时必须设置的环境变量。环境变量的值必须非空，并将用于 POST 请求的 \`Bearer TOKEN\` HTTP 头中。</span></span>
<span class="line"><span>env_key = &quot;Maisi_API_KEY&quot;</span></span>
<span class="line"><span># wire_api 的有效值为 &quot;chat&quot; 和 &quot;responses&quot;。如果省略，默认为 &quot;chat&quot;。</span></span>
<span class="line"><span>wire_api = &quot;chat&quot;</span></span></code></pre></div><ol start="3"><li>设置环境变量</li></ol><p>shell</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>export Maisi_API_KEY=&quot;sk-xxxx&quot;</span></span></code></pre></div><ol start="4"><li>使用</li></ol><p>shell</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span># 交互式使用</span></span>
<span class="line"><span>codex</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 直接询问</span></span>
<span class="line"><span>codex &quot;What is the capital of France?&quot;</span></span></code></pre></div>`,17)])])}const g=a(i,[["render",l]]);export{h as __pageData,g as default};
