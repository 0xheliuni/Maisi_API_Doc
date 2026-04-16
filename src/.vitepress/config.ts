import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Maisi',
  description: 'Maisi API 文档',
  lang: 'zh-CN',
  cleanUrls: false,

  head: [
    ['link', { rel: 'icon', type: 'image/svg+xml', href: '/logo.svg' }],
  ],

  themeConfig: {
    logo: '/logo.svg',
    siteTitle: 'Maisi',

    nav: [
      { text: '使用文档', link: '/docs/about/introduction' },
      { text: '集成教程', link: '/integration/' },
      {
        text: 'API 文档',
        link: 'https://api-docs.maisi-ai.com/',
        target: '_blank',
      },
      { text: '官网', link: 'https://maisi-ai.com/', target: '_blank' },
    ],

    sidebar: {
      '/docs/': [
        {
          text: '关于',
          items: [
            { text: '简介', link: '/docs/about/introduction' },
            { text: 'API 地址', link: '/docs/about/base_api' },
            { text: '计费说明', link: '/docs/about/billing_instructions' },
            { text: '分组说明', link: '/docs/about/group' },
          ],
        },
        {
          text: '使用',
          items: [
            { text: '快速开始', link: '/docs/use/quickstart' },
            { text: '令牌说明', link: '/docs/use/token' },
            { text: 'API 调用', link: '/docs/use/api' },
            { text: 'OpenAI 兼容接口', link: '/docs/use/api/openai_compatible' },
            { text: 'Chat Completions', link: '/docs/use/api/chat_completions' },
            { text: 'Responses', link: '/docs/use/api/responses' },
            { text: 'Images', link: '/docs/use/api/images' },
            { text: 'Audio', link: '/docs/use/api/audio' },
            { text: 'Claude 原生接口', link: '/docs/use/api/claude' },
            { text: 'Gemini 原生接口', link: '/docs/use/api/gemini' },
            { text: 'OCR', link: '/docs/use/api/ocr' },
            { text: 'Midjourney', link: '/docs/use/api/midjourney' },
            { text: 'Suno', link: '/docs/use/api/suno' },
            { text: 'FalAI', link: '/docs/use/api/falai' },
            { text: '可灵 (Kling)', link: '/docs/use/api/kling' },
            { text: 'Replicate', link: '/docs/use/api/replicate' },
            { text: 'BFL', link: '/docs/use/api/bfl' },
            { text: 'OpenAI SDK', link: '/docs/use/openai_sdk' },
            { text: 'Claude SDK', link: '/docs/use/claude_sdk' },
            { text: 'Gemini SDK', link: '/docs/use/gemini_sdk' },
            { text: '特殊用法', link: '/docs/use/special_usage' },
            { text: '推理模型', link: '/docs/use/reasoning' },
            { text: '对话补全', link: '/docs/use/chat' },
          ],
        },
        {
          text: '其他',
          items: [
            { text: '报错说明', link: '/docs/error' },
          ],
        },
      ],
      '/integration/': [
        {
          text: '集成教程',
          items: [
            { text: '概览', link: '/integration/' },
            { text: 'Cursor', link: '/integration/cursor' },
            { text: 'Claude Code', link: '/integration/claude_code' },
            { text: 'Continue', link: '/integration/continue' },
            { text: 'OpenAI Codex', link: '/integration/openai_codex' },
            { text: 'Gemini CLI', link: '/integration/gemini_cli' },
            { text: 'Open Code', link: '/integration/open_code' },
            { text: 'Cherry Studio', link: '/integration/cherry_studio' },
            { text: 'LobeChat', link: '/integration/lobe_chat' },
            { text: 'NextChat', link: '/integration/next_chat' },
            { text: 'Chatbox', link: '/integration/chatbox' },
            { text: 'ChatWise', link: '/integration/chatwise' },
            { text: 'uTools', link: '/integration/utools' },
            { text: 'ChatGPT-Web-Midjourney', link: '/integration/chatgpt-web-midjourney-proxy' },
          ],
        },
      ],
    },

    socialLinks: [],

    search: {
      provider: 'local',
    },

    outline: {
      label: '页面导航',
      level: [2, 3],
    },

    docFooter: {
      prev: '上一页',
      next: '下一页',
    },

    lastUpdated: {
      text: '最后更新于',
    },

    footer: {
      message: 'Maisi - AI All In One',
      copyright: `Copyright &copy; ${new Date().getFullYear()} Maisi`,
    },
  },
})
