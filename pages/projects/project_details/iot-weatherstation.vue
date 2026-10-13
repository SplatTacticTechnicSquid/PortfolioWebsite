<script setup lang="ts">
useSeoMeta({ title: 'Arduino Weather Station', description: 'An Internet of Things weather-monitoring system built with Arduino UNO, DHT22, and MQ-2 sensors.' })
</script>

<template>
  <article class="site-container legacy-project">
    <NuxtLink to="/projects" class="button-link">← All projects</NuxtLink>
    <p class="eyebrow">FROM THE ARCHIVE / EARLIER WORK</p>
    <h1>Arduino Weather Station</h1>
    <p class="legacy-summary">An Internet of Things weather-monitoring system built with Arduino UNO, DHT22, and MQ-2 sensors.</p>
    <div class="legacy-tools"><span class="tag">Arduino UNO</span><span class="tag">DHT22</span><span class="tag">MQ-2</span></div>
    <p class="legacy-note">An earlier project from my portfolio. Explore my recent work in engineering automation, AI applications, and enterprise software.</p>
    <NuxtLink to="/projects" class="button button-primary">Explore recent projects <span aria-hidden="true">↗</span></NuxtLink>
  </article>
</template>

<style scoped>
.legacy-project { padding-top: 55px; padding-bottom: 90px; min-height: 70vh; }.legacy-project > .eyebrow { margin-top: 60px; }.legacy-project h1 { max-width: 850px; margin: 20px 0; font-size: clamp(2.6rem, 5vw, 4.5rem); line-height: 1.06; letter-spacing: -.055em; font-weight: 500; }.legacy-summary { max-width: 690px; font-size: 18px; line-height: 1.8; color: var(--muted); }.legacy-tools { display: flex; flex-wrap: wrap; gap: 8px; margin: 27px 0 45px; }.legacy-note { max-width: 590px; color: var(--muted); font-size: 14px; line-height: 1.8; margin-bottom: 24px; }
</style>
