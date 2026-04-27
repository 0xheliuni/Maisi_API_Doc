# Images 

Maisi 支持通过 OpenAI 兼容的 Images 接口进行图像相关调用。

-   Base URL：`https://maisi-ai.com/v1`
-   鉴权：`Authorization: Bearer <your-api-key>`

## 生成图像（generations） 

-   Endpoint：`POST /v1/images/generations`

bash

```
curl --request POST \
  --url https://maisi-ai.com/v1/images/generations \
  --header 'Content-Type: application/json' \
  --header 'Authorization: Bearer <your-api-key>' \
  --data '{
    "model": "dall-e-3",
    "prompt": "a white siamese cat",
    "n": 1,
    "size": "1024x1024"
  }'
```

## 编辑图像（edits） 

-   Endpoint：`POST /v1/images/edits`

> 该接口通常需要 multipart/form-data（例如上传图像/蒙版）。具体字段请以 API 开发文档为准。

## 图像变体（variations） 

-   Endpoint：`POST /v1/images/variations`

> 同样通常需要 multipart/form-data。具体字段请以 API 开发文档为准。