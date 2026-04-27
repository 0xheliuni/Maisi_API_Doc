# Gemini CLI 

1.  安装

shell

```
npm install -g @google/gemini-cli
```

2.  配置

shell

```

vim ~/.env
```

填写以下内容：

env

```
GOOGLE_GEMINI_BASE_URL=https://maisi-ai.com/gemini
# 填写你的API密钥
GEMINI_API_KEY=sk-xxxx
# 设置默认模型
GEMINI_MODEL=gemini-2.5-flash
```

3.  使用

shell

```
gemini
```