<script setup lang="ts">
useSeoMeta({ title: 'Arduino Weather Station', description: 'An Internet of Things weather-monitoring system built with Arduino UNO, DHT22, and MQ-2 sensors.' })
</script>

<template>
  <article class="site-container legacy-project">
    <NuxtLink to="/projects" class="button-link">← All projects</NuxtLink>
    <p class="eyebrow">PERSONAL PROJECT / EARLIER WORK</p>
    <h1>Arduino Weather Station</h1>
    <p class="legacy-summary">An Internet of Things weather-monitoring system built with Arduino UNO, DHT22, and MQ-2 sensors.</p>
    <div class="legacy-tools"><span class="tag">Arduino UNO</span><span class="tag">DHT22</span><span class="tag">MQ-2</span></div>
    <p class="legacy-note">See my current work in engineering automation, AI applications, and enterprise software at LG Electronics R&D and TelkomSigma.</p>
    <NuxtLink to="/projects" class="button button-primary">View current projects <span aria-hidden="true">↗</span></NuxtLink>
  </article>
</template>

<style scoped>
.legacy-project { padding-top: 35px; padding-bottom: 64px; min-height: 70vh; }
.legacy-project > .eyebrow { margin-top: 38px; color: var(--green); }
.legacy-project h1 { max-width: 850px; margin: 17px 0; font-size: clamp(2.2rem, 4.5vw, 3.8rem); line-height: 1.12; letter-spacing: -.04em; font-weight: 700; }
.legacy-summary { max-width: 690px; font-size: 16px; line-height: 1.8; color: var(--muted); }
.legacy-tools { display: flex; flex-wrap: wrap; gap: 8px; margin: 23px 0 30px; }
.legacy-note { max-width: 690px; padding: 22px; border: 1px solid var(--line); border-radius: 10px; background: var(--surface); color: var(--muted); font-size: 13px; line-height: 1.8; margin-bottom: 24px; }
</style>
