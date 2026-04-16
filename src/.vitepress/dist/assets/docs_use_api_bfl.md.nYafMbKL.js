import{_ as n,o as a,c as p,ag as e}from"./chunks/framework.DXGyWiRo.js";const _=JSON.parse('{"title":"BFL","description":"","frontmatter":{},"headers":[],"relativePath":"docs/use/api/bfl.md","filePath":"docs/use/api/bfl.md","lastUpdated":null}'),l={name:"docs/use/api/bfl.md"};function t(i,s,o,c,r,u){return a(),p("div",null,[...s[0]||(s[0]=[e(`<h1 id="bfl" tabindex="-1">BFL <a class="header-anchor" href="#bfl" aria-label="Permalink to &quot;BFL&quot;">​</a></h1><p>BFL 属于任务型接口：创建任务 → 查询结果。</p><h2 id="base-url-鉴权" tabindex="-1">Base URL / 鉴权 <a class="header-anchor" href="#base-url-鉴权" aria-label="Permalink to &quot;Base URL / 鉴权&quot;">​</a></h2><ul><li>Base URL：<code>https://api.maisi-ai.com/bfl</code></li><li>Header：<code>x-key: &lt;your-api-key&gt;</code></li></ul><blockquote><p>你原文示例也体现了这一点：client headers 使用 <code>x-key</code>。</p></blockquote><h2 id="主要接口" tabindex="-1">主要接口 <a class="header-anchor" href="#主要接口" aria-label="Permalink to &quot;主要接口&quot;">​</a></h2><ul><li><code>POST /v1/{model}</code></li><li><code>GET /v1/get_result?id={task_id}</code></li></ul><p>具体字段与返回结构以 API 开发文档为准：<a href="https://api-docs.maisi-ai.com/" target="_blank" rel="noreferrer">https://api-docs.maisi-ai.com/</a></p><h2 id="示例" tabindex="-1">示例 <a class="header-anchor" href="#示例" aria-label="Permalink to &quot;示例&quot;">​</a></h2><p>python</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>import time</span></span>
<span class="line"><span>import requests</span></span>
<span class="line"><span>import json</span></span>
<span class="line"><span>import os</span></span>
<span class="line"><span>from typing import Dict, Any, List, Union, Optional</span></span>
<span class="line"><span></span></span>
<span class="line"><span>class BFLAPIError(Exception):</span></span>
<span class="line"><span>    &quot;&quot;&quot;BFL API Error&quot;&quot;&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    def __init__(self, status_code: int, message: str):</span></span>
<span class="line"><span>        self.status_code = status_code</span></span>
<span class="line"><span>        self.message = message</span></span>
<span class="line"><span>        super().__init__(f&quot;API Error [{status_code}]: {message}&quot;)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @classmethod</span></span>
<span class="line"><span>    def from_response(cls, response: requests.Response):</span></span>
<span class="line"><span>        &quot;&quot;&quot;Create exception from response object&quot;&quot;&quot;</span></span>
<span class="line"><span>        try:</span></span>
<span class="line"><span>            data = response.json()</span></span>
<span class="line"><span>            if &#39;detail&#39; in data and data[&#39;detail&#39;]:</span></span>
<span class="line"><span>                message = data[&#39;detail&#39;]</span></span>
<span class="line"><span>            elif &#39;details&#39; in data and data[&#39;details&#39;]:</span></span>
<span class="line"><span>                message = json.dumps(data[&#39;details&#39;], ensure_ascii=False)</span></span>
<span class="line"><span>            else:</span></span>
<span class="line"><span>                message = response.text or &quot;Unknown Error&quot;</span></span>
<span class="line"><span>        except Exception:</span></span>
<span class="line"><span>            message = response.text or &quot;Unknown Error&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        return cls(</span></span>
<span class="line"><span>            status_code=response.status_code,</span></span>
<span class="line"><span>            message=message</span></span>
<span class="line"><span>        )</span></span>
<span class="line"><span></span></span>
<span class="line"><span>class BFLOutput:</span></span>
<span class="line"><span>    &quot;&quot;&quot;Handle BFL API Output&quot;&quot;&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    def __init__(self, result: Dict[str, Any], task_id: str):</span></span>
<span class="line"><span>        self._result = result</span></span>
<span class="line"><span>        self._task_id = task_id</span></span>
<span class="line"><span>        self._sample_url = result.get(&#39;sample&#39;)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    def url(self) -&gt; Optional[str]:</span></span>
<span class="line"><span>        &quot;&quot;&quot;Return the sample URL&quot;&quot;&quot;</span></span>
<span class="line"><span>        return self._sample_url</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    def save(self, path: str) -&gt; str:</span></span>
<span class="line"><span>        if not self._sample_url:</span></span>
<span class="line"><span>            raise ValueError(&quot;No sample URL available to save&quot;)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        os.makedirs(path, exist_ok=True)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        if &#39;.png&#39; in self._sample_url.lower():</span></span>
<span class="line"><span>            ext = &#39;.png&#39;</span></span>
<span class="line"><span>        elif &#39;.jpg&#39; in self._sample_url.lower() or &#39;.jpeg&#39; in self._sample_url.lower():</span></span>
<span class="line"><span>            ext = &#39;.jpg&#39;</span></span>
<span class="line"><span>        else:</span></span>
<span class="line"><span>            ext = &#39;.jpg&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        filename = f&quot;{self._task_id}{ext}&quot;</span></span>
<span class="line"><span>        filepath = os.path.join(path, filename)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        response = requests.get(self._sample_url, stream=True)</span></span>
<span class="line"><span>        response.raise_for_status()</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        with open(filepath, &#39;wb&#39;) as f:</span></span>
<span class="line"><span>            for chunk in response.iter_content(chunk_size=8192):</span></span>
<span class="line"><span>                f.write(chunk)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        return filepath</span></span>
<span class="line"><span></span></span>
<span class="line"><span>class BFLClient:</span></span>
<span class="line"><span>    &quot;&quot;&quot;BFL API Client&quot;&quot;&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    def __init__(self, api_key: str, base_url: str = &quot;https://api.maisi-ai.com/bfl&quot;):</span></span>
<span class="line"><span>        self.api_key = api_key</span></span>
<span class="line"><span>        self.base_url = base_url.rstrip(&#39;/&#39;)</span></span>
<span class="line"><span>        self.session = requests.Session()</span></span>
<span class="line"><span>        self.session.headers.update({</span></span>
<span class="line"><span>            &#39;x-key&#39;: api_key,</span></span>
<span class="line"><span>            &#39;Content-Type&#39;: &#39;application/json&#39;</span></span>
<span class="line"><span>        })</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    def run(</span></span>
<span class="line"><span>        self,</span></span>
<span class="line"><span>        model: str,</span></span>
<span class="line"><span>        input: Dict[str, Any],</span></span>
<span class="line"><span>        poll_interval: float = 1.0,</span></span>
<span class="line"><span>        timeout: Optional[float] = None</span></span>
<span class="line"><span>    ) -&gt; BFLOutput:</span></span>
<span class="line"><span>        task_id = self._create_task(model, input)</span></span>
<span class="line"><span>        print(f&quot;Task created: {task_id}&quot;)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        result_data = self._poll_result(task_id, poll_interval, timeout)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        return BFLOutput(result_data[&#39;result&#39;], task_id)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    def _create_task(self, model: str, input: Dict[str, Any]) -&gt; str:</span></span>
<span class="line"><span>        url = f&quot;{self.base_url}/v1/{model}&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        response = self.session.post(url, json=input)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        if response.status_code != 200:</span></span>
<span class="line"><span>            raise BFLAPIError.from_response(response)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        data = response.json()</span></span>
<span class="line"><span>        return data[&#39;id&#39;]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    def _poll_result(</span></span>
<span class="line"><span>        self,</span></span>
<span class="line"><span>        task_id: str,</span></span>
<span class="line"><span>        poll_interval: float,</span></span>
<span class="line"><span>        timeout: Optional[float]</span></span>
<span class="line"><span>    ) -&gt; Dict[str, Any]:</span></span>
<span class="line"><span>        url = f&quot;{self.base_url}/v1/get_result&quot;</span></span>
<span class="line"><span>        params = {&#39;id&#39;: task_id}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        start_time = time.time()</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        while True:</span></span>
<span class="line"><span>            if timeout and (time.time() - start_time) &gt; timeout:</span></span>
<span class="line"><span>                raise TimeoutError(f&quot;Task {task_id} timed out&quot;)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>            response = self.session.get(url, params=params)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>            # Handle 404 by ignoring and continuing</span></span>
<span class="line"><span>            if response.status_code == 404:</span></span>
<span class="line"><span>                time.sleep(poll_interval)</span></span>
<span class="line"><span>                continue</span></span>
<span class="line"><span></span></span>
<span class="line"><span>            if response.status_code != 200:</span></span>
<span class="line"><span>                raise BFLAPIError.from_response(response)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>            data = response.json()</span></span>
<span class="line"><span>            status = data.get(&#39;status&#39;)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>            if status == &#39;Ready&#39;:</span></span>
<span class="line"><span>                result = data.get(&#39;result&#39;)</span></span>
<span class="line"><span>                if not result or &#39;sample&#39; not in result:</span></span>
<span class="line"><span>                    raise RuntimeError(&quot;Task Ready but result or sample missing&quot;)</span></span>
<span class="line"><span>                return data</span></span>
<span class="line"><span></span></span>
<span class="line"><span>            elif status in [&#39;Request Moderated&#39;, &#39;Content Moderated&#39;, &#39;Error&#39;]:</span></span>
<span class="line"><span>                details = data.get(&#39;details&#39;)</span></span>
<span class="line"><span>                if not details:</span></span>
<span class="line"><span>                    raise RuntimeError(</span></span>
<span class="line"><span>                        f&quot;Task failed with status {status}. Details: {data.get(&#39;detail&#39;) or &#39;No details provided&#39;}&quot;</span></span>
<span class="line"><span>                    )</span></span>
<span class="line"><span></span></span>
<span class="line"><span>                if isinstance(details, (dict, list)):</span></span>
<span class="line"><span>                    details_str = json.dumps(details, ensure_ascii=False)</span></span>
<span class="line"><span>                else:</span></span>
<span class="line"><span>                    details_str = str(details)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>                raise RuntimeError(f&quot;Task failed with status {status}: {details_str}&quot;)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>            elif status == &#39;Pending&#39;:</span></span>
<span class="line"><span>                time.sleep(poll_interval)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>            elif status == &#39;Task not found&#39;:</span></span>
<span class="line"><span>                print(f&quot;Status: {status}, waiting...&quot;)</span></span>
<span class="line"><span>                time.sleep(poll_interval)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>            else:</span></span>
<span class="line"><span>                print(f&quot;Unknown status: {status}, waiting...&quot;)</span></span>
<span class="line"><span>                time.sleep(poll_interval)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>if __name__ == &quot;__main__&quot;:</span></span>
<span class="line"><span>    client = BFLClient(</span></span>
<span class="line"><span>        api_key=&quot;sk-xxxxxx&quot;,</span></span>
<span class="line"><span>        base_url=&quot;https://api.maisi-ai.com/bfl&quot; </span></span>
<span class="line"><span>    )</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    input_data = {</span></span>
<span class="line"><span>        &quot;prompt&quot;: &quot;A futuristic city with flying cars, neon lights, cyberpunk style&quot;,</span></span>
<span class="line"><span>        &quot;width&quot;: 1024,</span></span>
<span class="line"><span>        &quot;height&quot;: 768</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    try:</span></span>
<span class="line"><span>        output = client.run(</span></span>
<span class="line"><span>            &quot;flux-pro-1.1&quot;,</span></span>
<span class="line"><span>            input=input_data</span></span>
<span class="line"><span>        )</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        print(&quot;Output URL:&quot;)</span></span>
<span class="line"><span>        print(output.url())</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        saved_file = output.save(&quot;./output&quot;)</span></span>
<span class="line"><span>        print(f&quot;\\nSaved file: {saved_file}&quot;)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    except Exception as e:</span></span>
<span class="line"><span>        print(f&quot;An error occurred: {e}&quot;)</span></span></code></pre></div>`,11)])])}const f=n(l,[["render",t]]);export{_ as __pageData,f as default};
