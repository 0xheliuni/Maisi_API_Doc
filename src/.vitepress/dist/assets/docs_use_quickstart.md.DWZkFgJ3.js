import{_ as n,o as a,c as p,ag as e}from"./chunks/framework.DXGyWiRo.js";const d=JSON.parse('{"title":"快速开始","description":"","frontmatter":{},"headers":[],"relativePath":"docs/use/quickstart.md","filePath":"docs/use/quickstart.md","lastUpdated":null}'),t={name:"docs/use/quickstart.md"};function l(o,s,i,c,u,q){return a(),p("div",null,[...s[0]||(s[0]=[e(`<h1 id="快速开始" tabindex="-1">快速开始 <a class="header-anchor" href="#快速开始" aria-label="Permalink to &quot;快速开始&quot;">​</a></h1><h2 id="创建令牌" tabindex="-1">创建令牌 <a class="header-anchor" href="#创建令牌" aria-label="Permalink to &quot;创建令牌&quot;">​</a></h2><p>注册好帐号后，前往 <a href="https://api.maisi-ai.com/dashboard/key" target="_blank" rel="noreferrer">令牌管理</a> 页面创建一个新的 API 密钥。请妥善保存此密钥，因为它将用于身份验证。 详细步骤，请查看 <a href="/docs/use/token.html">令牌说明</a>。</p><p>获取到令牌后，您需要将下面的代码中的 <code>&lt;your-api-key&gt;</code> 替换为您的实际 API 密钥。</p><h2 id="选择模型" tabindex="-1">选择模型 <a class="header-anchor" href="#选择模型" aria-label="Permalink to &quot;选择模型&quot;">​</a></h2><p>我们支持多种模型，您可以在 <a href="https://maisi-ai.com/dashboard/model_list" target="_blank" rel="noreferrer">模型列表</a> 中查看可用模型。选择适合您需求的模型。</p><h2 id="openai-api-请求" tabindex="-1">OpenAI API 请求 <a class="header-anchor" href="#openai-api-请求" aria-label="Permalink to &quot;OpenAI API 请求&quot;">​</a></h2><h3 id="通过-api-url-调用" tabindex="-1">通过 API URL 调用 <a class="header-anchor" href="#通过-api-url-调用" aria-label="Permalink to &quot;通过 API URL 调用&quot;">​</a></h3><p>文本生成图像输入内置工具函数调用</p><p>bash</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>curl &quot;https://api.maisi-ai.com/v1/chat/completions&quot; \\</span></span>
<span class="line"><span>    -H &quot;Content-Type: application/json&quot; \\</span></span>
<span class="line"><span>    -H &quot;Authorization: Bearer &lt;your-api-key&gt;&quot; \\</span></span>
<span class="line"><span>    -d &#39;{</span></span>
<span class="line"><span>        &quot;model&quot;: &quot;gpt-4.1&quot;,</span></span>
<span class="line"><span>        &quot;messages&quot;: [</span></span>
<span class="line"><span>            {</span></span>
<span class="line"><span>                &quot;role&quot;: &quot;user&quot;,</span></span>
<span class="line"><span>                &quot;content&quot;: &quot;Write a one-sentence bedtime story about a unicorn.&quot;</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>        ]</span></span>
<span class="line"><span>    }&#39;</span></span></code></pre></div><p>bash</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>curl &quot;https://api.maisi-ai.com/v1/chat/completions&quot; \\</span></span>
<span class="line"><span>    -H &quot;Content-Type: application/json&quot; \\</span></span>
<span class="line"><span>    -H &quot;Authorization: Bearer &lt;your-api-key&gt;&quot; \\</span></span>
<span class="line"><span>    -d &#39;{</span></span>
<span class="line"><span>        &quot;model&quot;: &quot;gpt-4.1&quot;,</span></span>
<span class="line"><span>        &quot;messages&quot;: [</span></span>
<span class="line"><span>		{</span></span>
<span class="line"><span>			&quot;role&quot;: &quot;user&quot;,</span></span>
<span class="line"><span>			&quot;content&quot;: [</span></span>
<span class="line"><span>				{</span></span>
<span class="line"><span>					&quot;type&quot;: &quot;text&quot;,</span></span>
<span class="line"><span>					&quot;text&quot;: &quot;What is in this image？&quot;</span></span>
<span class="line"><span>				},</span></span>
<span class="line"><span>				{</span></span>
<span class="line"><span>					&quot;type&quot;: &quot;image_url&quot;,</span></span>
<span class="line"><span>					&quot;image_url&quot;: {</span></span>
<span class="line"><span>						&quot;url&quot;: &quot;https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Gfp-wisconsin-madison-the-nature-boardwalk.jpg/2560px-Gfp-wisconsin-madison-the-nature-boardwalk.jpg&quot;</span></span>
<span class="line"><span>					}</span></span>
<span class="line"><span>				}</span></span>
<span class="line"><span>			]</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>	]</span></span>
<span class="line"><span>    }&#39;</span></span></code></pre></div><p>bash</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>curl &quot;https://api.maisi-ai.com/v1/chat/completions&quot; \\</span></span>
<span class="line"><span>    -H &quot;Content-Type: application/json&quot; \\</span></span>
<span class="line"><span>    -H &quot;Authorization: Bearer &lt;your-api-key&gt;&quot; \\</span></span>
<span class="line"><span>    -d &#39;{</span></span>
<span class="line"><span>        &quot;model&quot;: &quot;gpt-4o-search-preview&quot;,</span></span>
<span class="line"><span>        &quot;web_search_options&quot;: {},</span></span>
<span class="line"><span>        &quot;messages&quot;: [{</span></span>
<span class="line"><span>            &quot;role&quot;: &quot;user&quot;,</span></span>
<span class="line"><span>            &quot;content&quot;: &quot;What was a positive news story from today?&quot;</span></span>
<span class="line"><span>        }]</span></span>
<span class="line"><span>    }&#39;</span></span></code></pre></div><p>bash</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>curl https://api.maisi-ai.com/v1/chat/completions \\</span></span>
<span class="line"><span>-H &quot;Content-Type: application/json&quot; \\</span></span>
<span class="line"><span>-H &quot;Authorization: Bearer &lt;your-api-key&gt;&quot; \\</span></span>
<span class="line"><span>-d &#39;{</span></span>
<span class="line"><span>  &quot;model&quot;: &quot;gpt-4.1&quot;,</span></span>
<span class="line"><span>  &quot;messages&quot;: [</span></span>
<span class="line"><span>    {</span></span>
<span class="line"><span>      &quot;role&quot;: &quot;user&quot;,</span></span>
<span class="line"><span>      &quot;content&quot;: &quot;What is the weather like in Boston today?&quot;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  ],</span></span>
<span class="line"><span>  &quot;tools&quot;: [</span></span>
<span class="line"><span>    {</span></span>
<span class="line"><span>      &quot;type&quot;: &quot;function&quot;,</span></span>
<span class="line"><span>      &quot;function&quot;: {</span></span>
<span class="line"><span>        &quot;name&quot;: &quot;get_current_weather&quot;,</span></span>
<span class="line"><span>        &quot;description&quot;: &quot;Get the current weather in a given location&quot;,</span></span>
<span class="line"><span>        &quot;parameters&quot;: {</span></span>
<span class="line"><span>          &quot;type&quot;: &quot;object&quot;,</span></span>
<span class="line"><span>          &quot;properties&quot;: {</span></span>
<span class="line"><span>            &quot;location&quot;: {</span></span>
<span class="line"><span>              &quot;type&quot;: &quot;string&quot;,</span></span>
<span class="line"><span>              &quot;description&quot;: &quot;The city and state, e.g. San Francisco, CA&quot;</span></span>
<span class="line"><span>            },</span></span>
<span class="line"><span>            &quot;unit&quot;: {</span></span>
<span class="line"><span>              &quot;type&quot;: &quot;string&quot;,</span></span>
<span class="line"><span>              &quot;enum&quot;: [&quot;celsius&quot;, &quot;fahrenheit&quot;]</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>          },</span></span>
<span class="line"><span>          &quot;required&quot;: [&quot;location&quot;]</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>      }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  ],</span></span>
<span class="line"><span>  &quot;tool_choice&quot;: &quot;auto&quot;</span></span>
<span class="line"><span>}&#39;</span></span></code></pre></div><h3 id="通过-sdk-调用" tabindex="-1">通过 SDK 调用 <a class="header-anchor" href="#通过-sdk-调用" aria-label="Permalink to &quot;通过 SDK 调用&quot;">​</a></h3><p>更多语言的 SDK 使用示例，请参考 <a href="/docs/use/openai_sdk.html">OpenAI SDK 文档</a>。</p><p>PythonJavaScript</p><p>py</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>from openai import OpenAI</span></span>
<span class="line"><span>client = OpenAI(</span></span>
<span class="line"><span>    api_key=&quot;&lt;your-api-key&gt;&quot;,</span></span>
<span class="line"><span>    base_url=&quot;https://api.maisi-ai.com/v1&quot;</span></span>
<span class="line"><span>)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>completion = client.chat.completions.create(</span></span>
<span class="line"><span>    model=&quot;gpt-4.1&quot;,</span></span>
<span class="line"><span>    messages=[</span></span>
<span class="line"><span>        {</span></span>
<span class="line"><span>            &quot;role&quot;: &quot;user&quot;,</span></span>
<span class="line"><span>            &quot;content&quot;: &quot;Write a one-sentence bedtime story about a unicorn.&quot;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    ]</span></span>
<span class="line"><span>)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>print(completion.choices[0].message.content)</span></span></code></pre></div><p>ts</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>import OpenAI from &quot;openai&quot;;</span></span>
<span class="line"><span>const client = new OpenAI({</span></span>
<span class="line"><span>  apiKey: &quot;&lt;your-api-key&gt;&quot;,</span></span>
<span class="line"><span>  baseURL: &quot;https://api.maisi-ai.com/v1&quot;,</span></span>
<span class="line"><span>});</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const completion = await client.chat.completions.create({</span></span>
<span class="line"><span>  model: &quot;gpt-4.1&quot;,</span></span>
<span class="line"><span>  messages: [</span></span>
<span class="line"><span>    {</span></span>
<span class="line"><span>      role: &quot;user&quot;,</span></span>
<span class="line"><span>      content: &quot;Write a one-sentence bedtime story about a unicorn.&quot;,</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span>  ],</span></span>
<span class="line"><span>});</span></span>
<span class="line"><span></span></span>
<span class="line"><span>console.log(completion.choices[0].message.content);</span></span></code></pre></div><h2 id="claude-api-请求" tabindex="-1">Claude API 请求 <a class="header-anchor" href="#claude-api-请求" aria-label="Permalink to &quot;Claude API 请求&quot;">​</a></h2><div class="warning custom-block"><p class="custom-block-title">⚠️ 注意</p><p>注意：Claude API 目前仅支持 <code>Claude</code> 模型。 其他模型无法使用 Claude API 进行调用</p></div><h3 id="通过-api-url-调用-1" tabindex="-1">通过 API URL 调用 <a class="header-anchor" href="#通过-api-url-调用-1" aria-label="Permalink to &quot;通过 API URL 调用&quot;">​</a></h3><p>文本生成函数调用图像输入</p><p>bash</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>curl -X POST https://api.maisi-ai.com/claude/v1/messages \\</span></span>
<span class="line"><span>    -H &quot;Content-Type: application/json&quot; \\</span></span>
<span class="line"><span>    -H &quot;x-api-key: &lt;your-api-key&gt;&quot; \\</span></span>
<span class="line"><span>    -d &#39;{</span></span>
<span class="line"><span>        &quot;model&quot;: &quot;claude-opus-4-20250514&quot;,</span></span>
<span class="line"><span>        &quot;messages&quot;: [</span></span>
<span class="line"><span>            {</span></span>
<span class="line"><span>                &quot;role&quot;: &quot;user&quot;,</span></span>
<span class="line"><span>                &quot;content&quot;: &quot;Why is the ocean salty?&quot;</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>        ]</span></span>
<span class="line"><span>    }&#39;</span></span></code></pre></div><p>bash</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>curl https://api.maisi-ai.com/claude/v1/messages \\</span></span>
<span class="line"><span>  -H &quot;content-type: application/json&quot; \\</span></span>
<span class="line"><span>  -H &quot;x-api-key: &lt;your-api-key&gt;&quot; \\</span></span>
<span class="line"><span>  -d &#39;{</span></span>
<span class="line"><span>    &quot;model&quot;: &quot;claude-opus-4-1-20250805&quot;,</span></span>
<span class="line"><span>    &quot;max_tokens&quot;: 1024,</span></span>
<span class="line"><span>    &quot;tools&quot;: [</span></span>
<span class="line"><span>      {</span></span>
<span class="line"><span>        &quot;name&quot;: &quot;get_weather&quot;,</span></span>
<span class="line"><span>        &quot;description&quot;: &quot;Get the current weather in a given location&quot;,</span></span>
<span class="line"><span>        &quot;input_schema&quot;: {</span></span>
<span class="line"><span>          &quot;type&quot;: &quot;object&quot;,</span></span>
<span class="line"><span>          &quot;properties&quot;: {</span></span>
<span class="line"><span>            &quot;location&quot;: {</span></span>
<span class="line"><span>              &quot;type&quot;: &quot;string&quot;,</span></span>
<span class="line"><span>              &quot;description&quot;: &quot;The city and state, e.g. San Francisco, CA&quot;</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>          },</span></span>
<span class="line"><span>          &quot;required&quot;: [&quot;location&quot;]</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>      }</span></span>
<span class="line"><span>    ],</span></span>
<span class="line"><span>    &quot;messages&quot;: [</span></span>
<span class="line"><span>      {</span></span>
<span class="line"><span>        &quot;role&quot;: &quot;user&quot;,</span></span>
<span class="line"><span>        &quot;content&quot;: &quot;What is the weather like in San Francisco?&quot;</span></span>
<span class="line"><span>      }</span></span>
<span class="line"><span>    ]</span></span>
<span class="line"><span>  }&#39;</span></span></code></pre></div><p>bash</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>curl https://api.maisi-ai.com/claude/v1/messages \\</span></span>
<span class="line"><span>  -H &quot;x-api-key: &lt;your-api-key&gt;&quot; \\</span></span>
<span class="line"><span>  -H &quot;content-type: application/json&quot; \\</span></span>
<span class="line"><span>  -d &#39;{</span></span>
<span class="line"><span>    &quot;model&quot;: &quot;claude-sonnet-4-20250514&quot;,</span></span>
<span class="line"><span>    &quot;max_tokens&quot;: 1024,</span></span>
<span class="line"><span>    &quot;messages&quot;: [</span></span>
<span class="line"><span>      {</span></span>
<span class="line"><span>        &quot;role&quot;: &quot;user&quot;,</span></span>
<span class="line"><span>        &quot;content&quot;: [</span></span>
<span class="line"><span>          {</span></span>
<span class="line"><span>            &quot;type&quot;: &quot;image&quot;,</span></span>
<span class="line"><span>            &quot;source&quot;: {</span></span>
<span class="line"><span>              &quot;type&quot;: &quot;base64&quot;,</span></span>
<span class="line"><span>              &quot;media_type&quot;: &quot;image/jpeg&quot;,</span></span>
<span class="line"><span>              &quot;data&quot;: &quot;base64 data。。。。&quot;</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>          },</span></span>
<span class="line"><span>          {</span></span>
<span class="line"><span>            &quot;type&quot;: &quot;text&quot;,</span></span>
<span class="line"><span>            &quot;text&quot;: &quot;Describe this image.&quot;</span></span>
<span class="line"><span>          }</span></span>
<span class="line"><span>        ]</span></span>
<span class="line"><span>      }</span></span>
<span class="line"><span>    ]</span></span>
<span class="line"><span>  }&#39;</span></span></code></pre></div><h3 id="通过-sdk-调用-1" tabindex="-1">通过 SDK 调用 <a class="header-anchor" href="#通过-sdk-调用-1" aria-label="Permalink to &quot;通过 SDK 调用&quot;">​</a></h3><p>更多语言的 SDK 使用示例，请参考 <a href="/docs/use/claude_sdk.html">Claude SDK 文档</a>。</p><p>PythonJavaScript</p><p>py</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>import anthropic</span></span>
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
<span class="line"><span>print(message.content)</span></span></code></pre></div><p>ts</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>import Anthropic from &quot;@anthropic-ai/sdk&quot;;</span></span>
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
<span class="line"><span>console.log(msg);</span></span></code></pre></div><h2 id="gemini-api-请求" tabindex="-1">Gemini API 请求 <a class="header-anchor" href="#gemini-api-请求" aria-label="Permalink to &quot;Gemini API 请求&quot;">​</a></h2><div class="warning custom-block"><p class="custom-block-title">⚠️ 注意</p><p>注意：Gemini API 目前仅支持 <code>Gemini</code> 模型。 其他模型无法使用 Gemini API 进行调用</p></div><h3 id="通过-api-url-调用-2" tabindex="-1">通过 API URL 调用 <a class="header-anchor" href="#通过-api-url-调用-2" aria-label="Permalink to &quot;通过 API URL 调用&quot;">​</a></h3><p>文本生成函数调用图像输入音频输入图像输出</p><p>bash</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>curl -X POST &#39;https://api.maisi-ai.com/gemini/v1beta/models/gemini-2.5-flash:generateContent&#39; \\</span></span>
<span class="line"><span>--header &#39;Content-Type: application/json&#39; \\</span></span>
<span class="line"><span>--header &#39;x-goog-api-key: &lt;your-api-key&gt;&#39; \\</span></span>
<span class="line"><span>--data-raw &#39;{</span></span>
<span class="line"><span>  &quot;contents&quot;: [</span></span>
<span class="line"><span>    {</span></span>
<span class="line"><span>      &quot;parts&quot;: [</span></span>
<span class="line"><span>        {</span></span>
<span class="line"><span>          &quot;text&quot;: &quot;Why is the ocean salty?&quot;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>      ],</span></span>
<span class="line"><span>      &quot;role&quot;: &quot;user&quot;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  ]</span></span>
<span class="line"><span>}&#39;</span></span></code></pre></div><p>bash</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>curl &quot;https://api.maisi-ai.com/gemini/v1beta/models/gemini-2.5-flash:generateContent&quot; \\</span></span>
<span class="line"><span>  -H &quot;x-goog-api-key: &lt;your-api-key&gt;&quot; \\</span></span>
<span class="line"><span>  -H &#39;Content-Type: application/json&#39; \\</span></span>
<span class="line"><span>  -X POST \\</span></span>
<span class="line"><span>  -d &#39;{</span></span>
<span class="line"><span>    &quot;contents&quot;: [</span></span>
<span class="line"><span>      {</span></span>
<span class="line"><span>        &quot;role&quot;: &quot;user&quot;,</span></span>
<span class="line"><span>        &quot;parts&quot;: [</span></span>
<span class="line"><span>          {</span></span>
<span class="line"><span>            &quot;text&quot;: &quot;What&#39;\\&#39;&#39;s the temperature in London?&quot;</span></span>
<span class="line"><span>          }</span></span>
<span class="line"><span>        ]</span></span>
<span class="line"><span>      }</span></span>
<span class="line"><span>    ],</span></span>
<span class="line"><span>    &quot;tools&quot;: [</span></span>
<span class="line"><span>      {</span></span>
<span class="line"><span>        &quot;functionDeclarations&quot;: [</span></span>
<span class="line"><span>          {</span></span>
<span class="line"><span>            &quot;name&quot;: &quot;get_current_temperature&quot;,</span></span>
<span class="line"><span>            &quot;description&quot;: &quot;Gets the current temperature for a given location.&quot;,</span></span>
<span class="line"><span>            &quot;parameters&quot;: {</span></span>
<span class="line"><span>              &quot;type&quot;: &quot;object&quot;,</span></span>
<span class="line"><span>              &quot;properties&quot;: {</span></span>
<span class="line"><span>                &quot;location&quot;: {</span></span>
<span class="line"><span>                  &quot;type&quot;: &quot;string&quot;,</span></span>
<span class="line"><span>                  &quot;description&quot;: &quot;The city name, e.g. San Francisco&quot;</span></span>
<span class="line"><span>                }</span></span>
<span class="line"><span>              },</span></span>
<span class="line"><span>              &quot;required&quot;: [&quot;location&quot;]</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>          }</span></span>
<span class="line"><span>        ]</span></span>
<span class="line"><span>      }</span></span>
<span class="line"><span>    ]</span></span>
<span class="line"><span>  }&#39;</span></span></code></pre></div><p>bash</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>curl --location --request POST &#39;https://api.maisi-ai.com/gemini/v1beta/models/gemini-2.5-flash:generateContent&#39; \\</span></span>
<span class="line"><span>--header &#39;Content-Type: application/json&#39; \\</span></span>
<span class="line"><span>--header &#39;x-goog-api-key: &lt;your-api-key&gt;&#39; \\</span></span>
<span class="line"><span>--data-raw &#39;{</span></span>
<span class="line"><span>  &quot;contents&quot;: [</span></span>
<span class="line"><span>    {</span></span>
<span class="line"><span>      &quot;parts&quot;: [</span></span>
<span class="line"><span>        {</span></span>
<span class="line"><span>          &quot;inlineData&quot;: {</span></span>
<span class="line"><span>            &quot;mimeType&quot;: &quot;image/png&quot;,</span></span>
<span class="line"><span>            &quot;data&quot;: &quot;base64 data ....&quot;</span></span>
<span class="line"><span>          }</span></span>
<span class="line"><span>        },</span></span>
<span class="line"><span>        {</span></span>
<span class="line"><span>          &quot;text&quot;: &quot;图片有什么？&quot;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>      ],</span></span>
<span class="line"><span>      &quot;role&quot;: &quot;user&quot;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  ]</span></span>
<span class="line"><span>}&#39;</span></span></code></pre></div><p>bash</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>curl --location --request POST &#39;https://api.maisi-ai.com/gemini/v1beta/models/gemini-2.5-flash:streamGenerateContent?alt=sse&#39; \\</span></span>
<span class="line"><span>--header &#39;Content-Type: application/json&#39; \\</span></span>
<span class="line"><span>--header &#39;x-goog-api-key: &lt;your-api-key&gt;&#39; \\</span></span>
<span class="line"><span>--data-raw &#39;{</span></span>
<span class="line"><span>  &quot;generationConfig&quot;: {</span></span>
<span class="line"><span>    &quot;responseModalities&quot;: [</span></span>
<span class="line"><span>      &quot;Text&quot;,</span></span>
<span class="line"><span>      &quot;Image&quot;</span></span>
<span class="line"><span>    ]</span></span>
<span class="line"><span>  },</span></span>
<span class="line"><span>  &quot;contents&quot;: [</span></span>
<span class="line"><span>    {</span></span>
<span class="line"><span>      &quot;role&quot;: &quot;user&quot;,</span></span>
<span class="line"><span>      &quot;parts&quot;: [</span></span>
<span class="line"><span>        {</span></span>
<span class="line"><span>          &quot;text&quot;: &quot;音频中说了什么？&quot;</span></span>
<span class="line"><span>        },</span></span>
<span class="line"><span>        {</span></span>
<span class="line"><span>          &quot;inlineData&quot;: {</span></span>
<span class="line"><span>            &quot;mimeType&quot;: &quot;audio/wav&quot;,</span></span>
<span class="line"><span>            &quot;data&quot;: &quot;audio base64 data ....&quot;</span></span>
<span class="line"><span>          }</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>      ]</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  ]</span></span>
<span class="line"><span>}&#39;</span></span></code></pre></div><p>bash</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>curl --location --request POST &#39;https://api.maisi-ai.com/gemini/v1beta/models/gemini-2.5-flash-image-preview:streamGenerateContent?alt=sse&#39; \\</span></span>
<span class="line"><span>--header &#39;Content-Type: application/json&#39; \\</span></span>
<span class="line"><span>--header &#39;x-goog-api-key: &lt;your-api-key&gt;&#39; \\</span></span>
<span class="line"><span>--data-raw &#39;{</span></span>
<span class="line"><span>  &quot;generationConfig&quot;: {</span></span>
<span class="line"><span>    &quot;responseModalities&quot;: [</span></span>
<span class="line"><span>      &quot;Text&quot;,</span></span>
<span class="line"><span>      &quot;Image&quot;</span></span>
<span class="line"><span>    ]</span></span>
<span class="line"><span>  },</span></span>
<span class="line"><span>  &quot;contents&quot;: [</span></span>
<span class="line"><span>    {</span></span>
<span class="line"><span>      &quot;role&quot;: &quot;user&quot;,</span></span>
<span class="line"><span>      &quot;parts&quot;: [</span></span>
<span class="line"><span>        {</span></span>
<span class="line"><span>          &quot;text&quot;: &quot;画一只可爱的猫&quot;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>      ]</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  ]</span></span>
<span class="line"><span>}&#39;</span></span></code></pre></div><h3 id="通过-sdk-调用-2" tabindex="-1">通过 SDK 调用 <a class="header-anchor" href="#通过-sdk-调用-2" aria-label="Permalink to &quot;通过 SDK 调用&quot;">​</a></h3><p>更多语言的 SDK 使用示例，请参考 <a href="/docs/use/gemini_sdk.html">Gemini SDK 文档</a>。</p><p>Python</p><p>py</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>from google import genai</span></span>
<span class="line"><span>from google.genai import types</span></span>
<span class="line"><span></span></span>
<span class="line"><span>prompt = &quot;Explain the Occam&#39;s Razor concept and provide everyday examples of it&quot;</span></span>
<span class="line"><span>budget = 1024  # You can set this variable to any value between 0 and 24k</span></span>
<span class="line"><span></span></span>
<span class="line"><span>client = genai.Client(</span></span>
<span class="line"><span>    http_options=types.HttpOptions(base_url=&#39;https://api.maisi-ai.com/gemini&#39;),</span></span>
<span class="line"><span>    api_key=&quot;&lt;your-api-key&gt;&quot;,</span></span>
<span class="line"><span>    )</span></span>
<span class="line"><span>response = client.models.generate_content(</span></span>
<span class="line"><span>    model=&quot;gemini-2.5-flash&quot;,</span></span>
<span class="line"><span>    contents=prompt,</span></span>
<span class="line"><span>    config=types.GenerateContentConfig(</span></span>
<span class="line"><span>        thinking_config=types.ThinkingConfig(thinking_budget=budget, include_thoughts=True)</span></span>
<span class="line"><span>    ),</span></span>
<span class="line"><span>)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>print(response.text)</span></span></code></pre></div><h2 id="通过第三方应用调用" tabindex="-1">通过第三方应用调用 <a class="header-anchor" href="#通过第三方应用调用" aria-label="Permalink to &quot;通过第三方应用调用&quot;">​</a></h2><p>如果您使用的是第三方应用（如 LobeChat 等），请参考我们的 <a href="/integration/">集成文档</a> 以获取更多信息。</p>`,62)])])}const h=n(t,[["render",l]]);export{d as __pageData,h as default};
