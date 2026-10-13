<template>
  <div>
    <section class="site-container hero">
      <div class="hero-copy">
        <div class="hero-intro"><span class="intro-line"></span> Hi, I’m Raditya Rifqi Pratama</div>
        <h1>Making complex<br />systems feel<br /><em>simple.</em><span class="hero-period" aria-hidden="true">✳</span></h1>
        <p class="hero-description">A developer with an engineer’s perspective. I build web applications, automate workflows, and connect software to the physical world.</p>
        <div class="hero-actions"><NuxtLink to="/projects" class="button button-primary">Explore my work <span aria-hidden="true">↗</span></NuxtLink><a :href="cvPath" class="button button-secondary" download>Download résumé <span aria-hidden="true">↓</span></a></div>
        <div class="hero-current"><span aria-hidden="true"></span> Currently building at <strong>LG Electronics R&amp;D</strong></div>
      </div>
      <div class="hero-art"><EngineeringVisual /><div class="art-index"><span>01 / THE INTERSECTION</span><span>Software. Engineering. Impact.</span></div></div>
    </section>

    <section class="site-container credibility" aria-label="Professional background">
      <p>Experience built<br />across disciplines.</p>
      <div><span class="context-label">NOW</span><strong><span class="lg-dot" aria-hidden="true">L</span> LG Electronics <small>R&amp;D</small></strong></div>
      <div><span class="context-label">PREVIOUSLY</span><strong class="sigma-word">telkom<span>sigma</span></strong></div>
      <div><span class="context-label">FOUNDATION</span><strong class="ugm-word">Universitas Gadjah Mada<span>Electronics &amp; Instrumentation</span></strong></div>
    </section>

    <section class="site-container work-section">
      <div class="section-top"><div><span class="eyebrow">01 / Selected work</span><h2 class="section-heading">Built for <em>real problems.</em></h2></div><NuxtLink to="/projects" class="button button-link">All projects <span aria-hidden="true">↗</span></NuxtLink></div>
      <p class="section-description">Engineering tools, intelligent interfaces, and the systems that keep teams moving.</p>
      <div class="featured-grid"><ProjectCard v-for="project in featuredProjects" :key="project.id" :project="project" /></div>
      <NuxtLink to="/projects/project_details/bom-automation" class="impact-strip">
        <span class="impact-label"><span class="eyebrow">A little automation. A big difference.</span><span>BOM validation · LG Electronics R&amp;D</span></span>
        <span class="impact-numbers"><span>~2 days</span><span class="impact-arrow" aria-hidden="true">→</span><strong>&lt;10 min</strong></span>
        <span class="impact-detail">Verification across<br />hundreds of TV models <span aria-hidden="true">↗</span></span>
      </NuxtLink>
    </section>

    <section class="practice-section section-rule">
      <div class="site-container practice-grid">
        <div class="practice-intro"><span class="eyebrow">02 / My perspective</span><h2 class="section-heading">The space between<br />code and the<br /><em>real world.</em></h2><p>My starting point was electronics and instrumentation. Today, I bring that systems mindset to software: understanding the moving parts, making the connections, and building something useful.</p><NuxtLink to="/about" class="button button-link">A little more about me <span aria-hidden="true">↗</span></NuxtLink></div>
        <div class="practice-list">
          <article v-for="(item, index) in practices" :key="item.title"><span class="practice-number">0{{ index + 1 }}</span><div><h3>{{ item.title }}</h3><p>{{ item.description }}</p><div class="practice-tags"><span v-for="tag in item.tags" :key="tag">{{ tag }}</span></div></div><span class="practice-arrow" aria-hidden="true">↗</span></article>
        </div>
      </div>
    </section>

    <section class="site-container journey-section">
      <div class="section-top"><div><span class="eyebrow">03 / The journey so far</span><h2 class="section-heading">Always learning.<br /><em>Always building.</em></h2></div><NuxtLink to="/about#experience" class="button button-link">Full experience <span aria-hidden="true">↗</span></NuxtLink></div>
      <div class="journey-grid"><article v-for="(experience, index) in experiences.slice(0, 2)" :key="experience.organization"><div class="journey-meta"><span>{{ experience.period }}</span><span v-if="index === 0" class="current-tag">Current</span></div><h3>{{ index === 0 ? 'LG Electronics R&D' : 'Telkomsigma' }}</h3><p class="journey-role">{{ index === 0 ? 'Junior Research Engineer · DX/AX' : experience.role }}</p><p>{{ experience.description }}</p></article></div>
    </section>

    <section class="site-container home-contact">
      <div><span class="eyebrow">Let’s connect</span><h2>Good things start<br />with a <em>conversation.</em></h2><p>Have a project, an opportunity, or an interesting problem in mind?</p></div>
      <NuxtLink to="/contact" class="contact-circle" aria-label="Get in touch"><span aria-hidden="true">↗</span><span>Get in touch</span></NuxtLink>
    </section>
  </div>
