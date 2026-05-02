# Continue 

打开插件，点击右上角齿轮，进入配置文件

![continue](/image/continue.webp)

models 是聊天模型，tabAutocompleteModel 是自动补齐模型

json

```
{
  "models": [
    {
      "model": "gpt-4o",
      "provider": "openai",
      "apiKey": "sk-xxxx",
      "apiBase": "https://api.maisi-ai.com/v1",
      "title": "GPT-4o OpenAI"
    }
  ],
  "tabAutocompleteModel": {
    "title": "GPT-4 OpenAI",
    "provider": "openai",
    "model": "gpt-4o",
    "apiKey": "sk-xxxx",
    "apiBase": "https://api.maisi-ai.com/v1"
  }
}
```