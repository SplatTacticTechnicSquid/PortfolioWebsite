<script setup lang="ts">
import type { Project } from '~/data/portfolio'
defineProps<{ project: Project }>()
</script>

<template>
  <article class="project-card">
    <NuxtLink :to="`/projects/project_details/${project.id}`" class="project-card-link">
      <div class="project-card-art">
        <ProjectVisual :variant="project.visual" :label="`${project.title} — workflow illustration`" />
        <span class="project-card-category">{{ project.categoryLabel }}</span>
        <span class="project-card-number" aria-hidden="true">{{ project.number }}</span>
      </div>
      <div class="project-card-body">
        <p class="project-card-company"><span aria-hidden="true"></span>{{ project.organization }}</p>
        <h3>{{ project.title }}</h3>
        <p class="project-card-description">{{ project.summary }}</p>
        <div class="project-card-stack"><span v-for="technology in project.stack.slice(0, 4)" :key="technology" class="tag">{{ technology }}</span></div>
        <div class="project-card-footer"><span>{{ project.role }}</span><span class="project-card-read">View project <svg aria-hidden="true" viewBox="0 0 20 20" fill="none"><path d="M4 10h12m-5-5 5 5-5 5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" /></svg></span></div>
      </div>
    </NuxtLink>
  </article>
</template>

<style scoped>
.project-card { min-width: 0; height: 100%; border: 1px solid var(--line); border-radius: 16px; background: var(--surface); overflow: hidden; transition: border-color .2s ease, transform .2s ease, box-shadow .2s ease; }
.project-card:has(.project-card-link:hover), .project-card:has(.project-card-link:focus-visible) { border-color: #49e39b70; transform: translateY(-4px); box-shadow: 0 16px 40px #0003; }
.project-card-link { display: flex; flex-direction: column; height: 100%; color: inherit; text-decoration: none; }
.project-card-link:focus-visible { outline-offset: -3px; border-radius: 15px; }
.project-card-art { position: relative; overflow: hidden; border-bottom: 1px solid var(--line); }
.project-card-art :deep(.project-visual) { transition: transform .35s ease; }
.project-card-link:hover .project-card-art :deep(.project-visual) { transform: scale(1.025); }
.project-card-category { position: absolute; top: 14px; left: 16px; padding: 5px 9px; border: 1px solid #294235; border-radius: 5px; background: #0b1b17ed; color: var(--green); font-size: 9px; line-height: 1.3; letter-spacing: .06em; text-transform: uppercase; }
.project-card-number { position: absolute; top: 16px; right: 18px; color: #778ba2; font-family: ui-monospace, monospace; font-size: 11px; }
.project-card-body { display: flex; flex: 1; flex-direction: column; padding: 24px; }
.project-card-company { display: flex; align-items: center; gap: 8px; margin: 0; color: var(--muted); font-size: 11px; font-weight: 500; }
.project-card-company > span { width: 5px; height: 5px; border-radius: 50%; background: var(--green); }
.project-card h3 { margin: 10px 0; font-size: clamp(1.2rem, 2.2vw, 1.5rem); line-height: 1.3; font-weight: 650; letter-spacing: -.025em; }
.project-card-description { margin: 0; max-width: 52ch; color: var(--muted); font-size: 13px; line-height: 1.75; }
.project-card-stack { display: flex; flex-wrap: wrap; gap: 6px; padding: 18px 0 22px; margin-top: auto; }
.project-card-stack .tag { padding: 5px 8px; font-size: 10px; }
.project-card-footer { display: flex; flex-wrap: wrap; align-items: center; justify-content: space-between; gap: 12px; padding-top: 16px; border-top: 1px solid var(--line); }
.project-card-footer > span:first-child { color: var(--muted); font-size: 10px; }
.project-card-read { display: inline-flex; align-items: center; gap: 8px; font-size: 12px; font-weight: 600; color: var(--green); }
.project-card-read svg { width: 17px; transition: transform .2s ease; }
.project-card-link:hover .project-card-read svg { transform: translateX(3px); }
@media (max-width: 560px) { .project-card-body { padding: 20px; } }
@media (prefers-reduced-motion: reduce) { .project-card, .project-card-art :deep(.project-visual), .project-card-read svg { transition: none; }.project-card:has(.project-card-link:hover), .project-card:has(.project-card-link:focus-visible), .project-card-link:hover .project-card-art :deep(.project-visual) { transform: none; } }
</style>