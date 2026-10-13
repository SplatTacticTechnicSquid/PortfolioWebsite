<script setup lang="ts">
useSeoMeta({ title: 'Smartphone Parking Log Application', description: 'A smartphone application for recording parking activity.' })
</script>

<template>
  <article class="site-container legacy-project">
    <NuxtLink to="/projects" class="button-link">← All projects</NuxtLink>
    <p class="eyebrow">FROM THE ARCHIVE / EARLIER WORK</p>
    <h1>Smartphone Parking Log Application</h1>
    <p class="legacy-summary">A smartphone application for recording parking activity.</p>
    <div class="legacy-tools"><span class="tag">Mobile application</span></div>
    <p class="legacy-note">An earlier project from my portfolio. Explore my recent work in engineering automation, AI applications, and enterprise software.</p>
    <NuxtLink to="/projects" class="button button-primary">Explore recent projects <span aria-hidden="true">↗</span></NuxtLink>
  </article>
</template>

<style scoped>
.legacy-project { padding-top: 55px; padding-bottom: 90px; min-height: 70vh; }.legacy-project > .eyebrow { margin-top: 60px; }.legacy-project h1 { max-width: 850px; margin: 20px 0; font-size: clamp(2.6rem, 5vw, 4.5rem); line-height: 1.06; letter-spacing: -.055em; font-weight: 500; }.legacy-summary { max-width: 690px; font-size: 18px; line-height: 1.8; color: var(--muted); }.legacy-tools { display: flex; flex-wrap: wrap; gap: 8px; margin: 27px 0 45px; }.legacy-note { max-width: 590px; color: var(--muted); font-size: 14px; line-height: 1.8; margin-bottom: 24px; }
</style>
