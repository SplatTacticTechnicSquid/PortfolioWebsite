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
  <article class="site-container project-detail">
    <NuxtLink to="/projects" class="project-back"><span aria-hidden="true">←</span> All projects</NuxtLink>
    <div class="project-overview">
      <header class="project-header">
        <p class="eyebrow">{{ project.categoryLabel }}</p>
        <h1>{{ project.title }}</h1>
        <p class="project-intro">{{ project.summary }}</p>
        <dl class="project-facts">
          <div><dt>Company</dt><dd>{{ project.organization }}</dd></div>
          <div><dt>My role</dt><dd>{{ project.role }}</dd></div>
          <div><dt>Employment period</dt><dd>{{ project.period }}</dd></div>
        </dl>
        <div class="project-stack" aria-label="Technologies used"><span v-for="technology in project.stack" :key="technology" class="tag">{{ technology }}</span></div>
      </header>
      <figure class="project-figure">
        <ProjectVisual :variant="project.visual" :label="`${project.title} — workflow illustration, not an internal application screenshot`" />
        <figcaption>Workflow illustration · Internal application</figcaption>
      </figure>
    </div>
    <section class="project-result">
      <div class="result-icon" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none"><path d="m5 12 4.5 4.5L19 7" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" /></svg></div>
      <div><h2>Result</h2><p>{{ project.outcome }}</p></div>
    </section>
    <div class="project-details-grid">
      <section class="detail-panel"><span class="detail-number" aria-hidden="true">01 /</span><h2>Challenge</h2><p>{{ project.challenge }}</p></section>
      <section class="detail-panel contribution"><span class="detail-number" aria-hidden="true">02 /</span><h2>My contribution</h2><ul><li v-for="item in project.approach" :key="item">{{ item }}</li></ul></section>
    </div>
    <div v-if="project.highlights.length" class="project-highlights" aria-label="Project highlights"><span v-for="highlight in project.highlights" :key="highlight"><svg aria-hidden="true" viewBox="0 0 16 16"><path d="m3 8 3.5 3.5L13 5" fill="none" stroke="currentColor" stroke-width="1.5" /></svg>{{ highlight }}</span></div>
    <p class="project-note">This overview describes my contribution. Source code and internal application data remain with the respective organization.</p>
    <nav class="project-navigation" aria-label="Project navigation">
      <NuxtLink to="/projects" class="button button-secondary"><span aria-hidden="true">←</span> All projects</NuxtLink>
      <NuxtLink :to="`/projects/project_details/${nextProject.id}`" class="next-project"><span><small>Next project</small>{{ nextProject.title }}</span><span aria-hidden="true">→</span></NuxtLink>
    </nav>
  </article>
</template>

