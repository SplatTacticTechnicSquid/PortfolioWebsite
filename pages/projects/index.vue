<script setup lang="ts">
import { projects, type Project } from '~/data/portfolio'

useSeoMeta({ title: 'Projects', description: 'Selected engineering work by Raditya Pratama: workflow automation, AI-enabled applications, enterprise platforms, and hardware integration.' })

const activeFilter = ref<'all' | Project['category']>('all')
const filters: { value: 'all' | Project['category']; label: string }[] = [
  { value: 'all', label: 'All projects' },
  { value: 'automation', label: 'Automation' },
  { value: 'ai', label: 'AI applications' },
  { value: 'enterprise', label: 'Enterprise' },
  { value: 'hardware', label: 'Hardware integration' },
]
const filteredProjects = computed(() => activeFilter.value === 'all' ? projects : projects.filter(project => project.category === activeFilter.value))
const countFor = (category: string) => category === 'all' ? projects.length : projects.filter(project => project.category === category).length
</script>

<template>
  <div class="site-container projects-page">
    <header class="projects-intro">
      <p class="eyebrow">THE WORK / SELECTED PROJECTS</p>
      <div class="projects-heading-row">
        <h1>Practical problems.<br><span>Purposeful software.</span></h1>
        <p>From automating engineering checks to connecting enterprise knowledge. A closer look at the applications I’ve helped bring to life.</p>
      </div>
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
    <aside class="project-disclosure"><span aria-hidden="true">↳</span><p>These summaries describe my contributions to team and internal projects. The visuals are illustrative workflows; internal source code and application data are not shared here.</p></aside>
    <section class="project-contact section-rule">
      <div><p class="eyebrow">HAVE SOMETHING IN MIND?</p><h2>Let’s build something useful.</h2></div>
      <NuxtLink to="/contact" class="button button-primary">Let’s talk <span aria-hidden="true">↗</span></NuxtLink>
    </section>
  </div>
</template>

<style scoped>
.projects-page { padding-top: 74px; }.projects-intro { padding-bottom: 52px; }
.projects-heading-row { display: grid; grid-template-columns: 1.35fr .7fr; align-items: end; gap: 65px; margin-top: 25px; }
h1 { margin: 0; font-size: clamp(2.8rem, 5.3vw, 4.8rem); line-height: 1.09; letter-spacing: -.06em; font-weight: 500; }h1 span { color: #75836c; }
.projects-heading-row > p { max-width: 34ch; margin: 0 0 5px; font-size: 15px; line-height: 1.9; color: var(--muted); }
.project-filter-bar { display: flex; justify-content: space-between; gap: 20px; align-items: center; padding: 22px 0; border-top: 1px solid #d8ded3; border-bottom: 1px solid #d8ded3; }
.project-filters { display: flex; flex-wrap: wrap; gap: 7px; }.project-filters button { display: inline-flex; align-items: center; gap: 9px; padding: 10px 13px; border: 1px solid transparent; border-radius: 4px; background: transparent; color: var(--muted); font-family: inherit; font-size: 12px; cursor: pointer; transition: color .15s, background .15s; }.project-filters button span { font-family: monospace; font-size: 10px; opacity: .65; }.project-filters button:hover { background: #e7ecdf; color: #182c25; }.project-filters button.selected { background: #2d5d46; color: #f4f3ed; }
.project-result-count { flex-shrink: 0; color: var(--muted); font-size: 11px; font-family: monospace; }
.projects-grid { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 54px 34px; padding: 36px 0; }.projects-empty { padding: 70px 20px; text-align: center; }.projects-empty h2 { font-size: 22px; font-weight: 500; }
.project-disclosure { display: flex; gap: 14px; max-width: 690px; margin: 25px 0 74px; color: var(--muted); }.project-disclosure > span { color: #bf633c; font-size: 24px; }.project-disclosure p { margin: 0; font-size: 12px; line-height: 1.8; }
.project-contact { display: flex; align-items: center; justify-content: space-between; gap: 24px; padding-top: 38px; padding-bottom: 66px; }.project-contact h2 { margin: 12px 0 0; font-size: clamp(1.8rem, 3.5vw, 2.75rem); line-height: 1.1; letter-spacing: -.045em; font-weight: 500; }
@media (max-width: 800px) { .projects-page { padding-top: 48px; }.projects-heading-row { grid-template-columns: 1fr; gap: 25px; }.projects-heading-row > p { max-width: 53ch; }.project-filter-bar { align-items: start; }.project-result-count { position: absolute; width: 1px; height: 1px; overflow: hidden; clip-path: inset(50%); }.projects-grid { gap: 42px 24px; }.project-filters button { padding: 9px 10px; font-size: 11px; } }
@media (max-width: 560px) { .projects-grid { grid-template-columns: 1fr; }.projects-intro { padding-bottom: 32px; }h1 { font-size: clamp(2.55rem, 10.4vw, 3.8rem); }.project-contact { align-items: start; flex-direction: column; padding-bottom: 48px; }.project-disclosure { margin-bottom: 44px; } }
</style>