</template>

<script setup lang="ts">
import { experiences, profile, projects } from '~/data/portfolio';
const featuredProjects = projects.filter(project => project.featured);
const cvPath = useRuntimeConfig().app.baseURL + profile.cvUrl.replace(/^\//, '');
const practices = [
  { title: 'Thoughtful web applications', description: 'Interfaces that make complex business and engineering workflows easier to navigate.', tags: ['React & Next.js', 'Vue & Nuxt.js'] },
  { title: 'Connected, automated workflows', description: 'Bringing APIs, databases, and AI-enabled tools together to reduce repetitive work.', tags: ['REST APIs', 'PostgreSQL', 'AI integration'] },
  { title: 'Software that meets hardware', description: 'Bridging browser applications and physical devices with an instrumentation foundation.', tags: ['Web Serial', 'RS-232', 'Embedded systems'] },
];
useSeoMeta({
  title: 'Developer & Engineer',
  description: 'I’m Raditya Rifqi Pratama, a digital transformation developer at LG Electronics R&D. Explore my work in enterprise software, AI-enabled applications, and engineering automation.',
  ogTitle: 'Raditya Pratama — Software, engineering, impact',
  ogDescription: 'Building web applications, automating engineering workflows, and connecting software to the physical world.',
});
</script>

<style scoped>
.hero { display: grid; grid-template-columns: 1.08fr 1fr; gap: 65px; padding-block: 77px 68px; align-items: center; }
.hero-intro { display: flex; align-items: center; gap: 11px; color: var(--green); font: 11px/1.5 var(--font-mono); margin-bottom: 27px; }
.intro-line { width: 22px; height: 1px; background: var(--green); }
h1 { position: relative; font-size: clamp(54px, 5.7vw, 80px); font-weight: 500; line-height: 1.035; letter-spacing: -.065em; margin: 0; }
h1 em { font-family: Georgia, serif; font-weight: 400; color: var(--green); letter-spacing: -.07em; }
.hero-period { display: inline-block; vertical-align: top; color: var(--green); font-size: 54px; line-height: 1.2; font-weight: 400; margin-left: 48px; }
.hero-description { max-width: 420px; font-size: 15px; line-height: 1.85; color: var(--muted); margin: 27px 0 28px; }
.hero-actions { display: flex; gap: 11px; flex-wrap: wrap; }
.hero-current { display: flex; flex-wrap: wrap; gap: 5px; align-items: center; font-size: 10px; color: var(--muted); margin-top: 26px; }
.hero-current > span { width: 6px; height: 6px; border-radius: 50%; background: var(--green); margin-right: 3px; }
.hero-current strong { font-weight: 500; color: var(--ink); }
.hero-art { padding-top: 7px; }
.art-index { display: flex; justify-content: space-between; gap: 12px; color: var(--muted); font: 8px/1.5 var(--font-mono); margin-top: 14px; }
.art-index > span:first-child { letter-spacing: .07em; }
.credibility { border-top: 1px solid var(--line); border-bottom: 1px solid var(--line); display: grid; grid-template-columns: .9fr 1.15fr 1.05fr 1.2fr; gap: 32px; align-items: center; padding-block: 28px; }
.credibility > p { font-size: 11px; line-height: 1.6; color: var(--muted); }
.context-label { display: block; color: var(--muted); font: 8px/1 var(--font-mono); letter-spacing: .12em; margin-bottom: 13px; }
.credibility strong { display: flex; align-items: center; gap: 7px; font-size: 19px; font-weight: 600; letter-spacing: -.7px; line-height: 1.2; }
.credibility strong small { font: 9px var(--font-mono); letter-spacing: 0; align-self: flex-end; padding-bottom: 2px; }
.lg-dot { display: inline-flex; align-items: center; justify-content: center; width: 25px; height: 25px; border: 1px solid var(--ink); border-radius: 50%; font-size: 14px; font-weight: 400; }
.credibility .sigma-word { display: block; font-size: 24px; font-weight: 400; letter-spacing: -1.2px; }
.sigma-word > span { font-weight: 700; }
.credibility .ugm-word { display: block; font-size: 14px; letter-spacing: -.3px; font-weight: 600; }
.ugm-word > span { display: block; font-size: 9px; color: var(--muted); font-weight: 400; letter-spacing: 0; margin-top: 5px; }
.work-section { padding-block: 85px 80px; }
.section-top { display: flex; align-items: flex-end; justify-content: space-between; gap: 32px; }
.section-top .eyebrow { margin-bottom: 15px; }
.section-top > .button { white-space: nowrap; margin-bottom: 4px; }
.section-description { font-size: 14px; color: var(--muted); margin: 17px 0 34px; }
.featured-grid { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 25px; }
.impact-strip { margin-top: 41px; background: var(--sage); border: 1px solid #d8e0cd; display: flex; gap: 24px; align-items: center; justify-content: space-between; padding: 25px 30px; border-radius: 5px; transition: background .2s; }
.impact-strip:hover { background: #dfe7d4; }
.impact-label .eyebrow { font-size: 9px; margin-bottom: 8px; letter-spacing: .09em; }
.impact-label > span:last-child { font-size: 11px; color: var(--muted); }
.impact-numbers { display: flex; align-items: center; gap: 20px; white-space: nowrap; font-size: 30px; letter-spacing: -1.4px; }
.impact-numbers > span:first-child { color: #728169; text-decoration: line-through; text-decoration-thickness: 1px; }
.impact-numbers strong { font-weight: 500; color: var(--green); }
.impact-numbers .impact-arrow { font-size: 19px; letter-spacing: 0; color: var(--green); }
.impact-detail { position: relative; font-size: 10px; color: var(--muted); padding-right: 20px; }
.impact-detail > span { position: absolute; top: 5px; right: 0; font-size: 20px; color: var(--green); }
.practice-section { background: #eeeee6; padding-block: 80px; border-bottom: 1px solid var(--line); }
.practice-grid { display: grid; grid-template-columns: 1fr 1.1fr; gap: 100px; }
.practice-intro > p { color: var(--muted); font-size: 13px; line-height: 1.9; max-width: 370px; margin: 25px 0 20px; }
.practice-list article { display: flex; align-items: flex-start; gap: 20px; padding-block: 25px; border-bottom: 1px solid #d4dbce; }
.practice-list article:first-child { padding-top: 5px; }
.practice-number { color: var(--green); font: 10px/2.8 var(--font-mono); }
.practice-list h3 { font-size: 19px; line-height: 1.4; letter-spacing: -.5px; font-weight: 500; margin: 0 0 10px; }
.practice-list p { color: var(--muted); font-size: 12px; line-height: 1.8; max-width: 365px; }
.practice-arrow { margin-left: auto; font-size: 20px; color: var(--green); }
.practice-tags { display: flex; flex-wrap: wrap; gap: 15px; margin-top: 13px; color: var(--green); font: 8px/1.5 var(--font-mono); }
.journey-section { padding-block: 85px 80px; }
.journey-grid { margin-top: 37px; display: grid; grid-template-columns: 1fr 1fr; gap: 55px; }
.journey-grid article { border-top: 1px solid var(--line); padding-top: 21px; }
.journey-meta { display: flex; justify-content: space-between; align-items: center; min-height: 21px; color: var(--muted); font: 9px/1.5 var(--font-mono); margin-bottom: 23px; }
.current-tag { padding: 3px 8px; color: var(--green); background: var(--sage); border-radius: 3px; }
.journey-grid h3 { font-size: 25px; letter-spacing: -.8px; font-weight: 500; line-height: 1.3; }
.journey-role { font-size: 12px; color: var(--green); margin: 8px 0 15px; }
.journey-grid article > p:last-child { font-size: 13px; color: var(--muted); line-height: 1.8; max-width: 460px; }
.home-contact { display: flex; align-items: center; justify-content: space-between; gap: 40px; padding: 52px 57px; background: var(--green); color: var(--paper); border-radius: 7px; margin-bottom: 65px; }
.home-contact .eyebrow { color: #becdaf; margin-bottom: 18px; }
.home-contact h2 { font-size: clamp(32px, 4vw, 51px); letter-spacing: -.045em; line-height: 1.16; font-weight: 400; }
.home-contact h2 em { color: #ceddb6; font-family: Georgia, serif; }
.home-contact p { color: #ced9c7; font-size: 12px; margin-top: 19px; }
.contact-circle { width: 127px; height: 127px; border: 1px solid #71896a; border-radius: 50%; flex-shrink: 0; display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 5px; transition: background .2s, transform .2s; }
.contact-circle:hover { background: #3b6a51; transform: rotate(-5deg); }
.contact-circle > span:first-child { font-size: 44px; line-height: 1; font-weight: 300; }
.contact-circle > span:last-child { font-size: 10px; }
@media (max-width: 1100px) {
  .hero { gap: 35px; } h1 { font-size: clamp(54px, 6.5vw, 73px); } .hero-actions .button { padding-inline: 15px; gap: 14px; font-size: 12px; }
  .practice-grid { gap: 60px; } .credibility { gap: 20px; } .credibility strong { font-size: 16px; }
  .impact-label { max-width: 200px; } .impact-numbers { gap: 12px; font-size: 27px; }
}
@media (max-width: 850px) {
  .hero { gap: 30px; padding-block: 50px; } h1 { font-size: 54px; } .hero-period { font-size: 37px; margin-left: 26px; } .hero-description { font-size: 13px; }
  .hero-intro { font-size: 9px; gap: 7px; } .hero-actions { gap: 8px; } .hero-actions .button { font-size: 11px; padding: 10px 11px; gap: 8px; }
  .hero-current { font-size: 9px; } .art-index > span:last-child { display: none; }
  .credibility { grid-template-columns: repeat(3, 1fr); } .credibility > p { display: none; }
  .featured-grid { grid-template-columns: 1fr 1fr; } .featured-grid > :last-child { grid-column: 1 / -1; max-width: 550px; }
  .impact-strip { flex-wrap: wrap; padding: 24px; } .impact-detail { display: none; } .impact-label { max-width: none; }
  .practice-grid { gap: 40px; } .practice-list h3 { font-size: 17px; } .home-contact { padding: 40px; }
}
@media (max-width: 650px) {
  .hero { grid-template-columns: 1fr; padding-block: 41px 34px; gap: 33px; } h1 { font-size: clamp(56px, 11.5vw, 76px); } .hero-intro { font-size: 10px; margin-bottom: 23px; }
  .hero-description { max-width: 420px; font-size: 14px; margin-top: 22px; } .hero-actions .button { font-size: 12px; padding: 12px 17px; gap: 14px; } .hero-current { font-size: 10px; margin-top: 22px; } .hero-art { padding: 0; }
  .hero-period { font-size: 44px; margin-left: 40px; } .art-index > span:last-child { display: block; }
  .credibility { padding-block: 25px; gap: 20px 12px; grid-template-columns: 1fr 1fr; } .credibility > div:last-child { grid-column: 1 / -1; border-top: 1px solid var(--line); padding-top: 20px; }
  .credibility .ugm-word { display: inline-flex; flex-wrap: wrap; gap: 5px 12px; } .ugm-word > span { margin: 0; } .context-label { margin-bottom: 9px; }
  .work-section, .journey-section { padding-block: 55px; } .section-top { align-items: flex-start; flex-direction: column; gap: 20px; } .section-top > .button { font-size: 12px; }
  .section-description { font-size: 13px; margin-top: 20px; } .featured-grid { grid-template-columns: 1fr; gap: 30px; } .featured-grid > :last-child { max-width: none; }
  .impact-strip { gap: 18px; margin-top: 30px; } .impact-numbers { font-size: 30px; gap: 26px; }
  .practice-section { padding-block: 55px; } .practice-grid { grid-template-columns: 1fr; gap: 30px; } .practice-list h3 { font-size: 19px; }
  .journey-grid { grid-template-columns: 1fr; gap: 30px; margin-top: 25px; } .journey-meta { margin-bottom: 17px; }
  .home-contact { flex-direction: column; align-items: flex-start; gap: 28px; padding: 34px 27px; margin-bottom: 45px; } .contact-circle { width: 94px; height: 94px; } .contact-circle > span:first-child { font-size: 32px; }
}
</style>
