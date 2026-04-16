import{_ as n,o as a,c as p,ag as e}from"./chunks/framework.DXGyWiRo.js";const h=JSON.parse('{"title":"Replicate","description":"","frontmatter":{},"headers":[],"relativePath":"docs/use/api/replicate.md","filePath":"docs/use/api/replicate.md","lastUpdated":null}'),l={name:"docs/use/api/replicate.md"};function t(i,s,o,c,r,u){return a(),p("div",null,[...s[0]||(s[0]=[e(`<h1 id="replicate" tabindex="-1">Replicate <a class="header-anchor" href="#replicate" aria-label="Permalink to &quot;Replicate&quot;">​</a></h1><p>Replicate 属于任务型接口：创建 prediction → 轮询查询 → 获取 output。</p><h2 id="base-url-鉴权" tabindex="-1">Base URL / 鉴权 <a class="header-anchor" href="#base-url-鉴权" aria-label="Permalink to &quot;Base URL / 鉴权&quot;">​</a></h2><ul><li>Base URL：<code>https://api.maisi-ai.com/replicate</code></li><li>Header：<code>Authorization: Bearer &lt;your-api-key&gt;</code></li></ul><h2 id="主要接口" tabindex="-1">主要接口 <a class="header-anchor" href="#主要接口" aria-label="Permalink to &quot;主要接口&quot;">​</a></h2><ul><li><code>POST /v1/models/{model}/predictions</code></li><li><code>GET /v1/predictions/{task_id}</code></li></ul><p>具体字段与返回结构以 API 开发文档为准：<a href="https://api-docs.maisi-ai.com/" target="_blank" rel="noreferrer">https://api-docs.maisi-ai.com/</a></p><h2 id="sdk" tabindex="-1">SDK <a class="header-anchor" href="#sdk" aria-label="Permalink to &quot;SDK&quot;">​</a></h2><p>如果你使用 replicate 官方 SDK，可以在初始化 client 时将 <code>base_url</code> 指向 Maisi。</p><h3 id="官方-sdk-调用示例" tabindex="-1">官方 SDK 调用示例 <a class="header-anchor" href="#官方-sdk-调用示例" aria-label="Permalink to &quot;官方 SDK 调用示例&quot;">​</a></h3><p>python</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>from replicate.client import Client</span></span>
<span class="line"><span></span></span>
<span class="line"><span>client = Client(api_token=&quot;sk-xxxxx&quot;, base_url=&quot;https://api.maisi-ai.com/replicate&quot;)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>input = {</span></span>
<span class="line"><span>    &quot;prompt&quot;: &quot;The photo: Create a cinematic, photorealistic medium shot capturing the dynamic energy of a high-octane action film. The focus is a young woman with wind-swept dark hair streaked with pink highlights and determined features, looking directly and intently into the camera lens, she is slightly off-center. She wears a fitted pink and gold racing jacket over a black tank top with \\&quot;Imagen 4 Fast\\&quot; in motion-stylized lettering and on the next line \\&quot;on Replicate\\&quot; emblazoned across the chest and aviator sunglasses pushed up on her head. The lighting is dramatic with motion blur streaks and neon reflections from passing city lights, creating dynamic lens flares and light trails (they do not cover her face). The background shows a blurred urban nightscape with streaking car headlights and illuminated skyscrapers rushing past, rendered with heavy motion blur and shallow depth of field. High contrast lighting, vibrant neon color palette with deep blues and electric yellows, and razor-sharp focus on her intense eyes enhance the fast-paced, electrifying atmosphere. She is illuminated while the background is darker.&quot;,</span></span>
<span class="line"><span>    &quot;aspect_ratio&quot;: &quot;4:3&quot;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>output = client.run(</span></span>
<span class="line"><span>    &quot;google/imagen-4-fast&quot;,</span></span>
<span class="line"><span>    input=input</span></span>
<span class="line"><span>)</span></span>
<span class="line"><span></span></span>
<span class="line"><span># To access the file URL:</span></span>
<span class="line"><span>print(output)</span></span></code></pre></div><h3 id="直接调用示例" tabindex="-1">直接调用示例 <a class="header-anchor" href="#直接调用示例" aria-label="Permalink to &quot;直接调用示例&quot;">​</a></h3><p>python</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>import time</span></span>
<span class="line"><span>import requests</span></span>
<span class="line"><span>from typing import Dict, Any, List, Union, Optional</span></span>
<span class="line"><span>from pathlib import Path</span></span>
<span class="line"><span>import os</span></span>
<span class="line"><span></span></span>
<span class="line"><span>class ReplicateAPIError(Exception):</span></span>
<span class="line"><span>    &quot;&quot;&quot;Replicate API 错误&quot;&quot;&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    def __init__(self, status_code: int, detail: str, title: str = &quot;&quot;):</span></span>
<span class="line"><span>        self.status_code = status_code</span></span>
<span class="line"><span>        self.detail = detail</span></span>
<span class="line"><span>        self.title = title</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        error_message = f&quot;API 错误 [{status_code}]&quot;</span></span>
<span class="line"><span>        if title:</span></span>
<span class="line"><span>            error_message += f&quot; - {title}&quot;</span></span>
<span class="line"><span>        if detail:</span></span>
<span class="line"><span>            error_message += f&quot;: {detail}&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        super().__init__(error_message)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @classmethod</span></span>
<span class="line"><span>    def from_response(cls, response: requests.Response):</span></span>
<span class="line"><span>        &quot;&quot;&quot;从响应对象创建异常&quot;&quot;&quot;</span></span>
<span class="line"><span>        try:</span></span>
<span class="line"><span>            data = response.json()</span></span>
<span class="line"><span>            return cls(</span></span>
<span class="line"><span>                status_code=data.get(&#39;status&#39;, response.status_code),</span></span>
<span class="line"><span>                detail=data.get(&#39;detail&#39;, &#39;&#39;),</span></span>
<span class="line"><span>                title=data.get(&#39;title&#39;, &#39;&#39;)</span></span>
<span class="line"><span>            )</span></span>
<span class="line"><span>        except Exception:</span></span>
<span class="line"><span>            return cls(</span></span>
<span class="line"><span>                status_code=response.status_code,</span></span>
<span class="line"><span>                detail=response.text or &#39;未知错误&#39;,</span></span>
<span class="line"><span>                title=&#39;&#39;</span></span>
<span class="line"><span>            )</span></span>
<span class="line"><span></span></span>
<span class="line"><span>class ReplicateOutput:</span></span>
<span class="line"><span>    &quot;&quot;&quot;处理 Replicate API 返回的输出结果&quot;&quot;&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    def __init__(self, output: Union[str, List[str], None], task_id: str):</span></span>
<span class="line"><span>        self._output = output</span></span>
<span class="line"><span>        self._task_id = task_id</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    def url(self) -&gt; List[str]:</span></span>
<span class="line"><span>        if self._output is None:</span></span>
<span class="line"><span>            return []</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        if isinstance(self._output, str):</span></span>
<span class="line"><span>            return [self._output]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        if isinstance(self._output, list):</span></span>
<span class="line"><span>            return self._output</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        return []</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    def save(self, path: str) -&gt; List[str]:</span></span>
<span class="line"><span>        urls = self.url()</span></span>
<span class="line"><span>        if not urls:</span></span>
<span class="line"><span>            raise ValueError(&quot;没有可保存的输出文件&quot;)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        os.makedirs(path, exist_ok=True)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        saved_files = []</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        for index, url in enumerate(urls):</span></span>
<span class="line"><span>            file_ext = self._get_file_extension(url)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>            filename = f&quot;{self._task_id}_{index}{file_ext}&quot;</span></span>
<span class="line"><span>            filepath = os.path.join(path, filename)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>            response = requests.get(url, stream=True)</span></span>
<span class="line"><span>            response.raise_for_status()</span></span>
<span class="line"><span></span></span>
<span class="line"><span>            with open(filepath, &#39;wb&#39;) as f:</span></span>
<span class="line"><span>                for chunk in response.iter_content(chunk_size=8192):</span></span>
<span class="line"><span>                    f.write(chunk)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>            saved_files.append(filepath)</span></span>
<span class="line"><span>            print(f&quot;文件已保存: {filepath}&quot;)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        return saved_files</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    def _get_file_extension(self, url: str) -&gt; str:</span></span>
<span class="line"><span>        url_without_params = url.split(&#39;?&#39;)[0]</span></span>
<span class="line"><span>        ext = os.path.splitext(url_without_params)[1]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        if not ext:</span></span>
<span class="line"><span>            if &#39;mp4&#39; in url.lower():</span></span>
<span class="line"><span>                ext = &#39;.mp4&#39;</span></span>
<span class="line"><span>            elif &#39;jpg&#39; in url.lower() or &#39;jpeg&#39; in url.lower():</span></span>
<span class="line"><span>                ext = &#39;.jpg&#39;</span></span>
<span class="line"><span>            elif &#39;png&#39; in url.lower():</span></span>
<span class="line"><span>                ext = &#39;.png&#39;</span></span>
<span class="line"><span>            else:</span></span>
<span class="line"><span>                ext = &#39;.bin&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        return ext</span></span>
<span class="line"><span></span></span>
<span class="line"><span>class ReplicateClient:</span></span>
<span class="line"><span>    &quot;&quot;&quot;自定义 Replicate API 客户端&quot;&quot;&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    def __init__(self, api_token: str, base_url: str = &quot;https://api.maisi-ai.com/replicate&quot;):</span></span>
<span class="line"><span>        self.api_token = api_token</span></span>
<span class="line"><span>        self.base_url = base_url.rstrip(&#39;/&#39;)</span></span>
<span class="line"><span>        self.session = requests.Session()</span></span>
<span class="line"><span>        self.session.headers.update({</span></span>
<span class="line"><span>            &#39;Authorization&#39;: f&#39;Bearer {api_token}&#39;,</span></span>
<span class="line"><span>            &#39;Content-Type&#39;: &#39;application/json&#39;</span></span>
<span class="line"><span>        })</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    def run(</span></span>
<span class="line"><span>        self,</span></span>
<span class="line"><span>        model: str,</span></span>
<span class="line"><span>        input: Dict[str, Any],</span></span>
<span class="line"><span>        poll_interval: float = 1.0,</span></span>
<span class="line"><span>        timeout: Optional[float] = None</span></span>
<span class="line"><span>    ) -&gt; ReplicateOutput:</span></span>
<span class="line"><span>        task_id = self._create_prediction(model, input)</span></span>
<span class="line"><span>        print(f&quot;任务已创建: {task_id}&quot;)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        result = self._poll_prediction(task_id, poll_interval, timeout)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        return ReplicateOutput(result[&#39;output&#39;], task_id)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    def _create_prediction(self, model: str, input: Dict[str, Any]) -&gt; str:</span></span>
<span class="line"><span>        url = f&quot;{self.base_url}/v1/models/{model}/predictions&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        payload = {</span></span>
<span class="line"><span>            &quot;input&quot;: input</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        response = self.session.post(url, json=payload)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        if response.status_code != 200:</span></span>
<span class="line"><span>            raise ReplicateAPIError.from_response(response)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        data = response.json()</span></span>
<span class="line"><span>        return data[&#39;id&#39;]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    def _poll_prediction(</span></span>
<span class="line"><span>        self,</span></span>
<span class="line"><span>        task_id: str,</span></span>
<span class="line"><span>        poll_interval: float,</span></span>
<span class="line"><span>        timeout: Optional[float]</span></span>
<span class="line"><span>    ) -&gt; Dict[str, Any]:</span></span>
<span class="line"><span>        url = f&quot;{self.base_url}/v1/predictions/{task_id}&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        start_time = time.time()</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        while True:</span></span>
<span class="line"><span>            if timeout and (time.time() - start_time) &gt; timeout:</span></span>
<span class="line"><span>                raise TimeoutError(f&quot;任务 {task_id} 超时&quot;)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>            response = self.session.get(url)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>            if response.status_code != 200:</span></span>
<span class="line"><span>                raise ReplicateAPIError.from_response(response)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>            data = response.json()</span></span>
<span class="line"><span>            status = data[&#39;status&#39;]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>            print(f&quot;任务状态: {status}&quot;)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>            if status == &#39;succeeded&#39;:</span></span>
<span class="line"><span>                print(&quot;任务成功完成&quot;)</span></span>
<span class="line"><span>                return data</span></span>
<span class="line"><span></span></span>
<span class="line"><span>            elif status == &#39;failed&#39;:</span></span>
<span class="line"><span>                error_msg = data.get(&#39;error&#39;, &#39;未知错误&#39;)</span></span>
<span class="line"><span>                raise RuntimeError(f&quot;任务失败: {error_msg}&quot;)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>            elif status in [&#39;starting&#39;, &#39;processing&#39;]:</span></span>
<span class="line"><span>                time.sleep(poll_interval)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>            else:</span></span>
<span class="line"><span>                print(f&quot;警告: 未知状态 {status}&quot;)</span></span>
<span class="line"><span>                time.sleep(poll_interval)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    def get_prediction(self, task_id: str) -&gt; Dict[str, Any]:</span></span>
<span class="line"><span>        url = f&quot;{self.base_url}/v1/predictions/{task_id}&quot;</span></span>
<span class="line"><span>        response = self.session.get(url)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        if response.status_code != 200:</span></span>
<span class="line"><span>            raise ReplicateAPIError.from_response(response)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        return response.json()</span></span>
<span class="line"><span></span></span>
<span class="line"><span>if __name__ == &quot;__main__&quot;:</span></span>
<span class="line"><span>    client = ReplicateClient(</span></span>
<span class="line"><span>        api_token=&quot;sk-xxxxx&quot;,</span></span>
<span class="line"><span>        base_url=&quot;https://api.maisi-ai.com/replicate&quot;</span></span>
<span class="line"><span>    )</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    input = {</span></span>
<span class="line"><span>        &quot;prompt&quot;: &quot;The photo: Create a cinematic, photorealistic medium shot capturing the dynamic energy of a high-octane action film. The focus is a young woman with wind-swept dark hair streaked with pink highlights and determined features, looking directly and intently into the camera lens, she is slightly off-center. She wears a fitted pink and gold racing jacket over a black tank top with \\&quot;Imagen 4 Fast\\&quot; in motion-stylized lettering and on the next line \\&quot;on Replicate\\&quot; emblazoned across the chest and aviator sunglasses pushed up on her head. The lighting is dramatic with motion blur streaks and neon reflections from passing city lights, creating dynamic lens flares and light trails (they do not cover her face). The background shows a blurred urban nightscape with streaking car headlights and illuminated skyscrapers rushing past, rendered with heavy motion blur and shallow depth of field. High contrast lighting, vibrant neon color palette with deep blues and electric yellows, and razor-sharp focus on her intense eyes enhance the fast-paced, electrifying atmosphere. She is illuminated while the background is darker.&quot;,</span></span>
<span class="line"><span>        &quot;aspect_ratio&quot;: &quot;4:31&quot;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    output = client.run(</span></span>
<span class="line"><span>        &quot;google/imagen-4-fast&quot;,</span></span>
<span class="line"><span>        input=input</span></span>
<span class="line"><span>    )</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    print(&quot;输出 URL:&quot;)</span></span>
<span class="line"><span>    print(output.url())</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    saved_files = output.save(&quot;./output&quot;)</span></span>
<span class="line"><span>    print(f&quot;\\n已保存文件: {saved_files}&quot;)</span></span></code></pre></div>`,15)])])}const f=n(l,[["render",t]]);export{h as __pageData,f as default};