<style scoped>
.project-detail { padding-top: 32px; padding-bottom: 60px; }
.project-back { display: inline-flex; align-items: center; gap: 9px; color: var(--muted); text-decoration: none; font-size: 12px; }
.project-back:hover { color: var(--green); }
.project-overview { display: grid; grid-template-columns: 1fr 1.1fr; align-items: center; gap: 44px; padding: 36px 0; }
h1 { font-size: clamp(2.1rem, 3.8vw, 3.5rem); line-height: 1.1; letter-spacing: -.045em; font-weight: 700; margin: 16px 0; }
.project-intro { max-width: 54ch; color: var(--muted); font-size: 14px; line-height: 1.8; margin: 0; }
.project-facts { display: grid; gap: 10px; margin: 23px 0 20px; }
.project-facts > div { display: grid; grid-template-columns: 118px minmax(0, 1fr); gap: 10px; }
.project-facts dt { font-size: 11px; color: var(--muted); line-height: 1.7; }
.project-facts dd { margin: 0; font-size: 12px; font-weight: 500; line-height: 1.7; }
.project-stack { display: flex; flex-wrap: wrap; gap: 7px; }
.project-stack .tag { font-size: 10px; padding: 6px 9px; }
.project-figure { margin: 0; min-width: 0; }
.project-figure :deep(.project-visual) { border: 1px solid var(--line); border-radius: 12px; }
.project-figure figcaption { margin-top: 12px; font-size: 10px; color: var(--muted); text-align: right; line-height: 1.6; }
.project-result { display: flex; align-items: start; gap: 18px; padding: 26px; background: linear-gradient(115deg, #142d27, #101e2a); border: 1px solid #2b5342; border-radius: 12px; }
.result-icon { flex-shrink: 0; display: grid; place-items: center; width: 36px; height: 36px; border: 1px solid #315b46; border-radius: 9px; color: var(--green); background: #153a2c; }
.result-icon svg { width: 23px; }
.project-result h2 { margin: 0 0 9px; color: var(--green); font-size: 12px; font-weight: 600; }
.project-result p { max-width: 84ch; margin: 0; font-size: clamp(1rem, 1.6vw, 1.2rem); line-height: 1.7; font-weight: 500; }
.project-details-grid { display: grid; grid-template-columns: .85fr 1.15fr; gap: 24px; margin-top: 24px; }
.detail-panel { padding: 27px; border: 1px solid var(--line); border-radius: 12px; background: var(--surface); }
.detail-number { font-family: ui-monospace, monospace; font-size: 11px; color: var(--green); }
.detail-panel h2 { margin: 13px 0; font-size: 21px; letter-spacing: -.025em; font-weight: 650; }
.detail-panel p, .detail-panel li { color: var(--muted); font-size: 13px; line-height: 1.9; }
.detail-panel p { margin: 0; }
.detail-panel ul { list-style: none; padding: 0; margin: 0; }
.detail-panel li { position: relative; padding-left: 18px; margin-top: 10px; }
.detail-panel li::before { position: absolute; content: ''; left: 0; top: .8em; width: 5px; height: 5px; border-radius: 1px; background: var(--green); }
.project-highlights { display: flex; flex-wrap: wrap; gap: 18px 25px; margin-top: 24px; }
.project-highlights > span { display: flex; align-items: start; gap: 8px; font-size: 11px; line-height: 1.6; color: var(--muted); }
.project-highlights svg { width: 15px; flex-shrink: 0; margin-top: 1px; color: var(--green); }
.project-note { max-width: 760px; margin: 22px 0 0; color: var(--muted); font-size: 11px; line-height: 1.8; }
.project-navigation { display: flex; justify-content: space-between; align-items: center; gap: 25px; border-top: 1px solid var(--line); padding-top: 28px; margin-top: 36px; }
.next-project { display: flex; align-items: center; gap: 22px; max-width: 62%; text-decoration: none; color: var(--ink); font-size: 15px; font-weight: 600; line-height: 1.5; }
.next-project small { display: block; margin-bottom: 4px; font-size: 10px; font-weight: 400; color: var(--muted); }
.next-project > span:last-child { font-size: 22px; color: var(--green); }
.next-project:hover { color: var(--green); }
@media (max-width: 900px) { .project-overview { gap: 28px; grid-template-columns: 1fr 1fr; }h1 { font-size: 2.3rem; }.project-facts > div { grid-template-columns: 104px minmax(0, 1fr); }.project-details-grid { grid-template-columns: 1fr 1.2fr; gap: 18px; }.detail-panel { padding: 23px; } }
@media (max-width: 720px) { .project-overview { grid-template-columns: 1fr; padding-top: 28px; gap: 25px; }h1 { font-size: clamp(2.1rem, 7vw, 3rem); max-width: 600px; }.project-figure { max-width: 600px; width: 100%; }.project-details-grid { grid-template-columns: 1fr; }.project-result { padding: 22px; gap: 13px; }.project-detail { padding-bottom: 44px; }.project-navigation { align-items: start; }.next-project { font-size: 13px; gap: 12px; }.project-navigation .button { font-size: 11px; padding: 12px; } }
@media (max-width: 400px) { .project-navigation { flex-direction: column-reverse; gap: 20px; }.next-project { max-width: 100%; } }
</style>