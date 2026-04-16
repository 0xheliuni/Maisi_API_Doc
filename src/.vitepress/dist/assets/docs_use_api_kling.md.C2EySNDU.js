import{_ as n,o as a,c as p,ag as l}from"./chunks/framework.DXGyWiRo.js";const _=JSON.parse('{"title":"可灵（Kling）","description":"","frontmatter":{},"headers":[],"relativePath":"docs/use/api/kling.md","filePath":"docs/use/api/kling.md","lastUpdated":null}'),e={name:"docs/use/api/kling.md"};function t(i,s,o,u,c,q){return a(),p("div",null,[...s[0]||(s[0]=[l(`<h1 id="可灵-kling" tabindex="-1">可灵（Kling） <a class="header-anchor" href="#可灵-kling" aria-label="Permalink to &quot;可灵（Kling）&quot;">​</a></h1><h2 id="base-url-鉴权" tabindex="-1">Base URL / 鉴权 <a class="header-anchor" href="#base-url-鉴权" aria-label="Permalink to &quot;Base URL / 鉴权&quot;">​</a></h2><ul><li>Base URL：<code>https://api.maisi-ai.com/kling</code></li><li>鉴权：<code>Authorization: Bearer &lt;your-api-key&gt;</code></li></ul><p>python</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>&quot;&quot;&quot;</span></span>
<span class="line"><span>Kling Image Generation API SDK</span></span>
<span class="line"><span></span></span>
<span class="line"><span>支持图像生成任务的创建和查询</span></span>
<span class="line"><span>&quot;&quot;&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>import time</span></span>
<span class="line"><span>import requests</span></span>
<span class="line"><span>from typing import Optional, Dict, Any, List</span></span>
<span class="line"><span>from enum import Enum</span></span>
<span class="line"><span></span></span>
<span class="line"><span>class ModelName(str, Enum):</span></span>
<span class="line"><span>    &quot;&quot;&quot;模型名称枚举&quot;&quot;&quot;</span></span>
<span class="line"><span>    KLING_V1 = &quot;kling-v1&quot;</span></span>
<span class="line"><span>    KLING_V1_5 = &quot;kling-v1-5&quot;</span></span>
<span class="line"><span>    KLING_V2 = &quot;kling-v2&quot;</span></span>
<span class="line"><span>    KLING_V2_1 = &quot;kling-v2-1&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>class ImageReference(str, Enum):</span></span>
<span class="line"><span>    &quot;&quot;&quot;图片参考类型枚举&quot;&quot;&quot;</span></span>
<span class="line"><span>    SUBJECT = &quot;subject&quot;  # 角色特征参考</span></span>
<span class="line"><span>    FACE = &quot;face&quot;  # 人物长相参考</span></span>
<span class="line"><span></span></span>
<span class="line"><span>class Resolution(str, Enum):</span></span>
<span class="line"><span>    &quot;&quot;&quot;分辨率枚举&quot;&quot;&quot;</span></span>
<span class="line"><span>    K1 = &quot;1k&quot;  # 1K标清</span></span>
<span class="line"><span>    K2 = &quot;2k&quot;  # 2K高清</span></span>
<span class="line"><span></span></span>
<span class="line"><span>class AspectRatio(str, Enum):</span></span>
<span class="line"><span>    &quot;&quot;&quot;画面纵横比枚举&quot;&quot;&quot;</span></span>
<span class="line"><span>    RATIO_16_9 = &quot;16:9&quot;</span></span>
<span class="line"><span>    RATIO_9_16 = &quot;9:16&quot;</span></span>
<span class="line"><span>    RATIO_1_1 = &quot;1:1&quot;</span></span>
<span class="line"><span>    RATIO_4_3 = &quot;4:3&quot;</span></span>
<span class="line"><span>    RATIO_3_4 = &quot;3:4&quot;</span></span>
<span class="line"><span>    RATIO_3_2 = &quot;3:2&quot;</span></span>
<span class="line"><span>    RATIO_2_3 = &quot;2:3&quot;</span></span>
<span class="line"><span>    RATIO_21_9 = &quot;21:9&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>class TaskStatus(str, Enum):</span></span>
<span class="line"><span>    &quot;&quot;&quot;任务状态枚举&quot;&quot;&quot;</span></span>
<span class="line"><span>    SUBMITTED = &quot;submitted&quot;  # 已提交</span></span>
<span class="line"><span>    PROCESSING = &quot;processing&quot;  # 处理中</span></span>
<span class="line"><span>    SUCCEED = &quot;succeed&quot;  # 成功</span></span>
<span class="line"><span>    FAILED = &quot;failed&quot;  # 失败</span></span>
<span class="line"><span></span></span>
<span class="line"><span>class KlingImageSDK:</span></span>
<span class="line"><span>    &quot;&quot;&quot;Kling 图像生成 API SDK&quot;&quot;&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    def __init__(self, api_key: str, base_url: str = &quot;https://api.maisi-ai.com/kling&quot;):</span></span>
<span class="line"><span>        &quot;&quot;&quot;</span></span>
<span class="line"><span>        初始化 SDK</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        Args:</span></span>
<span class="line"><span>            api_key: API 密钥</span></span>
<span class="line"><span>            base_url: API 基础地址</span></span>
<span class="line"><span>        &quot;&quot;&quot;</span></span>
<span class="line"><span>        self.api_key = api_key</span></span>
<span class="line"><span>        self.base_url = base_url.rstrip(&#39;/&#39;)</span></span>
<span class="line"><span>        self.session = requests.Session()</span></span>
<span class="line"><span>        self.session.headers.update({</span></span>
<span class="line"><span>            &#39;Content-Type&#39;: &#39;application/json&#39;,</span></span>
<span class="line"><span>            &#39;Authorization&#39;: f&#39;Bearer {api_key}&#39;</span></span>
<span class="line"><span>        })</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    def create_generation_task(</span></span>
<span class="line"><span>        self,</span></span>
<span class="line"><span>        prompt: str,</span></span>
<span class="line"><span>        model_name: str = ModelName.KLING_V1,</span></span>
<span class="line"><span>        negative_prompt: Optional[str] = None,</span></span>
<span class="line"><span>        image: Optional[str] = None,</span></span>
<span class="line"><span>        image_reference: Optional[str] = None,</span></span>
<span class="line"><span>        image_fidelity: float = 0.5,</span></span>
<span class="line"><span>        human_fidelity: float = 0.45,</span></span>
<span class="line"><span>        resolution: str = Resolution.K1,</span></span>
<span class="line"><span>        n: int = 1,</span></span>
<span class="line"><span>        aspect_ratio: str = AspectRatio.RATIO_16_9,</span></span>
<span class="line"><span>        callback_url: Optional[str] = None</span></span>
<span class="line"><span>    ) -&gt; Dict[str, Any]:</span></span>
<span class="line"><span>        url = f&quot;{self.base_url}/v1/images/generations&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        payload = {</span></span>
<span class="line"><span>            &quot;model_name&quot;: model_name,</span></span>
<span class="line"><span>            &quot;prompt&quot;: prompt,</span></span>
<span class="line"><span>            &quot;resolution&quot;: resolution,</span></span>
<span class="line"><span>            &quot;n&quot;: n,</span></span>
<span class="line"><span>            &quot;aspect_ratio&quot;: aspect_ratio</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        if negative_prompt:</span></span>
<span class="line"><span>            payload[&quot;negative_prompt&quot;] = negative_prompt</span></span>
<span class="line"><span>        if image:</span></span>
<span class="line"><span>            payload[&quot;image&quot;] = image</span></span>
<span class="line"><span>        if image_reference:</span></span>
<span class="line"><span>            payload[&quot;image_reference&quot;] = image_reference</span></span>
<span class="line"><span>        if image_fidelity != 0.5:</span></span>
<span class="line"><span>            payload[&quot;image_fidelity&quot;] = image_fidelity</span></span>
<span class="line"><span>        if human_fidelity != 0.45:</span></span>
<span class="line"><span>            payload[&quot;human_fidelity&quot;] = human_fidelity</span></span>
<span class="line"><span>        if callback_url:</span></span>
<span class="line"><span>            payload[&quot;callback_url&quot;] = callback_url</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        try:</span></span>
<span class="line"><span>            response = self.session.post(url, json=payload)</span></span>
<span class="line"><span>            response.raise_for_status()</span></span>
<span class="line"><span>            return response.json()</span></span>
<span class="line"><span>        except requests.exceptions.RequestException as e:</span></span>
<span class="line"><span>            return {</span></span>
<span class="line"><span>                &quot;code&quot;: -1,</span></span>
<span class="line"><span>                &quot;message&quot;: f&quot;请求失败: {str(e)}&quot;,</span></span>
<span class="line"><span>                &quot;request_id&quot;: None,</span></span>
<span class="line"><span>                &quot;data&quot;: None</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    def query_task(self, task_id: str) -&gt; Dict[str, Any]:</span></span>
<span class="line"><span>        url = f&quot;{self.base_url}/v1/images/generations/{task_id}&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        try:</span></span>
<span class="line"><span>            response = self.session.get(url)</span></span>
<span class="line"><span>            response.raise_for_status()</span></span>
<span class="line"><span>            return response.json()</span></span>
<span class="line"><span>        except requests.exceptions.RequestException as e:</span></span>
<span class="line"><span>            return {</span></span>
<span class="line"><span>                &quot;code&quot;: -1,</span></span>
<span class="line"><span>                &quot;message&quot;: f&quot;请求失败: {str(e)}&quot;,</span></span>
<span class="line"><span>                &quot;request_id&quot;: None,</span></span>
<span class="line"><span>                &quot;data&quot;: None</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    def wait_for_completion(</span></span>
<span class="line"><span>        self,</span></span>
<span class="line"><span>        task_id: str,</span></span>
<span class="line"><span>        poll_interval: int = 3,</span></span>
<span class="line"><span>        max_wait_time: int = 300</span></span>
<span class="line"><span>    ) -&gt; Dict[str, Any]:</span></span>
<span class="line"><span>        start_time = time.time()</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        while True:</span></span>
<span class="line"><span>            if time.time() - start_time &gt; max_wait_time:</span></span>
<span class="line"><span>                return {</span></span>
<span class="line"><span>                    &quot;code&quot;: -1,</span></span>
<span class="line"><span>                    &quot;message&quot;: f&quot;等待超时（超过{max_wait_time}秒）&quot;,</span></span>
<span class="line"><span>                    &quot;request_id&quot;: None,</span></span>
<span class="line"><span>                    &quot;data&quot;: None</span></span>
<span class="line"><span>                }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>            result = self.query_task(task_id)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>            if result.get(&quot;code&quot;) != 0:</span></span>
<span class="line"><span>                return result</span></span>
<span class="line"><span></span></span>
<span class="line"><span>            task_status = result.get(&quot;data&quot;, {}).get(&quot;task_status&quot;)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>            if task_status == TaskStatus.SUCCEED:</span></span>
<span class="line"><span>                return result</span></span>
<span class="line"><span></span></span>
<span class="line"><span>            if task_status == TaskStatus.FAILED:</span></span>
<span class="line"><span>                return result</span></span>
<span class="line"><span></span></span>
<span class="line"><span>            time.sleep(poll_interval)</span></span></code></pre></div>`,5)])])}const m=n(e,[["render",t]]);export{_ as __pageData,m as default};
