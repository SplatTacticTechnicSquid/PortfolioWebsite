<script setup lang="ts">
import { projects, type Project } from '~/data/portfolio'

useSeoMeta({ title: 'Projects', description: 'Raditya Pratama’s project showcase: engineering automation at LG Electronics, AI applications at TelkomSigma, enterprise platforms, and hardware integration.' })

const activeFilter = ref<'all' | Project['category']>('all')
const filters: { value: 'all' | Project['category']; label: string }[] = [
  { value: 'all', label: 'All projects' },
  { value: 'automation', label: 'Automation' },
  { value: 'ai', label: 'AI applications' },
  { value: 'enterprise', label: 'Enterprise' },
  { value: 'hardware', label: 'Hardware' },
]
const filteredProjects = computed(() => activeFilter.value === 'all' ? projects : projects.filter(project => project.category === activeFilter.value))
const countFor = (category: string) => category === 'all' ? projects.length : projects.filter(project => project.category === category).length
</script>

<template>
  <div class="site-container projects-page">
    <header class="projects-intro">
      <p class="eyebrow">SOFTWARE · AUTOMATION · HARDWARE</p>
      <h1>Project <span>showcase.</span></h1>
      <p>Applications I've built and contributed to at LG Electronics R&amp;D and TelkomSigma. Explore the work, my role, and the technology behind it.</p>
    </header>
    <section class="project-collection" aria-label="Project collection">
      <div class="project-filter-bar">
        <div class="project-filters" role="group" aria-label="Filter projects by category">
          <button v-for="filter in filters" :key="filter.value" type="button" :aria-pressed="activeFilter === filter.value" :class="{ selected: activeFilter === filter.value }" @click="activeFilter = filter.value">{{ filter.label }} <span>{{ countFor(filter.value) }}</span></button>
        </div>
        <p class="project-result-count" aria-live="polite" aria-atomic="true">{{ filteredProjects.length }} {{ filteredProjects.length === 1 ? 'project' : 'projects' }}</p>
      </div>
      <h2 class="sr-only">Project collection</h2>
      <div class="projects-grid"><ProjectCard v-for="project in filteredProjects" :key="project.id" :project="project" /></div>
      <div v-if="!filteredProjects.length" class="projects-empty"><h2>No projects in this category yet.</h2><button type="button" class="button button-secondary" @click="activeFilter = 'all'">View all projects</button></div>
    </section>
    <p class="project-disclosure">Project visuals are workflow illustrations. Summaries describe my contributions; internal code and application data remain private.</p>
    <section class="project-contact">
      <div><h2>Want to discuss my work?</h2><p>Get in touch or take a look at my experience.</p></div>
      <div class="project-contact-actions"><NuxtLink to="/about" class="button button-secondary">View experience</NuxtLink><NuxtLink to="/contact" class="button button-primary">Contact me <span aria-hidden="true">↗</span></NuxtLink></div>
    </section>
  </div>
</template>

<style scoped>
.projects-page { padding-top: 60px; padding-bottom: 64px; }
.projects-intro { padding-bottom: 32px; }
h1 { margin: 15px 0; font-size: clamp(2.5rem, 5vw, 4.2rem); line-height: 1.1; letter-spacing: -.045em; font-weight: 700; }
h1 span { color: var(--green); }
.projects-intro > p:last-child { max-width: 64ch; margin: 18px 0 0; font-size: 15px; line-height: 1.8; color: var(--muted); }
.project-filter-bar { display: flex; justify-content: space-between; gap: 18px; align-items: center; padding: 18px 0; border-top: 1px solid var(--line); border-bottom: 1px solid var(--line); }
.project-filters { display: flex; flex-wrap: wrap; gap: 7px; }
.project-filters button { display: inline-flex; align-items: center; gap: 8px; padding: 9px 13px; border: 1px solid var(--line); border-radius: 7px; background: var(--surface); color: var(--muted); font-family: inherit; font-size: 12px; cursor: pointer; transition: color .15s, background .15s; }
.project-filters button span { font-family: ui-monospace, monospace; font-size: 10px; opacity: .7; }
.project-filters button:hover { border-color: #496176; color: var(--ink); }
.project-filters button.selected { border-color: var(--green); background: var(--green); color: var(--paper); }
.project-result-count { flex-shrink: 0; color: var(--muted); font-size: 11px; font-family: ui-monospace, monospace; }
.projects-grid { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 24px; padding: 28px 0; }
.projects-empty { padding: 60px 20px; text-align: center; }.projects-empty h2 { font-size: 22px; font-weight: 600; }
.project-disclosure { max-width: 760px; margin: 0; color: var(--muted); font-size: 11px; line-height: 1.8; }
.project-contact { display: flex; align-items: center; justify-content: space-between; gap: 24px; margin-top: 45px; padding: 28px; border: 1px solid var(--line); border-radius: 12px; background: var(--surface); }
.project-contact h2 { margin: 0; font-size: clamp(1.25rem, 2.2vw, 1.75rem); line-height: 1.3; letter-spacing: -.025em; font-weight: 650; }
.project-contact p { margin: 8px 0 0; font-size: 13px; line-height: 1.6; color: var(--muted); }
.project-contact-actions { display: flex; flex-wrap: wrap; gap: 10px; }
@media (max-width: 800px) { .projects-page { padding-top: 42px; }.project-filter-bar { align-items: start; }.project-result-count { position: absolute; width: 1px; height: 1px; overflow: hidden; clip-path: inset(50%); }.projects-grid { gap: 18px; }.project-filters button { padding: 8px 10px; font-size: 11px; }.project-contact { align-items: start; flex-direction: column; } }
@media (max-width: 600px) { .projects-grid { grid-template-columns: 1fr; }.projects-intro { padding-bottom: 24px; }.project-contact { padding: 22px; }.project-contact-actions .button { font-size: 12px; }.projects-page { padding-bottom: 44px; } }
</style>