import{_ as a,o as n,c as p,ag as e}from"./chunks/framework.DXGyWiRo.js";const q=JSON.parse('{"title":"FalAI","description":"","frontmatter":{},"headers":[],"relativePath":"docs/use/api/falai.md","filePath":"docs/use/api/falai.md","lastUpdated":null}'),t={name:"docs/use/api/falai.md"};function l(o,s,i,r,u,c){return n(),p("div",null,[...s[0]||(s[0]=[e(`<h1 id="falai" tabindex="-1">FalAI <a class="header-anchor" href="#falai" aria-label="Permalink to &quot;FalAI&quot;">​</a></h1><p>FalAI 的图像与视频调用方式相近，通常为任务型：提交任务 → 查询状态 → 获取结果。</p><h2 id="base-url-鉴权" tabindex="-1">Base URL / 鉴权 <a class="header-anchor" href="#base-url-鉴权" aria-label="Permalink to &quot;Base URL / 鉴权&quot;">​</a></h2><ul><li>Base URL：<code>https://api.maisi-ai.com/fal-ai</code></li><li>Header：<code>Authorization: Key &lt;your-api-key&gt;</code></li></ul><div class="warning custom-block"><p class="custom-block-title">⚠️ 注意</p><p>根据 FalAI 官方规则，如果因输入参数错误导致请求失败，积分可能不予退还。 详见：<a href="https://docs.fal.ai/faq#do-you-charge-for-failed-requests" target="_blank" rel="noreferrer">https://docs.fal.ai/faq#do-you-charge-for-failed-requests</a></p></div><h2 id="两种常见调用方式" tabindex="-1">两种常见调用方式 <a class="header-anchor" href="#两种常见调用方式" aria-label="Permalink to &quot;两种常见调用方式&quot;">​</a></h2><ol><li><strong>FalAI 原生任务接口</strong>（最常见）</li><li><strong>OpenAI Images 形态</strong>：部分模型可通过 <code>POST /v1/images/generations</code> 调用，但不同模型参数不完全一致</li></ol><p>建议以外部模型参数文档为准（FalAI 示例：<a href="https://fal.ai/models/fal-ai/flux-pro/kontext" target="_blank" rel="noreferrer">https://fal.ai/models/fal-ai/flux-pro/kontext</a>）。</p><h3 id="python-提交任务-轮询" tabindex="-1">Python（提交任务 + 轮询） <a class="header-anchor" href="#python-提交任务-轮询" aria-label="Permalink to &quot;Python（提交任务 + 轮询）&quot;">​</a></h3><p>python</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>import requests</span></span>
<span class="line"><span>import time</span></span>
<span class="line"><span>from typing import Dict, Any</span></span>
<span class="line"><span></span></span>
<span class="line"><span>key = &quot;sk-xxx&quot;  # 替换为实际的 Bearer Token</span></span>
<span class="line"><span>BASE_URL = &quot;https://api.maisi-ai.com/fal-ai&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>def get_headers() -&gt; Dict[str, str]:</span></span>
<span class="line"><span>    return {</span></span>
<span class="line"><span>        &quot;Authorization&quot;: f&quot;Key {key}&quot;,</span></span>
<span class="line"><span>        &quot;Content-Type&quot;: &quot;application/json&quot;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>def handle_response(response: requests.Response) -&gt; Dict[str, Any]:</span></span>
<span class="line"><span>    response_data = response.json()</span></span>
<span class="line"><span>    if response.status_code != 200:</span></span>
<span class="line"><span>        raise Exception(f&quot;请求失败，状态码: {response.status_code}，响应信息: {response_data}&quot;)</span></span>
<span class="line"><span>    if response_data.get(&quot;status&quot;) == &quot;FAILURE&quot;:</span></span>
<span class="line"><span>        raise Exception(f&quot;操作失败，响应信息: {response_data}&quot;)</span></span>
<span class="line"><span>    return response_data</span></span>
<span class="line"><span></span></span>
<span class="line"><span>def submit(model: str, data: Dict[str, Any]) -&gt; str:</span></span>
<span class="line"><span>    url = f&quot;{BASE_URL}/{model}&quot;</span></span>
<span class="line"><span>    response = requests.post(url, headers=get_headers(), json=data)</span></span>
<span class="line"><span>    return handle_response(response)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>def fetch(url: str) -&gt; Dict[str, Any]:</span></span>
<span class="line"><span>    response = requests.get(url, headers=get_headers())</span></span>
<span class="line"><span>    return handle_response(response)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>def main():</span></span>
<span class="line"><span>    model = &quot;flux-pro/kontext/text-to-image&quot;</span></span>
<span class="line"><span>    data = {</span></span>
<span class="line"><span>  &quot;prompt&quot;: &quot;Extreme close-up of a single tiger eye, direct frontal view. Detailed iris and pupil. Sharp focus on eye texture and color. Natural lighting to capture authentic eye shine and depth. The word \\&quot;FLUX\\&quot; is painted over it in big, white brush strokes with visible texture.&quot;,</span></span>
<span class="line"><span>  &quot;guidance_scale&quot;: 1,</span></span>
<span class="line"><span>  &quot;num_images&quot;: 1,</span></span>
<span class="line"><span>  &quot;safety_tolerance&quot;: &quot;2&quot;,</span></span>
<span class="line"><span>  &quot;output_format&quot;: &quot;jpeg&quot;,</span></span>
<span class="line"><span>  &quot;aspect_ratio&quot;: &quot;9:21&quot;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>    try:</span></span>
<span class="line"><span>        task = submit(model, data)</span></span>
<span class="line"><span>        status_url = task[&#39;status_url&#39;]</span></span>
<span class="line"><span>        response_url = task[&#39;response_url&#39;]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        while True:</span></span>
<span class="line"><span>            status_fetch = fetch(status_url)</span></span>
<span class="line"><span>            task_status = status_fetch[&quot;status&quot;]</span></span>
<span class="line"><span>            if task_status != &quot;COMPLETED&quot;:</span></span>
<span class="line"><span>                print(f&quot;视频生成状态： {task_status}，请等待2s...&quot;)</span></span>
<span class="line"><span>                time.sleep(2)</span></span>
<span class="line"><span>                continue</span></span>
<span class="line"><span></span></span>
<span class="line"><span>            response_fetch = fetch(response_url)</span></span>
<span class="line"><span>            print(&quot;响应:&quot;)</span></span>
<span class="line"><span>            print(response_fetch)</span></span>
<span class="line"><span>            break</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    except Exception as e:</span></span>
<span class="line"><span>        print(f&quot;发生错误: {e}&quot;)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>if __name__ == &quot;__main__&quot;:</span></span>
<span class="line"><span>    main()</span></span></code></pre></div><h3 id="openai-images-形态" tabindex="-1">OpenAI Images 形态 <a class="header-anchor" href="#openai-images-形态" aria-label="Permalink to &quot;OpenAI Images 形态&quot;">​</a></h3><p>bash</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>curl --request POST \\</span></span>
<span class="line"><span>  --url https://api.maisi-ai.com/v1/images/generations \\</span></span>
<span class="line"><span>  --header &#39;Authorization: Bearer sk-xxx&#39; \\</span></span>
<span class="line"><span>  --header &#39;Content-Type: application/json&#39; \\</span></span>
<span class="line"><span>  --data &#39;{</span></span>
<span class="line"><span>&quot;model&quot;: &quot;flux-pro/kontext/text-to-image&quot;,</span></span>
<span class="line"><span>  &quot;prompt&quot;: &quot;Extreme close-up of a single tiger eye, direct frontal view. Detailed iris and pupil. Sharp focus on eye texture and color. Natural lighting to capture authentic eye shine and depth. The word \\&quot;FLUX\\&quot; is painted over it in big, white brush strokes with visible texture.&quot;,</span></span>
<span class="line"><span>  &quot;guidance_scale&quot;: 1,</span></span>
<span class="line"><span>  &quot;n&quot;: 1,</span></span>
<span class="line"><span>  &quot;num_images&quot;: 2,</span></span>
<span class="line"><span>  &quot;safety_tolerance&quot;: &quot;2&quot;,</span></span>
<span class="line"><span>  &quot;output_format&quot;: &quot;jpeg&quot;,</span></span>
<span class="line"><span>  &quot;aspect_ratio&quot;: &quot;1:1&quot;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>&#39;</span></span></code></pre></div>`,14)])])}const h=a(t,[["render",l]]);export{q as __pageData,h as default};
