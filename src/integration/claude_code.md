# Claude Code 

::: warning ⚠️ 注意
如果遇到了Claude code报错：invalid beta flag，请确认你是否设置了环境变量`CLAUDE_CODE_DISABLE_EXPERIMENTAL_BETAS`，如果没有，请按照以下步骤进行设置。
:::

1.  安装

shell

```

npm install -g @anthropic-ai/claude-code
```

2.  配置

打开配置文件：

shell

```

vim ~/.claude/settings.json
```

填写以下内容：

json

```
{
  "env": {
    "ANTHROPIC_BASE_URL": "https://maisi-ai.com",
    "ANTHROPIC_AUTH_TOKEN": "sk-xxxx",
    "CLAUDE_CODE_DISABLE_EXPERIMENTAL_BETAS": "1",
    "CLAUDE_CODE_ATTRIBUTION_HEADER": "0"
  }
}
```

3.  使用

shell

```
# 交互式使用
claude

# 直接询问
claude "What is the capital of France?"
```