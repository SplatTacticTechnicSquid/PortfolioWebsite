<script setup lang="ts">
useSeoMeta({ title: 'Smartphone Parking Log Application', description: 'A smartphone application for recording parking activity.' })
</script>

<template>
  <article class="site-container legacy-project">
    <NuxtLink to="/projects" class="button-link">← All projects</NuxtLink>
    <p class="eyebrow">PERSONAL PROJECT / EARLIER WORK</p>
    <h1>Smartphone Parking Log Application</h1>
    <p class="legacy-summary">A smartphone application for recording parking activity.</p>
    <div class="legacy-tools"><span class="tag">Mobile application</span></div>
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
