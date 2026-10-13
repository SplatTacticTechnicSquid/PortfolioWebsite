<script setup lang="ts">
import { projects } from '~/data/portfolio'

definePageMeta({ key: route => route.fullPath })
const route = useRoute()
const project = projects.find(item => item.id === route.params.id)
if (!project) throw createError({ statusCode: 404, statusMessage: 'Project not found', fatal: true })
const nextProject = projects[(projects.findIndex(item => item.id === project.id) + 1) % projects.length]!
useSeoMeta({ title: project.title, description: project.summary })
</script>

<template>
  <article class="site-container case-study">
    <NuxtLink to="/projects" class="case-back"><span aria-hidden="true">←</span> All projects</NuxtLink>
    <header class="case-header">
      <p class="eyebrow">{{ project.categoryLabel }} <span>/</span> {{ project.organization }}</p>
      <h1>{{ project.title }}</h1><p class="case-intro">{{ project.summary }}</p>
      <div class="case-facts">
        <div><span class="fact-label">CONTEXT</span><p>{{ project.organization }}</p></div>
        <div><span class="fact-label">MY CONTRIBUTION</span><p>{{ project.role }}</p></div>
        <div><span class="fact-label">EMPLOYMENT PERIOD</span><p>{{ project.period }}</p></div>
      </div>
    </header>
    <figure class="case-figure">
      <ProjectVisual :variant="project.visual" :label="`${project.title} — illustrative workflow, not an internal application screenshot`" />
      <figcaption>Conceptual workflow illustration. Not a screenshot of the internal application.</figcaption>
    </figure>
    <div class="case-content">
      <aside class="case-stack"><p class="eyebrow">BUILT WITH</p><div><span v-for="technology in project.stack" :key="technology" class="tag">{{ technology }}</span></div></aside>
      <div class="case-narrative">
        <section><p class="eyebrow"><span>01</span> THE CHALLENGE</p><h2>A problem worth solving.</h2><p>{{ project.challenge }}</p></section>
        <section><p class="eyebrow"><span>02</span> MY APPROACH</p><h2>From requirements to working software.</h2><ul><li v-for="item in project.approach" :key="item">{{ item }}</li></ul></section>
        <section class="case-outcome"><p class="eyebrow"><span>03</span> THE OUTCOME</p><h2>What the work made possible.</h2><p>{{ project.outcome }}</p><div v-if="project.highlights.length" class="case-highlights"><span v-for="highlight in project.highlights" :key="highlight"><svg aria-hidden="true" viewBox="0 0 16 16"><path d="m3 8 3.5 3.5L13 5" fill="none" stroke="currentColor" stroke-width="1.5" /></svg>{{ highlight }}</span></div></section>
        <p class="case-note">This overview reflects my own contribution. Source code and internal application data remain with the respective organization.</p>
      </div>
    </div>
    <nav class="case-next section-rule" aria-label="Project navigation">
      <div><p class="eyebrow">CONTINUE EXPLORING</p><NuxtLink :to="`/projects/project_details/${nextProject.id}`"><span>{{ nextProject.title }}</span><span aria-hidden="true">↗</span></NuxtLink></div>
      <NuxtLink to="/projects" class="case-all">View all projects <span aria-hidden="true">→</span></NuxtLink>
    </nav>
  </article>
</template>

<style scoped>
.case-study { padding-top: 45px; padding-bottom: 70px; }.case-back { display: inline-flex; gap: 10px; color: var(--muted); text-decoration: none; font-size: 12px; }.case-back:hover { color: #2d5d46; }.case-header { padding-top: 48px; }.case-header > .eyebrow span { margin: 0 13px; color: #a9b2a0; }
h1 { max-width: 900px; font-size: clamp(2.6rem, 5.8vw, 5rem); line-height: 1.05; letter-spacing: -.065em; font-weight: 500; margin: 25px 0 22px; }.case-intro { max-width: 720px; color: var(--muted); font-size: clamp(1rem, 1.7vw, 1.16rem); line-height: 1.8; }
.case-facts { margin-top: 37px; display: grid; grid-template-columns: 1fr 1.4fr .8fr; gap: 30px; padding: 24px 0; border-top: 1px solid #d8ded3; }.fact-label { font-size: 9px; letter-spacing: .14em; color: var(--muted); }.case-facts p { margin: 9px 0 0; font-size: 13px; line-height: 1.6; }
.case-figure { margin: 15px 0 68px; }.case-figure :deep(.project-visual) { border: 1px solid #d8ded3; border-radius: 8px; }.case-figure :deep(svg) { max-height: 520px; }.case-figure figcaption { font-size: 11px; color: var(--muted); margin-top: 12px; text-align: right; }
.case-content { display: grid; grid-template-columns: 240px minmax(0, 1fr); gap: 65px; }.case-stack > div { display: flex; flex-wrap: wrap; gap: 8px; margin-top: 20px; }.case-stack { align-self: start; position: sticky; top: 110px; }
.case-narrative section { margin-bottom: 48px; }.case-narrative h2 { margin: 16px 0; font-size: clamp(1.6rem, 3vw, 2.2rem); letter-spacing: -.035em; font-weight: 500; line-height: 1.15; }.case-narrative p:not(.eyebrow), .case-narrative li { color: var(--muted); font-size: 15px; line-height: 1.9; }.case-narrative .eyebrow span { display: inline-block; font-family: monospace; color: #bf633c; margin-right: 12px; }.case-narrative ul { list-style: none; padding: 0; margin: 0; }.case-narrative li { position: relative; padding: 13px 0 13px 21px; border-bottom: 1px solid #d8ded3; }.case-narrative li::before { position: absolute; content: '↳'; left: 0; color: #77906a; }
.case-outcome { background: #e7ecdf; border: 1px solid #d8ded3; padding: 32px; border-radius: 6px; }.case-highlights { display: flex; flex-direction: column; gap: 11px; padding-top: 15px; margin-top: 22px; border-top: 1px solid #ccd5c3; }.case-highlights > span { display: flex; align-items: start; gap: 10px; font-size: 12px; line-height: 1.6; color: #2d5d46; }.case-highlights svg { width: 15px; flex-shrink: 0; margin-top: 2px; }.case-narrative .case-note { font-size: 11px !important; max-width: 550px; }
.case-next { display: flex; align-items: center; justify-content: space-between; gap: 30px; margin-top: 62px; padding-top: 35px; }.case-next > div { max-width: 75%; }.case-next > div > a { display: flex; gap: 28px; color: #182c25; text-decoration: none; font-size: clamp(1.5rem, 3vw, 2.6rem); line-height: 1.15; letter-spacing: -.04em; margin-top: 15px; }.case-next a:hover { color: #2d5d46; }.case-next > div > a > span:last-child { color: #2d5d46; }.case-all { flex-shrink: 0; color: #2d5d46; font-size: 12px; text-decoration: none; }.case-all span { margin-left: 8px; }
@media (max-width: 800px) { .case-content { grid-template-columns: 1fr; gap: 36px; }.case-stack { position: static; }.case-facts { grid-template-columns: 1fr 1fr; gap: 20px; }.case-figure { margin-bottom: 40px; }.case-header { padding-top: 36px; }.case-next { align-items: start; flex-direction: column; }.case-next > div { max-width: 100%; } }
@media (max-width: 480px) { .case-facts { grid-template-columns: 1fr; gap: 16px; }.case-outcome { padding: 24px; }.case-study { padding-top: 30px; }.case-figure figcaption { text-align: left; line-height: 1.6; } }
</style>
