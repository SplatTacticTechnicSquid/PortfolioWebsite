<script setup lang="ts">
import type { Project } from '~/data/portfolio'
defineProps<{ project: Project }>()
</script>

<template>
  <article class="project-card">
    <NuxtLink :to="`/projects/project_details/${project.id}`" class="project-card-link">
      <div class="project-card-art">
        <ProjectVisual :variant="project.visual" :label="`${project.title} — illustrative workflow`" />
        <span class="project-card-number">{{ project.number }}</span>
        <span class="project-card-open" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none"><path d="M6 18 18 6M6 6h12v12" stroke="currentColor" stroke-width="1.5" /></svg></span>
      </div>
      <div class="project-card-body">
        <div class="project-card-meta"><span>{{ project.categoryLabel }}</span><span>{{ project.organization }}</span></div>
        <h3>{{ project.title }}</h3>
        <p>{{ project.summary }}</p>
        <div class="project-card-stack"><span v-for="technology in project.stack.slice(0, 3)" :key="technology" class="tag">{{ technology }}</span></div>
        <span class="project-card-read">Explore the project <span aria-hidden="true">↗</span></span>
      </div>
    </NuxtLink>
  </article>
</template>

<style scoped>
.project-card { min-width: 0; }
.project-card-link { display: block; color: inherit; text-decoration: none; }
.project-card-art { position: relative; overflow: hidden; border: 1px solid var(--border, #d8ded3); border-radius: 8px; transition: border-color .2s ease; }
.project-card-art :deep(.project-visual) { transition: transform .35s ease; }
.project-card-link:hover .project-card-art :deep(.project-visual) { transform: scale(1.025); }
.project-card-link:hover .project-card-art { border-color: #849980; }
.project-card-number { position: absolute; top: 15px; left: 18px; font-family: monospace; font-size: 11px; color: #64755e; }
.project-card-open { position: absolute; right: 16px; bottom: 16px; display: grid; place-items: center; width: 33px; height: 33px; border: 1px solid #c3cebe; border-radius: 50%; color: #2d5d46; background: #f4f3ed; transition: background .2s, color .2s; }
.project-card-open svg { width: 15px; }
.project-card-link:hover .project-card-open { background: #2d5d46; color: #fff; }
.project-card-body { padding: 22px 0 0; }
.project-card-meta { display: flex; flex-wrap: wrap; align-items: center; gap: 8px 15px; color: var(--muted); font-size: 10px; letter-spacing: .1em; text-transform: uppercase; }
.project-card-meta span:first-child { color: #2d5d46; }
.project-card-meta span + span::before { content: '/'; margin-right: 15px; color: #abb4a6; }
.project-card h3 { margin: 12px 0 9px; font-size: clamp(1.3rem, 2.2vw, 1.65rem); line-height: 1.2; font-weight: 500; letter-spacing: -.035em; }
.project-card p { margin: 0; max-width: 48ch; color: var(--muted); font-size: 14px; line-height: 1.75; }
.project-card-stack { display: flex; flex-wrap: wrap; gap: 7px; margin: 18px 0; }
.project-card-read { font-size: 12px; font-weight: 600; color: #2d5d46; }
.project-card-read span { display: inline-block; margin-left: 7px; transition: transform .2s; }
.project-card-link:hover .project-card-read span { transform: translate(2px, -2px); }
@media (prefers-reduced-motion: reduce) { .project-card-art :deep(.project-visual), .project-card-open, .project-card-read span { transition: none; } }
</style>
