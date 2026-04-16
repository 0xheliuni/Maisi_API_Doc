# Midjourney 

Maisi 支持 midjourney-proxy-plus 接口协议。

## Base URL / 鉴权 

-   Base URL：`https://api.maisi-ai.com/mj`
-   鉴权：`mj-api-secret: <your-api-key>`

## 路径与模式 

-   Relax：`/mj-relax/mj`
-   Fast：`/mj` 或 `/mj-fast/mj`
-   Turbo：`/mj-turbo/mj`

## 备注 

Midjourney 这类任务型接口通常需要：

-   提交任务
-   轮询查询任务状态
-   根据按钮/动作继续提交 action 或 modal

建议以外部 API 开发文档与协议文档为准。

## 示例 

python

```
import requests
import time
import json

# 配置信息
# Relax模式请求路径：/mj-relax
# Fast模式请求路径：/mj-fast
# Turbo模式请求路径：/mj-turbo
# 如果不填写，默认是Fast模式
BASE_URL = "https://api.maisi-ai.com/mj-relax"
BEARER_TOKEN = "your_token_here"
HEADERS = {
    "mj-api-secret": f"{BEARER_TOKEN}",
    "Content-Type": "application/json"
}

class MJImageGenerator:
    def __init__(self):
        self.base_url = BASE_URL
        self.headers = HEADERS

    def submit_task(self, prompt):
        """提交图片生成任务"""
        url = f"{self.base_url}/mj/submit/imagine"
        payload = {
            "base64Array": [], # 这个是可选的，如果垫图，需要传入垫图的base64， 可以使用多张垫图 最多5张， 单张图片不超过1M
            "prompt": prompt, # 这个是必填的，prompt 是必填的
            "botType": "MID_JOURNEY" # 这个是必填的，botType 是必填的，MID_JOURNEY 表示 Midjourney 模型,NIJI_JOURNEY 表示 Niji 模型， 详细参考 https://docs.midjourney.com/docs/models
        }

        response = requests.post(url, headers=self.headers, json=payload)
        data = response.json()

        if data["code"] not in [1, 22]:
            raise Exception(f"提交任务失败: {data['description']}")

        return data["result"]

    def action(self, customId, taskId):
        """执行操作"""
        url = f"{self.base_url}/mj/submit/action"
        payload = {
            "customId": customId,
            "taskId": taskId
        }
        response = requests.post(url, headers=self.headers, json=payload)
        data = response.json()

        if data["code"] not in [1, 22]:
            raise Exception(f"提交任务失败: {data['description']}")

        return data["result"]

    def modal(self, taskId, prompt):
        """执行modal操作"""
        url = f"{self.base_url}/mj/submit/modal"
        payload = {
            "prompt": prompt,
            "taskId": taskId
        }
        response = requests.post(url, headers=self.headers, json=payload)
        data = response.json()

        if data["code"] not in [1, 22]:
            raise Exception(f"提交任务失败: {data['description']}")

        return data["result"]

    def describe(self, base64, botType):
        """执行图生文操作"""
        url = f"{self.base_url}/mj/submit/describe"
        payload = {
            "base64": base64,
            "botType": botType
        }
        response = requests.post(url, headers=self.headers, json=payload)
        data = response.json()

        if data["code"] not in [1, 22]:
            raise Exception(f"提交任务失败: {data['description']}")

        return data["result"]

    def shorten(self, prompt, botType):
        """执行缩短提示词的操作"""
        url = f"{self.base_url}/mj/submit/shorten"
        payload = {
            "prompt": prompt,
            "botType": botType
        }
        response = requests.post(url, headers=self.headers, json=payload)
        data = response.json()

        if data["code"] not in [1, 22]:
            raise Exception(f"提交任务失败: {data['description']}")

        return data["result"]

    def fetch_task_status(self, task_id):
        """获取任务状态"""
        url = f"{self.base_url}/mj/task/{task_id}/fetch"
        response = requests.get(url, headers=self.headers)
        return response.json()

    def wait_for_completion(self, task_id):
        """轮询等待任务完成"""
        while True:
            data = self.fetch_task_status(task_id)
            status = data["status"]
            progress = data["progress"]
            print(f"当前进度: {progress}")

            if status == "SUCCESS":
                print("任务完成!")
                print(f"图片链接: {data['imageUrl']}")
                print(f"提示词: {data['prompt']}")
                print(f"提示词EN: {data['promptEn']}")
                print("\n可用的操作按钮:")
                print("\按钮说明， 顺序，从左往右，从上往下。 Ux:表示你想要操作哪张图片。 🔄 表示重新绘制。 Vx:表示你想要变化哪一张图片 ")
                # 参考
                # https://docs.midjourney.com/docs/midjourney-discord
                # https://docs.midjourney.com/docs/variations
                for button in data["buttons"]:
                    label = button['label'] if button['label'] != "" else button['emoji']
                    print(f"{label}: {button['customId']}")
                return data
            elif status == "FAILURE":
                raise Exception(f"任务失败: {data['failReason']}")

            time.sleep(10)  # 每10秒轮询一次

def main():
    try:
        generator = MJImageGenerator()

        # 示例prompt
        # Cyberpunk 风格， 可以不填，可选值: 賽博朋克: Cyberpunk,星際: Warframe,動漫: ACGN,日本漫畫: Japanese comics/manga,水墨畫風格: Ink Wash Painting Style,原創: Original,風景畫: landscape,插畫: illustration,漫畫: Manga,現代自然: modern organic,創世紀: Genesis,海報風格: posterstyle,超現實主義: surrealism,素描: sketch,寫實: realism,水彩畫: Watercolor painting,立體主義: Cubism,黑白: black and white,膠片攝影風格: fm photography,電影化: cinematic,清晰的面部特徵: dlear facial features
        # Wide view 宽视角， 可以不填, 可选值： 寬視角: Wide view,鳥瞰視角: Aerial view,頂視角: Top view,仰視角: Upview,正面視角: Front view,頭部特寫: Headshot,超廣角視角: Ultrawideshot,中景: Medium Shot(MS),遠景: Long Shot(LS),景深: depth offield(dof)
        # Face Shot (VCU) 人物特写， 可以不填， 可选值： 臉部特寫: Face Shot (VCU),大特寫: Big Close-Up(BCU),特寫: Close-Up(CU),腰部以上: Waist Shot(WS),膝蓋以上: KneeShot(KS),全身照: Full Length Shot(FLS),極遠景: Extra Long Shot(ELS)
        # Cold light 灯光， 可以不填，可选值： 冷光: Cold light,暖光: Warm light,硬光: hard lighting,戲劇性光線: Dramatic light,反射光: reflection light,薄霧: Misty foggy,自然光: Natural light,陽光: Sun light,情緒化: moody
        # 可爱的猫， 描述你想要生成的图片
        # --q 2 表示质量， 可选值： 0.25,0.5,1,2， 参考 https://docs.midjourney.com/docs/quality
        # --s 50 表示艺术程度，可选值： 0-1000，参考 https://docs.midjourney.com/docs/stylize
        # --v 6.1 表示版本， 可选值：1、2、3、4、5、5.0、5.1、5.2、6 和 6.1， 如果使用niji模型，则需要改为 --niji 版本号，  参考 https://docs.midjourney.com/docs/models
        # --ar 4:3 表示宽高比
        # 更多请参考 https://docs.midjourney.com/docs/parameter-list
        prompt = "Cyberpunk,Wide view,Face Shot (VCU),Cold light,可爱的猫 --q 2 --s 50 --v 6.1 --ar 4:3"

        print("提交任务中...")
        task_id = generator.submit_task(prompt)
        print(f"任务ID: {task_id}")

        print("等待任务完成...")
        generator.wait_for_completion(task_id)

        # 按钮操作, 每次有按钮，都按照这个操作执行。
        # action_id = generator.action("MJ::JOB::upsample::1::4f9c53b7-dc2a-441f-a7e0-e8b65dd2ce6d", task_id)
        # print("等待任务完成...")
        # generator.wait_for_completion(action_id)

        # ------------------------------------------------------------

        #  特殊操作， CustomZoom， 先 执行 按钮操作， 然后 执行 modal 操作
        # 执行按钮操作
        # action_id = generator.action("MJ::CustomZoom::ec92d09b-e6c4-458c-952f-d34e87b090a8", task_id)
        # 执行 modal 操作
        # 填写变焦值， 例如 1.8
        # prompt += " --zoom 1.8"
        # modal_id = generator.modal(prompt, action_id)
        # print("等待任务完成...")
        # generator.wait_for_completion(modal_id)

        # 执行图生文操作
        # task_id = generator.describe("data:image/jpeg;base64,xxxxx", "MID_JOURNEY")
        # print(f"任务ID: {task_id}")

        # print("等待任务完成...")
        # generator.wait_for_completion(task_id)

        # 执行缩短提示词操作
        # task_id = generator.shorten("Please create a whimsical majestic tower of donuts, intricately crafted and adorned with a mesmerizing array of colorful sprinkles. Bring this sugary masterpiece to life, ensuring every detail is rendered in stunning magical realism. Thank you!", "MID_JOURNEY")
        # print(f"任务ID: {task_id}")

        # print("等待任务完成...")
        # generator.wait_for_completion(task_id)

    except Exception as e:
        print(f"发生错误: {str(e)}")

if __name__ == "__main__":
    main()
```