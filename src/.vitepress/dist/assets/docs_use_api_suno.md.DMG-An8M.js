import{_ as n,o as a,c as p,ag as t}from"./chunks/framework.DXGyWiRo.js";const _=JSON.parse('{"title":"Suno","description":"","frontmatter":{},"headers":[],"relativePath":"docs/use/api/suno.md","filePath":"docs/use/api/suno.md","lastUpdated":null}'),e={name:"docs/use/api/suno.md"};function l(i,s,o,u,c,r){return a(),p("div",null,[...s[0]||(s[0]=[t(`<h1 id="suno" tabindex="-1">Suno <a class="header-anchor" href="#suno" aria-label="Permalink to &quot;Suno&quot;">​</a></h1><p>Suno 属于任务型接口：通常需要提交任务，然后轮询查询状态，成功后获取结果。</p><ul><li>Base URL：<code>https://api.maisi-ai.com/suno</code></li><li>鉴权：<code>Authorization: Bearer &lt;your-api-key&gt;</code></li><li>详细参数与接口：以 <a href="https://api-docs.maisi-ai.com/" target="_blank" rel="noreferrer">API 开发文档</a> 中 Suno 相关条目为准</li></ul><h2 id="调用流程-建议" tabindex="-1">调用流程（建议） <a class="header-anchor" href="#调用流程-建议" aria-label="Permalink to &quot;调用流程（建议）&quot;">​</a></h2><ol><li>提交歌词生成（如需要）</li><li>提交音乐生成</li><li>轮询任务状态（<code>SUCCESS/FAILURE/IN_PROGRESS</code>）</li><li>成功后读取音频/封面/视频等 URL</li></ol><h2 id="示例" tabindex="-1">示例 <a class="header-anchor" href="#示例" aria-label="Permalink to &quot;示例&quot;">​</a></h2><p>python</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>import requests</span></span>
<span class="line"><span>import time</span></span>
<span class="line"><span>from typing import Dict, Any</span></span>
<span class="line"><span></span></span>
<span class="line"><span>key = &quot;sk-xxxxx&quot;  # 替换为你的key</span></span>
<span class="line"><span>BASE_URL = &quot;https://api.maisi-ai.com/suno&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>def get_headers() -&gt; Dict[str, str]:</span></span>
<span class="line"><span>    return {</span></span>
<span class="line"><span>        &quot;Authorization&quot;: f&quot;Bearer {key}&quot;,</span></span>
<span class="line"><span>        &quot;Content-Type&quot;: &quot;application/json&quot;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>def handle_response(response: requests.Response) -&gt; Dict[str, Any]:</span></span>
<span class="line"><span>    response_data = response.json()</span></span>
<span class="line"><span>    if response.status_code != 200:</span></span>
<span class="line"><span>        raise Exception(f&quot;请求失败，状态码: {response.status_code}，响应信息: {response_data}&quot;)</span></span>
<span class="line"><span>    if response_data.get(&quot;code&quot;) != &quot;success&quot;:</span></span>
<span class="line"><span>        raise Exception(f&quot;操作失败，响应信息: {response_data}&quot;)</span></span>
<span class="line"><span>    return response_data[&quot;data&quot;]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>def submit_lyrics(prompt: str) -&gt; str:</span></span>
<span class="line"><span>    url = f&quot;{BASE_URL}/submit/lyrics&quot;</span></span>
<span class="line"><span>    data = {&quot;prompt&quot;: prompt}</span></span>
<span class="line"><span>    response = requests.post(url, headers=get_headers(), json=data)</span></span>
<span class="line"><span>    return handle_response(response)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>def fetch(task_id: str) -&gt; Dict[str, Any]:</span></span>
<span class="line"><span>    url = f&quot;{BASE_URL}/fetch/{task_id}&quot;</span></span>
<span class="line"><span>    response = requests.get(url, headers=get_headers())</span></span>
<span class="line"><span>    return handle_response(response)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>def submit_song(payload: Dict[str, Any]) -&gt; str:</span></span>
<span class="line"><span>    url = f&quot;{BASE_URL}/submit/music&quot;</span></span>
<span class="line"><span>    response = requests.post(url, headers=get_headers(), json=payload)</span></span>
<span class="line"><span>    return handle_response(response)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>def main():</span></span>
<span class="line"><span>    prompt = &quot;愉快的，摇滚的，学猫叫&quot;</span></span>
<span class="line"><span>    try:</span></span>
<span class="line"><span>        lyrics_task_id = submit_lyrics(prompt)</span></span>
<span class="line"><span>        lyrics_text = &quot;&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        while True:</span></span>
<span class="line"><span>            lyrics_fetch = fetch(lyrics_task_id)</span></span>
<span class="line"><span>            task_status = lyrics_fetch[&quot;status&quot;]</span></span>
<span class="line"><span>            if task_status == &quot;FAILURE&quot;:</span></span>
<span class="line"><span>                raise Exception(&quot;歌词生成失败&quot;)</span></span>
<span class="line"><span>            if task_status == &quot;SUCCESS&quot;:</span></span>
<span class="line"><span>                lyrics_text = lyrics_fetch[&#39;data&#39;][&#39;text&#39;]</span></span>
<span class="line"><span>                break</span></span>
<span class="line"><span>            print(f&quot;歌词生成状态： {task_status}，请等待2s...&quot;)</span></span>
<span class="line"><span>            time.sleep(2)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        print(&quot;歌词内容:&quot; + lyrics_text)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        if not lyrics_text:</span></span>
<span class="line"><span>            raise Exception(&quot;歌词为空终止调用&quot;)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        # 组装歌曲生成请求</span></span>
<span class="line"><span>        payload = {</span></span>
<span class="line"><span>            &quot;prompt&quot;: lyrics_text,</span></span>
<span class="line"><span>            &quot;tags&quot;: &quot;emotional punk&quot;,</span></span>
<span class="line"><span>            &quot;mv&quot;: &quot;chirp-v3-5&quot;,</span></span>
<span class="line"><span>            &quot;title&quot;: &quot;学猫叫&quot;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        # 提交歌曲生成请求</span></span>
<span class="line"><span>        song_task_id = submit_song(payload)</span></span>
<span class="line"><span>        print(&quot;歌曲任务ID:&quot; + song_task_id)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        isStream = False</span></span>
<span class="line"><span>        # 轮询查询歌曲生成状态</span></span>
<span class="line"><span>        while True:</span></span>
<span class="line"><span>            task_data = fetch(song_task_id)</span></span>
<span class="line"><span>            task_status = task_data[&quot;status&quot;]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>            if task_status == &quot;FAILURE&quot;:</span></span>
<span class="line"><span>                raise Exception(&quot;歌曲生成失败&quot;)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>            if task_status == &quot;SUCCESS&quot;:</span></span>
<span class="line"><span>                break</span></span>
<span class="line"><span></span></span>
<span class="line"><span>            if task_status == &quot;IN_PROGRESS&quot; and isStream == False:</span></span>
<span class="line"><span>                isStream = True</span></span>
<span class="line"><span>                print(f&quot;歌曲已经可以通过流播放，但不可下载&quot;)</span></span>
<span class="line"><span>                for song in task_data[&quot;data&quot;]:</span></span>
<span class="line"><span>                    print(f&quot;歌曲名称: {song[&#39;title&#39;]}&quot;)</span></span>
<span class="line"><span>                    print(f&quot;歌曲封面: {song[&#39;image_url&#39;]}&quot;)</span></span>
<span class="line"><span>                    print(f&quot;音频地址: {song[&#39;audio_url&#39;]}&quot;)</span></span>
<span class="line"><span>                    print(&quot;-&quot; * 40)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>            print(f&quot;歌曲生成状态： {task_status}，请等待15s...&quot;)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>            time.sleep(15)</span></span>
<span class="line"><span>        # 打印歌曲信息</span></span>
<span class="line"><span>        for song in task_data[&quot;data&quot;]:</span></span>
<span class="line"><span>            print(f&quot;歌曲名称: {song[&#39;title&#39;]}&quot;)</span></span>
<span class="line"><span>            print(f&quot;歌曲封面: {song[&#39;image_url&#39;]}&quot;)</span></span>
<span class="line"><span>            print(f&quot;音频地址: {song[&#39;audio_url&#39;]}&quot;)</span></span>
<span class="line"><span>            print(f&quot;视频地址: {song[&#39;video_url&#39;]}&quot;)</span></span>
<span class="line"><span>            print(&quot;-&quot; * 40)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    except Exception as e:</span></span>
<span class="line"><span>        print(f&quot;发生错误: {e}&quot;)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>if __name__ == &quot;__main__&quot;:</span></span>
<span class="line"><span>    main()</span></span></code></pre></div>`,8)])])}const d=n(e,[["render",l]]);export{_ as __pageData,d as default};
