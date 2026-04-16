# OCR 

目前接入的是 `mistral` 的 OCR 模型。

-   API 参考（官方）：[https://docs.mistral.ai/api/#tag/ocr/operation/ocr\_v1\_ocr\_post](https://docs.mistral.ai/api/#tag/ocr/operation/ocr_v1_ocr_post)

## 调用方式 

-   Base URL：`https://api.maisi-ai.com`
-   鉴权：`Authorization: Bearer <your-api-key>`
-   Endpoint：`POST /ocr/v1/ocr`

## curl 示例 

bash

```
curl --request POST \
  --url https://api.maisi-ai.com/ocr/v1/ocr \
  --header 'Authorization: Bearer <your-api-key>' \
  --header 'Content-Type: application/json' \
  --data '{
    "model": "mistral-ocr-latest",
    "document": {
      "type": "document_url",
      "document_url": "https://assets.anthropic.com/m/1cd9d098ac3e6467/original/Claude-3-Model-Card-October-Addendum.pdf"
    },
    "include_image_base64": true
  }'
```