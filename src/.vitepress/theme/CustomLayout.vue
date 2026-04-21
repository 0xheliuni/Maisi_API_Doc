<script setup lang="ts">
import DefaultTheme from 'vitepress/theme'
import { useData } from 'vitepress'
import HeroUnderline from './HeroUnderline.vue'

const { Layout } = DefaultTheme
const { frontmatter } = useData()
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
/* Match VPHero heading structure */
.VPHero .main > .name {
  display: flex;
  flex-direction: column;
  align-items: center;
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

.VPHero .main > .text {
  width: fit-content;
  max-width: 392px;
  letter-spacing: -0.4px;
  line-height: 40px;
  font-size: 32px;
  font-weight: 700;
  white-space: pre-wrap;
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
