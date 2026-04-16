import{_ as n,o as a,c as p,ag as e}from"./chunks/framework.DXGyWiRo.js";const q=JSON.parse('{"title":"Midjourney","description":"","frontmatter":{},"headers":[],"relativePath":"docs/use/api/midjourney.md","filePath":"docs/use/api/midjourney.md","lastUpdated":null}'),l={name:"docs/use/api/midjourney.md"};function t(o,s,i,c,u,r){return a(),p("div",null,[...s[0]||(s[0]=[e(`<h1 id="midjourney" tabindex="-1">Midjourney <a class="header-anchor" href="#midjourney" aria-label="Permalink to &quot;Midjourney&quot;">​</a></h1><p>Maisi 支持 midjourney-proxy-plus 接口协议。</p><h2 id="base-url-鉴权" tabindex="-1">Base URL / 鉴权 <a class="header-anchor" href="#base-url-鉴权" aria-label="Permalink to &quot;Base URL / 鉴权&quot;">​</a></h2><ul><li>Base URL：<code>https://api.maisi-ai.com/mj</code></li><li>鉴权：<code>mj-api-secret: &lt;your-api-key&gt;</code></li></ul><h2 id="路径与模式" tabindex="-1">路径与模式 <a class="header-anchor" href="#路径与模式" aria-label="Permalink to &quot;路径与模式&quot;">​</a></h2><ul><li>Relax：<code>/mj-relax/mj</code></li><li>Fast：<code>/mj</code> 或 <code>/mj-fast/mj</code></li><li>Turbo：<code>/mj-turbo/mj</code></li></ul><h2 id="备注" tabindex="-1">备注 <a class="header-anchor" href="#备注" aria-label="Permalink to &quot;备注&quot;">​</a></h2><p>Midjourney 这类任务型接口通常需要：</p><ul><li>提交任务</li><li>轮询查询任务状态</li><li>根据按钮/动作继续提交 action 或 modal</li></ul><p>建议以外部 API 开发文档与协议文档为准。</p><h2 id="示例" tabindex="-1">示例 <a class="header-anchor" href="#示例" aria-label="Permalink to &quot;示例&quot;">​</a></h2><p>python</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>import requests</span></span>
<span class="line"><span>import time</span></span>
<span class="line"><span>import json</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 配置信息</span></span>
<span class="line"><span># Relax模式请求路径：/mj-relax</span></span>
<span class="line"><span># Fast模式请求路径：/mj-fast</span></span>
<span class="line"><span># Turbo模式请求路径：/mj-turbo</span></span>
<span class="line"><span># 如果不填写，默认是Fast模式</span></span>
<span class="line"><span>BASE_URL = &quot;https://api.maisi-ai.com/mj-relax&quot;</span></span>
<span class="line"><span>BEARER_TOKEN = &quot;your_token_here&quot;</span></span>
<span class="line"><span>HEADERS = {</span></span>
<span class="line"><span>    &quot;mj-api-secret&quot;: f&quot;{BEARER_TOKEN}&quot;,</span></span>
<span class="line"><span>    &quot;Content-Type&quot;: &quot;application/json&quot;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>class MJImageGenerator:</span></span>
<span class="line"><span>    def __init__(self):</span></span>
<span class="line"><span>        self.base_url = BASE_URL</span></span>
<span class="line"><span>        self.headers = HEADERS</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    def submit_task(self, prompt):</span></span>
<span class="line"><span>        &quot;&quot;&quot;提交图片生成任务&quot;&quot;&quot;</span></span>
<span class="line"><span>        url = f&quot;{self.base_url}/mj/submit/imagine&quot;</span></span>
<span class="line"><span>        payload = {</span></span>
<span class="line"><span>            &quot;base64Array&quot;: [], # 这个是可选的，如果垫图，需要传入垫图的base64， 可以使用多张垫图 最多5张， 单张图片不超过1M</span></span>
<span class="line"><span>            &quot;prompt&quot;: prompt, # 这个是必填的，prompt 是必填的</span></span>
<span class="line"><span>            &quot;botType&quot;: &quot;MID_JOURNEY&quot; # 这个是必填的，botType 是必填的，MID_JOURNEY 表示 Midjourney 模型,NIJI_JOURNEY 表示 Niji 模型， 详细参考 https://docs.midjourney.com/docs/models</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        response = requests.post(url, headers=self.headers, json=payload)</span></span>
<span class="line"><span>        data = response.json()</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        if data[&quot;code&quot;] not in [1, 22]:</span></span>
<span class="line"><span>            raise Exception(f&quot;提交任务失败: {data[&#39;description&#39;]}&quot;)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        return data[&quot;result&quot;]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    def action(self, customId, taskId):</span></span>
<span class="line"><span>        &quot;&quot;&quot;执行操作&quot;&quot;&quot;</span></span>
<span class="line"><span>        url = f&quot;{self.base_url}/mj/submit/action&quot;</span></span>
<span class="line"><span>        payload = {</span></span>
<span class="line"><span>            &quot;customId&quot;: customId,</span></span>
<span class="line"><span>            &quot;taskId&quot;: taskId</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        response = requests.post(url, headers=self.headers, json=payload)</span></span>
<span class="line"><span>        data = response.json()</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        if data[&quot;code&quot;] not in [1, 22]:</span></span>
<span class="line"><span>            raise Exception(f&quot;提交任务失败: {data[&#39;description&#39;]}&quot;)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        return data[&quot;result&quot;]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    def modal(self, taskId, prompt):</span></span>
<span class="line"><span>        &quot;&quot;&quot;执行modal操作&quot;&quot;&quot;</span></span>
<span class="line"><span>        url = f&quot;{self.base_url}/mj/submit/modal&quot;</span></span>
<span class="line"><span>        payload = {</span></span>
<span class="line"><span>            &quot;prompt&quot;: prompt,</span></span>
<span class="line"><span>            &quot;taskId&quot;: taskId</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        response = requests.post(url, headers=self.headers, json=payload)</span></span>
<span class="line"><span>        data = response.json()</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        if data[&quot;code&quot;] not in [1, 22]:</span></span>
<span class="line"><span>            raise Exception(f&quot;提交任务失败: {data[&#39;description&#39;]}&quot;)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        return data[&quot;result&quot;]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    def describe(self, base64, botType):</span></span>
<span class="line"><span>        &quot;&quot;&quot;执行图生文操作&quot;&quot;&quot;</span></span>
<span class="line"><span>        url = f&quot;{self.base_url}/mj/submit/describe&quot;</span></span>
<span class="line"><span>        payload = {</span></span>
<span class="line"><span>            &quot;base64&quot;: base64,</span></span>
<span class="line"><span>            &quot;botType&quot;: botType</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        response = requests.post(url, headers=self.headers, json=payload)</span></span>
<span class="line"><span>        data = response.json()</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        if data[&quot;code&quot;] not in [1, 22]:</span></span>
<span class="line"><span>            raise Exception(f&quot;提交任务失败: {data[&#39;description&#39;]}&quot;)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        return data[&quot;result&quot;]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    def shorten(self, prompt, botType):</span></span>
<span class="line"><span>        &quot;&quot;&quot;执行缩短提示词的操作&quot;&quot;&quot;</span></span>
<span class="line"><span>        url = f&quot;{self.base_url}/mj/submit/shorten&quot;</span></span>
<span class="line"><span>        payload = {</span></span>
<span class="line"><span>            &quot;prompt&quot;: prompt,</span></span>
<span class="line"><span>            &quot;botType&quot;: botType</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        response = requests.post(url, headers=self.headers, json=payload)</span></span>
<span class="line"><span>        data = response.json()</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        if data[&quot;code&quot;] not in [1, 22]:</span></span>
<span class="line"><span>            raise Exception(f&quot;提交任务失败: {data[&#39;description&#39;]}&quot;)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        return data[&quot;result&quot;]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    def fetch_task_status(self, task_id):</span></span>
<span class="line"><span>        &quot;&quot;&quot;获取任务状态&quot;&quot;&quot;</span></span>
<span class="line"><span>        url = f&quot;{self.base_url}/mj/task/{task_id}/fetch&quot;</span></span>
<span class="line"><span>        response = requests.get(url, headers=self.headers)</span></span>
<span class="line"><span>        return response.json()</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    def wait_for_completion(self, task_id):</span></span>
<span class="line"><span>        &quot;&quot;&quot;轮询等待任务完成&quot;&quot;&quot;</span></span>
<span class="line"><span>        while True:</span></span>
<span class="line"><span>            data = self.fetch_task_status(task_id)</span></span>
<span class="line"><span>            status = data[&quot;status&quot;]</span></span>
<span class="line"><span>            progress = data[&quot;progress&quot;]</span></span>
<span class="line"><span>            print(f&quot;当前进度: {progress}&quot;)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>            if status == &quot;SUCCESS&quot;:</span></span>
<span class="line"><span>                print(&quot;任务完成!&quot;)</span></span>
<span class="line"><span>                print(f&quot;图片链接: {data[&#39;imageUrl&#39;]}&quot;)</span></span>
<span class="line"><span>                print(f&quot;提示词: {data[&#39;prompt&#39;]}&quot;)</span></span>
<span class="line"><span>                print(f&quot;提示词EN: {data[&#39;promptEn&#39;]}&quot;)</span></span>
<span class="line"><span>                print(&quot;\\n可用的操作按钮:&quot;)</span></span>
<span class="line"><span>                print(&quot;\\按钮说明， 顺序，从左往右，从上往下。 Ux:表示你想要操作哪张图片。 🔄 表示重新绘制。 Vx:表示你想要变化哪一张图片 &quot;)</span></span>
<span class="line"><span>                # 参考</span></span>
<span class="line"><span>                # https://docs.midjourney.com/docs/midjourney-discord</span></span>
<span class="line"><span>                # https://docs.midjourney.com/docs/variations</span></span>
<span class="line"><span>                for button in data[&quot;buttons&quot;]:</span></span>
<span class="line"><span>                    label = button[&#39;label&#39;] if button[&#39;label&#39;] != &quot;&quot; else button[&#39;emoji&#39;]</span></span>
<span class="line"><span>                    print(f&quot;{label}: {button[&#39;customId&#39;]}&quot;)</span></span>
<span class="line"><span>                return data</span></span>
<span class="line"><span>            elif status == &quot;FAILURE&quot;:</span></span>
<span class="line"><span>                raise Exception(f&quot;任务失败: {data[&#39;failReason&#39;]}&quot;)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>            time.sleep(10)  # 每10秒轮询一次</span></span>
<span class="line"><span></span></span>
<span class="line"><span>def main():</span></span>
<span class="line"><span>    try:</span></span>
<span class="line"><span>        generator = MJImageGenerator()</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        # 示例prompt</span></span>
<span class="line"><span>        # Cyberpunk 风格， 可以不填，可选值: 賽博朋克: Cyberpunk,星際: Warframe,動漫: ACGN,日本漫畫: Japanese comics/manga,水墨畫風格: Ink Wash Painting Style,原創: Original,風景畫: landscape,插畫: illustration,漫畫: Manga,現代自然: modern organic,創世紀: Genesis,海報風格: posterstyle,超現實主義: surrealism,素描: sketch,寫實: realism,水彩畫: Watercolor painting,立體主義: Cubism,黑白: black and white,膠片攝影風格: fm photography,電影化: cinematic,清晰的面部特徵: dlear facial features</span></span>
<span class="line"><span>        # Wide view 宽视角， 可以不填, 可选值： 寬視角: Wide view,鳥瞰視角: Aerial view,頂視角: Top view,仰視角: Upview,正面視角: Front view,頭部特寫: Headshot,超廣角視角: Ultrawideshot,中景: Medium Shot(MS),遠景: Long Shot(LS),景深: depth offield(dof)</span></span>
<span class="line"><span>        # Face Shot (VCU) 人物特写， 可以不填， 可选值： 臉部特寫: Face Shot (VCU),大特寫: Big Close-Up(BCU),特寫: Close-Up(CU),腰部以上: Waist Shot(WS),膝蓋以上: KneeShot(KS),全身照: Full Length Shot(FLS),極遠景: Extra Long Shot(ELS)</span></span>
<span class="line"><span>        # Cold light 灯光， 可以不填，可选值： 冷光: Cold light,暖光: Warm light,硬光: hard lighting,戲劇性光線: Dramatic light,反射光: reflection light,薄霧: Misty foggy,自然光: Natural light,陽光: Sun light,情緒化: moody</span></span>
<span class="line"><span>        # 可爱的猫， 描述你想要生成的图片</span></span>
<span class="line"><span>        # --q 2 表示质量， 可选值： 0.25,0.5,1,2， 参考 https://docs.midjourney.com/docs/quality</span></span>
<span class="line"><span>        # --s 50 表示艺术程度，可选值： 0-1000，参考 https://docs.midjourney.com/docs/stylize</span></span>
<span class="line"><span>        # --v 6.1 表示版本， 可选值：1、2、3、4、5、5.0、5.1、5.2、6 和 6.1， 如果使用niji模型，则需要改为 --niji 版本号，  参考 https://docs.midjourney.com/docs/models</span></span>
<span class="line"><span>        # --ar 4:3 表示宽高比</span></span>
<span class="line"><span>        # 更多请参考 https://docs.midjourney.com/docs/parameter-list</span></span>
<span class="line"><span>        prompt = &quot;Cyberpunk,Wide view,Face Shot (VCU),Cold light,可爱的猫 --q 2 --s 50 --v 6.1 --ar 4:3&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        print(&quot;提交任务中...&quot;)</span></span>
<span class="line"><span>        task_id = generator.submit_task(prompt)</span></span>
<span class="line"><span>        print(f&quot;任务ID: {task_id}&quot;)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        print(&quot;等待任务完成...&quot;)</span></span>
<span class="line"><span>        generator.wait_for_completion(task_id)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        # 按钮操作, 每次有按钮，都按照这个操作执行。</span></span>
<span class="line"><span>        # action_id = generator.action(&quot;MJ::JOB::upsample::1::4f9c53b7-dc2a-441f-a7e0-e8b65dd2ce6d&quot;, task_id)</span></span>
<span class="line"><span>        # print(&quot;等待任务完成...&quot;)</span></span>
<span class="line"><span>        # generator.wait_for_completion(action_id)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        # ------------------------------------------------------------</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        #  特殊操作， CustomZoom， 先 执行 按钮操作， 然后 执行 modal 操作</span></span>
<span class="line"><span>        # 执行按钮操作</span></span>
<span class="line"><span>        # action_id = generator.action(&quot;MJ::CustomZoom::ec92d09b-e6c4-458c-952f-d34e87b090a8&quot;, task_id)</span></span>
<span class="line"><span>        # 执行 modal 操作</span></span>
<span class="line"><span>        # 填写变焦值， 例如 1.8</span></span>
<span class="line"><span>        # prompt += &quot; --zoom 1.8&quot;</span></span>
<span class="line"><span>        # modal_id = generator.modal(prompt, action_id)</span></span>
<span class="line"><span>        # print(&quot;等待任务完成...&quot;)</span></span>
<span class="line"><span>        # generator.wait_for_completion(modal_id)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        # 执行图生文操作</span></span>
<span class="line"><span>        # task_id = generator.describe(&quot;data:image/jpeg;base64,xxxxx&quot;, &quot;MID_JOURNEY&quot;)</span></span>
<span class="line"><span>        # print(f&quot;任务ID: {task_id}&quot;)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        # print(&quot;等待任务完成...&quot;)</span></span>
<span class="line"><span>        # generator.wait_for_completion(task_id)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        # 执行缩短提示词操作</span></span>
<span class="line"><span>        # task_id = generator.shorten(&quot;Please create a whimsical majestic tower of donuts, intricately crafted and adorned with a mesmerizing array of colorful sprinkles. Bring this sugary masterpiece to life, ensuring every detail is rendered in stunning magical realism. Thank you!&quot;, &quot;MID_JOURNEY&quot;)</span></span>
<span class="line"><span>        # print(f&quot;任务ID: {task_id}&quot;)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        # print(&quot;等待任务完成...&quot;)</span></span>
<span class="line"><span>        # generator.wait_for_completion(task_id)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    except Exception as e:</span></span>
<span class="line"><span>        print(f&quot;发生错误: {str(e)}&quot;)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>if __name__ == &quot;__main__&quot;:</span></span>
<span class="line"><span>    main()</span></span></code></pre></div>`,13)])])}const m=n(l,[["render",t]]);export{q as __pageData,m as default};
