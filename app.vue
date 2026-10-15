<template>
  <div class="site-shell">
    <CursorGlow />
    <a class="skip-link" href="#main-content">Skip to content</a>
    <Navbar />
    <NuxtLayout><NuxtPage /></NuxtLayout>
    <Footer />
  </div>
</template>

<script setup lang="ts">
useHead({
  htmlAttrs: { lang: 'en' },
  titleTemplate: (title) => title ? title + ' — Raditya Pratama' : 'Raditya Pratama — Developer & Engineer',
  meta: [{ name: 'theme-color', content: '#080f1a' }],
  link: [{ rel: 'icon', type: 'image/svg+xml', href: useRuntimeConfig().app.baseURL + 'favicon.svg' }],
});
useSeoMeta({
  description: 'Raditya Rifqi Pratama builds enterprise applications, AI-enabled interfaces, and engineering tools. Explore digital transformation work at LG Electronics and Telkomsigma.',
  ogSiteName: 'Raditya Pratama',
  ogType: 'website',
});
</script>
