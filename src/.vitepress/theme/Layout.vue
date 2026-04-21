<script setup lang="ts">
import DefaultTheme from 'vitepress/theme'
import { onMounted, watch, nextTick } from 'vue'
import { useRoute, useData } from 'vitepress'
import HeroUnderline from './HeroUnderline.vue'

const { Layout } = DefaultTheme
const route = useRoute()
const { frontmatter } = useData()

/**
 * Sidebar icon mapping: link path → { icon, color? }
 * Icons sourced from docs.uniapi.ai
 */
const iconMap: Record<string, { icon: string; color?: string }> = {
  // 关于
  '/docs/about/introduction': { icon: 'heroicons-solid:megaphone', color: '#20c997' },
  '/docs/about/base_api': { icon: 'humbleicons:url', color: '#ff9800' },
  '/docs/about/billing_instructions': { icon: 'twemoji:money-bag' },
  '/docs/about/group': { icon: 'formkit:group', color: '#3498db' },

  // 使用
  '/docs/use/quickstart': { icon: 'heroicons:rocket-launch-solid', color: '#20c997' },
  '/docs/use/token': { icon: 'fxemoji:key' },
  '/docs/use/api': { icon: 'gravity-ui:abbr-api', color: '#e74c3c' },
  '/docs/use/api/openai_compatible': { icon: 'carbon:api', color: '#1abc9c' },
  '/docs/use/api/chat_completions': { icon: 'carbon:chat', color: '#1abc9c' },
  '/docs/use/api/responses': { icon: 'carbon:result', color: '#1abc9c' },
  '/docs/use/api/images': { icon: 'carbon:image', color: '#1abc9c' },
  '/docs/use/api/audio': { icon: 'carbon:volume-up', color: '#1abc9c' },
  '/docs/use/api/claude': { icon: 'logos:claude-icon' },
  '/docs/use/api/gemini': { icon: 'logos:google-icon' },
  '/docs/use/api/ocr': { icon: 'carbon:scan', color: '#2ecc71' },
  '/docs/use/api/midjourney': { icon: 'carbon:crop', color: '#2ecc71' },
  '/docs/use/api/suno': { icon: 'carbon:music', color: '#2ecc71' },
  '/docs/use/api/falai': { icon: 'carbon:cloud', color: '#2ecc71' },
  '/docs/use/api/kling': { icon: 'carbon:ai', color: '#2ecc71' },
  '/docs/use/api/replicate': { icon: 'carbon:assembly', color: '#2ecc71' },
  '/docs/use/api/bfl': { icon: 'carbon:box', color: '#2ecc71' },
  '/docs/use/openai_sdk': { icon: 'streamline-logos:openai-logo-solid' },
  '/docs/use/claude_sdk': { icon: 'logos:claude-icon' },
  '/docs/use/gemini_sdk': { icon: 'logos:google-icon' },
  '/docs/use/special_usage': { icon: 'icon-park-twotone:api', color: '#2ecc71' },
  '/docs/use/reasoning': { icon: 'mdi:thinking', color: '#9b59b6' },
  '/docs/use/chat': { icon: 'carbon:api', color: '#1abc9c' },

  // 其他
  '/docs/error': { icon: 'carbon:warning', color: '#e74c3c' },

  // 集成教程
  '/integration/': { icon: 'carbon:grid', color: '#3498db' },
  '/integration/cursor': { icon: 'carbon:code', color: '#3498db' },
  '/integration/claude_code': { icon: 'logos:claude-icon' },
  '/integration/continue': { icon: 'carbon:continue', color: '#3498db' },
  '/integration/openai_codex': { icon: 'streamline-logos:openai-logo-solid' },
  '/integration/gemini_cli': { icon: 'logos:google-icon' },
  '/integration/open_code': { icon: 'carbon:terminal', color: '#3498db' },
  '/integration/cherry_studio': { icon: 'carbon:application', color: '#e91e63' },
  '/integration/lobe_chat': { icon: 'carbon:chat-launch', color: '#3498db' },
  '/integration/next_chat': { icon: 'carbon:chat', color: '#3498db' },
  '/integration/chatbox': { icon: 'carbon:chat-bot', color: '#3498db' },
  '/integration/chatwise': { icon: 'carbon:machine-learning', color: '#3498db' },
  '/integration/utools': { icon: 'carbon:tools', color: '#3498db' },
  '/integration/chatgpt-web-midjourney-proxy': { icon: 'carbon:image-search', color: '#2ecc71' },
}

function injectIcons() {
  const sidebarLinks = document.querySelectorAll('.VPSidebarItem .link')

  sidebarLinks.forEach((link) => {
    const anchor = link as HTMLAnchorElement
    // Skip if icon already injected
    if (anchor.querySelector('iconify-icon')) return

    const textEl = anchor.querySelector('.text')
    if (!textEl) return

    // Extract path from href
    let href = anchor.getAttribute('href') || ''
    // Remove .html extension and trailing slashes for matching
    href = href.replace(/\.html$/, '').replace(/\/$/, '') || '/'
    // Handle /integration/ specially
    if (href === '/integration') href = '/integration/'

    const iconConfig = iconMap[href]
    if (!iconConfig) return

    const iconEl = document.createElement('iconify-icon')
    iconEl.setAttribute('icon', iconConfig.icon)
    iconEl.classList.add('sidebar-icon')
    if (iconConfig.color) {
      iconEl.style.color = iconConfig.color
    }

    textEl.prepend(iconEl)
  })
}

onMounted(() => {
  nextTick(() => {
    setTimeout(injectIcons, 100)
  })
})

watch(() => route.path, () => {
  nextTick(() => {
    setTimeout(injectIcons, 100)
  })
})
</script>

<template>
  <Layout>
    <template #home-hero-info>
      <h1 class="name">
        <span class="clip">{{ frontmatter.hero?.name }}</span>
      </h1>
      <p class="text">
        <HeroUnderline>{{ frontmatter.hero?.text }}</HeroUnderline>
      </p>
      <p class="tagline">{{ frontmatter.hero?.tagline }}</p>
    </template>
  </Layout>
</template>

<style>
.VPHero .main > .name {
  display: flex;
  align-items: center;
  gap: 16px;
}

.VPHero .main > .name,
.VPHero .main > .text {
  width: fit-content;
  max-width: 392px;
  letter-spacing: -0.4px;
  line-height: 40px;
  font-size: 32px;
  font-weight: 700;
  white-space: pre-wrap;
}

.VPHero .main > .name {
  color: var(--vp-home-hero-name-color);
}

.VPHero .main > .name .clip {
  background: var(--vp-home-hero-name-background);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: var(--vp-home-hero-name-color);
}

.VPHero .main > .tagline {
  padding-top: 8px;
  max-width: 392px;
  line-height: 28px;
  font-size: 18px;
  font-weight: 500;
  white-space: pre-wrap;
  color: var(--vp-c-text-2);
}

@media (min-width: 640px) {
  .VPHero .main > .name,
  .VPHero .main > .text {
    max-width: 576px;
    line-height: 56px;
    font-size: 48px;
  }

  .VPHero .main > .tagline {
    padding-top: 12px;
    max-width: 576px;
    line-height: 32px;
    font-size: 20px;
  }
}

@media (min-width: 960px) {
  .VPHero .main > .name,
  .VPHero .main > .text {
    line-height: 64px;
    font-size: 56px;
  }

  .VPHero .main > .tagline {
    line-height: 36px;
    font-size: 24px;
  }
}
</style>
