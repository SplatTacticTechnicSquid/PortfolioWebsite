<script setup lang="ts">
import { profile, experiences, education, certifications, skillGroups, languages, activities, awards } from '~/data/portfolio'

useSeoMeta({
  title: 'About',
  description: 'Meet Raditya Pratama: an Electronics and Instrumentation graduate building enterprise applications, engineering tools, and digital transformation solutions.',
})
const cvUrl = useRuntimeConfig().app.baseURL.replace(/\/$/, '') + profile.cvUrl
</script>

<template>
  <div class="about-page site-container">
    <header class="about-intro">
      <div class="intro-title">
        <p class="eyebrow">A little about me</p>
        <h1>An engineer’s curiosity.<br />A developer’s <em>craft.</em></h1>
        <div class="intro-actions">
          <a :href="cvUrl" class="button button-primary" download>Download CV <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3v12m-5-5 5 5 5-5M5 16v5h14v-5" /></svg></a>
          <NuxtLink to="/projects" class="button button-link">Explore my work <span aria-hidden="true">↗</span></NuxtLink>
        </div>
      </div>
      <div class="intro-story">
        <span class="story-mark" aria-hidden="true">RP<span>↗</span></span>
        <p>{{ profile.summary }}</p>
        <div class="intro-facts">
          <div><span class="fact-label">Based in</span><strong>{{ profile.location }}</strong></div>
          <div><span class="fact-label">Background</span><strong>Electronics &amp; Instrumentation</strong></div>
        </div>
      </div>
    </header>

    <nav class="about-index" aria-label="About page sections">
      <a href="#experience">01 / Experience</a>
      <a href="#toolkit">02 / Toolkit</a>
      <a href="#education">03 / Education</a>
      <a href="#beyond-work">04 / Beyond work</a>
    </nav>

    <section id="experience" class="about-section" aria-labelledby="experience-heading">
      <div class="section-intro">
        <p class="eyebrow">01 / The journey</p>
        <h2 id="experience-heading" class="section-heading">From instruments<br />to <em>interfaces.</em></h2>
        <p>Bringing an understanding of physical systems into the software that helps people work.</p>
      </div>
      <div class="experience-list">
        <article v-for="(experience, index) in experiences" :key="experience.organization" class="experience-item">
          <div class="experience-meta"><span>{{ experience.period }}</span><span v-if="index === 0" class="current-label">Current</span></div>
          <h3>{{ experience.role }}</h3>
          <p class="organization">{{ experience.organization }}</p>
          <p class="location">{{ experience.location }}</p>
          <p class="experience-description">{{ experience.description }}</p>
          <ul class="highlights"><li v-for="highlight in experience.highlights" :key="highlight">{{ highlight }}</li></ul>
        </article>
      </div>
    </section>

    <section id="toolkit" class="toolkit-section" aria-labelledby="toolkit-heading">
      <div class="toolkit-header">
        <div><p class="eyebrow">02 / The toolkit</p><h2 id="toolkit-heading" class="section-heading">Across the <em>stack.</em></h2></div>
        <p>From frontend interfaces and APIs to databases, deployment, and the hardware underneath.</p>
      </div>
      <div class="skill-grid">
        <article v-for="(group, index) in skillGroups" :key="group.name" class="skill-group">
          <span class="skill-number">{{ String(index + 1).padStart(2, '0') }}</span>
          <div><h3>{{ group.name }}</h3><div class="skill-tags"><span v-for="skill in group.skills" :key="skill" class="tag">{{ skill }}</span></div></div>
        </article>
      </div>
      <aside class="learning-note"><span aria-hidden="true">↗</span><p><strong>Where I’m growing next.</strong> Building on introductory exposure to SAP managed operations, ABAP, and Fiori, with an interest in the SAP Young Professionals Program and a future in SAP consulting.</p></aside>
    </section>

    <section id="education" class="about-section education-section" aria-labelledby="education-heading">
      <div class="section-intro"><p class="eyebrow">03 / The foundations</p><h2 id="education-heading" class="section-heading">Always a<br /><em>student.</em></h2><p>A foundation in engineering, shaped by learning across disciplines and countries.</p></div>
      <div>
        <div class="education-list">
          <article v-for="item in education" :key="item.institution" class="education-item">
            <span class="small-meta">{{ item.period }}</span><h3>{{ item.institution }}</h3><p class="qualification">{{ item.qualification }}</p><p class="location">{{ item.location }}</p><p v-if="item.detail" class="education-detail">{{ item.detail }}</p>
          </article>
        </div>
        <div class="certification-section">
          <h3 class="minor-heading">Certifications &amp; continued learning</h3>
          <ul class="certification-list"><li v-for="certification in certifications" :key="certification.name"><div><h4>{{ certification.name }}</h4><p>{{ certification.issuer }}</p></div><span>{{ certification.date }}</span></li></ul>
        </div>
      </div>
    </section>

    <section id="beyond-work" class="community-section" aria-labelledby="community-heading">
      <div class="community-header"><div><p class="eyebrow">04 / Beyond the screen</p><h2 id="community-heading" class="section-heading">Build. Learn.<br /><em>Give back.</em></h2></div><p>Teaching, volunteering, research, and community work are part of the same curiosity that drives my engineering.</p></div>
      <div class="activity-list">
        <details v-for="activity in activities" :key="activity.organization + activity.role" class="activity-item">
          <summary><span class="activity-organization">{{ activity.organization }}</span><span class="activity-role">{{ activity.role }}</span><span class="activity-toggle" aria-hidden="true">+</span></summary>
          <div class="activity-details"><span class="small-meta">{{ activity.period }}</span><p>{{ activity.description }}</p></div>
        </details>
      </div>
      <div class="personal-grid">
        <section aria-labelledby="languages-heading"><p class="eyebrow">Across cultures</p><h3 id="languages-heading" class="minor-heading">Languages</h3><ul class="language-list"><li v-for="language in languages" :key="language.name"><span>{{ language.name }}</span><span>{{ language.level }}</span></li></ul></section>
        <section aria-labelledby="recognition-heading"><p class="eyebrow">Along the way</p><h3 id="recognition-heading" class="minor-heading">Recognition</h3><ul class="awards-list"><li v-for="award in awards" :key="award.name"><h4>{{ award.name }}</h4><p>{{ award.issuer }} · {{ award.date }}</p></li></ul></section>
      </div>
    </section>

    <section class="about-outro" aria-labelledby="outro-heading"><div><p class="eyebrow">What’s next?</p><h2 id="outro-heading">Let’s make something <em>useful.</em></h2></div><NuxtLink to="/contact" class="button button-primary">Get in touch <span aria-hidden="true">↗</span></NuxtLink></section>
  </div>
</template>

<style scoped>
.about-page { padding-top: 84px; }
.about-intro { display: grid; grid-template-columns: 1.16fr 1fr; gap: 80px; padding-bottom: 72px; }
.intro-title h1 { max-width: 680px; font-size: clamp(2.9rem, 4.8vw, 4.5rem); font-weight: 550; line-height: 1.08; letter-spacing: -.06em; margin: 24px 0 32px; }
em { font-family: Georgia, 'Times New Roman', serif; font-weight: 400; }
.intro-actions { display: flex; align-items: center; flex-wrap: wrap; gap: 12px; }
.intro-actions svg { width: 17px; height: 17px; fill: none; stroke: currentColor; stroke-width: 1.6; }
.intro-story { padding-top: 5px; }
.story-mark { width: 72px; height: 72px; display: flex; align-items: center; justify-content: center; border: 1px solid #b6c8b1; background: #e4eadb; border-radius: 50%; font-family: Georgia, serif; font-style: italic; font-size: 26px; letter-spacing: -3px; margin-bottom: 24px; }
.story-mark span { align-self: flex-start; font-family: Arial, sans-serif; font-size: 17px; padding-top: 15px; letter-spacing: 0; }
.intro-story > p { font-size: 16px; line-height: 1.85; color: #59675e; }
.intro-facts { display: grid; grid-template-columns: 1fr 1fr; gap: 24px; margin-top: 26px; padding-top: 22px; border-top: 1px solid #d8ded3; }
.fact-label { display: block; color: var(--muted); font-size: 11px; text-transform: uppercase; letter-spacing: .1em; margin-bottom: 8px; }
.intro-facts strong { font-size: 13px; font-weight: 550; line-height: 1.6; display: block; }
.about-index { display: flex; justify-content: space-between; flex-wrap: wrap; gap: 16px 28px; padding: 22px 0; border-top: 1px solid #d8ded3; border-bottom: 1px solid #d8ded3; }
.about-index a { color: #59675e; font-family: 'Courier New', monospace; font-size: 11px; text-transform: uppercase; letter-spacing: .08em; text-decoration: none; }
.about-index a:hover { color: #2d5d46; text-decoration: underline; text-underline-offset: 6px; }
.about-section { display: grid; grid-template-columns: .8fr 1.4fr; gap: 90px; padding: 88px 0; border-bottom: 1px solid #d8ded3; scroll-margin-top: 100px; }
.section-intro .section-heading { margin: 20px 0; }
.section-intro > p:last-child { color: var(--muted); line-height: 1.8; max-width: 280px; font-size: 14px; }
.experience-item { padding: 0 0 38px 25px; position: relative; border-left: 1px solid #c6d2c1; }
.experience-item::before { content: ''; position: absolute; top: 6px; left: -5px; width: 9px; height: 9px; border: 1px solid #7c927c; border-radius: 50%; background: #f4f3ed; }
.experience-item:first-child::before { background: #2d5d46; border-color: #2d5d46; }
.experience-item:last-child { padding-bottom: 0; }
.experience-meta { display: flex; align-items: center; flex-wrap: wrap; gap: 12px; font-size: 11px; color: var(--muted); font-family: 'Courier New', monospace; }
.current-label { background: #e1e9da; color: #2d5d46; padding: 3px 7px; border-radius: 3px; font-size: 10px; text-transform: uppercase; letter-spacing: .06em; }
.experience-item h3 { margin: 13px 0 7px; font-size: 22px; font-weight: 550; line-height: 1.35; letter-spacing: -.035em; }
.organization { font-size: 14px; font-weight: 550; line-height: 1.55; }
.location { font-size: 12px; color: var(--muted); margin-top: 5px; line-height: 1.6; }
.experience-description { margin-top: 16px; font-size: 14px; line-height: 1.85; color: #59675e; }
.highlights { list-style: none; margin: 12px 0 0; padding: 0; }
.highlights li { position: relative; padding-left: 14px; font-size: 13px; line-height: 1.85; color: #59675e; margin-top: 8px; }
.highlights li::before { content: ''; width: 4px; height: 4px; border-radius: 50%; background: #73926c; position: absolute; left: 0; top: 10px; }
.toolkit-section { padding: 80px 0; border-bottom: 1px solid #d8ded3; scroll-margin-top: 100px; }
.toolkit-header, .community-header { display: flex; align-items: flex-end; justify-content: space-between; gap: 48px; margin-bottom: 38px; }
.toolkit-header .section-heading, .community-header .section-heading { margin-top: 18px; }
.toolkit-header > p, .community-header > p { max-width: 335px; color: var(--muted); font-size: 14px; line-height: 1.8; }
.skill-grid { display: grid; grid-template-columns: 1fr 1fr; border-top: 1px solid #d8ded3; }
.skill-group { display: flex; gap: 20px; padding: 26px 26px 26px 0; border-bottom: 1px solid #d8ded3; }
.skill-group:nth-child(even) { padding-left: 30px; border-left: 1px solid #d8ded3; }
.skill-number { font-family: 'Courier New', monospace; font-size: 10px; color: #73816e; padding-top: 4px; }
.skill-group h3 { font-size: 15px; font-weight: 550; margin-bottom: 12px; }
.skill-tags { display: flex; flex-wrap: wrap; gap: 7px; }
.skill-tags .tag { font-size: 11px; }
.learning-note { display: flex; align-items: flex-start; gap: 18px; padding: 24px; margin-top: 26px; background: #e8ecdf; }
.learning-note > span { font-size: 24px; color: #2d5d46; }
.learning-note p { color: #59675e; font-size: 13px; line-height: 1.85; }
.learning-note strong { color: #182c25; font-weight: 600; }
.education-item { padding-bottom: 25px; margin-bottom: 26px; border-bottom: 1px solid #d8ded3; }
.small-meta { font-family: 'Courier New', monospace; font-size: 11px; line-height: 1.7; color: var(--muted); }
.education-item h3 { font-size: 21px; font-weight: 550; letter-spacing: -.035em; line-height: 1.4; margin: 10px 0 7px; }
.qualification { font-size: 14px; line-height: 1.6; }
.education-detail { color: var(--muted); font-size: 13px; line-height: 1.85; margin-top: 10px; }
.certification-section { margin-top: 42px; }
.minor-heading { font-size: 21px; font-weight: 550; letter-spacing: -.035em; margin-bottom: 22px; }
.certification-list { list-style: none; padding: 0; margin: 0; }
.certification-list li { display: flex; justify-content: space-between; gap: 24px; padding: 15px 0; border-bottom: 1px solid #d8ded3; }
.certification-list h4 { font-size: 13px; line-height: 1.65; font-weight: 550; }
.certification-list p { font-size: 11px; line-height: 1.6; color: var(--muted); margin-top: 4px; }
.certification-list li > span { font-size: 10px; line-height: 1.8; color: var(--muted); flex-shrink: 0; }
.community-section { padding: 80px 0; scroll-margin-top: 100px; }
.activity-list { border-top: 1px solid #d8ded3; }
.activity-item { border-bottom: 1px solid #d8ded3; }
.activity-item summary { cursor: pointer; display: grid; grid-template-columns: 1.2fr 1fr 20px; gap: 28px; align-items: center; padding: 21px 0; list-style: none; }
.activity-item summary::-webkit-details-marker { display: none; }
.activity-item summary:hover .activity-organization { color: #2d5d46; }
.activity-organization { font-size: 15px; font-weight: 550; line-height: 1.6; }
.activity-role { font-size: 12px; color: var(--muted); line-height: 1.7; }
.activity-toggle { font-size: 22px; font-weight: 400; color: #2d5d46; transition: transform .2s; }
.activity-item[open] .activity-toggle { transform: rotate(45deg); }
.activity-details { max-width: 740px; padding: 0 0 24px; }
.activity-details p { margin-top: 10px; font-size: 14px; line-height: 1.85; color: #59675e; }
.personal-grid { display: grid; grid-template-columns: .8fr 1.4fr; gap: 90px; margin-top: 64px; }
.personal-grid .minor-heading { margin-top: 15px; }
.language-list, .awards-list { list-style: none; padding: 0; margin: 0; }
.language-list li { display: flex; justify-content: space-between; padding: 11px 0; gap: 20px; font-size: 13px; border-bottom: 1px solid #d8ded3; }
.language-list li span:last-child { color: var(--muted); font-size: 12px; }
.awards-list li { margin-bottom: 20px; }
.awards-list h4 { font-size: 13px; font-weight: 550; line-height: 1.6; }
.awards-list p { font-size: 11px; color: var(--muted); margin-top: 4px; line-height: 1.6; }
.about-outro { display: flex; justify-content: space-between; align-items: center; gap: 40px; padding: 50px 0 70px; border-top: 1px solid #d8ded3; }
.about-outro h2 { font-size: clamp(1.8rem, 3vw, 2.8rem); letter-spacing: -.045em; font-weight: 500; line-height: 1.25; margin-top: 16px; }
.about-outro .button { flex-shrink: 0; }
@media (max-width: 960px) {
  .about-intro { gap: 40px; }
  .about-section, .personal-grid { gap: 45px; grid-template-columns: .8fr 1.5fr; }
  .intro-facts { grid-template-columns: 1fr; gap: 15px; }
}
@media (max-width: 700px) {
  .about-page { padding-top: 48px; }
  .about-intro { grid-template-columns: 1fr; gap: 36px; padding-bottom: 40px; }
  .intro-title h1 { font-size: clamp(2.6rem, 9vw, 4rem); max-width: 520px; }
  .intro-story > p { font-size: 14px; }
  .story-mark { display: none; }
  .intro-facts { grid-template-columns: 1fr 1fr; gap: 20px; }
  .about-index { gap: 20px; justify-content: flex-start; }
  .about-index a { width: calc(50% - 10px); font-size: 10px; }
  .about-section, .personal-grid { grid-template-columns: 1fr; gap: 32px; padding-top: 50px; padding-bottom: 50px; }
  .section-intro > p:last-child { max-width: 400px; }
  .experience-item { padding-left: 20px; }
  .experience-item h3 { font-size: 20px; }
  .toolkit-section, .community-section { padding: 50px 0; }
  .toolkit-header, .community-header { display: block; margin-bottom: 26px; }
  .toolkit-header > p, .community-header > p { margin-top: 20px; max-width: 450px; }
  .skill-grid { grid-template-columns: 1fr; }
  .skill-group, .skill-group:nth-child(even) { padding: 22px 0; border-left: 0; }
  .learning-note { padding: 20px; gap: 14px; }
  .certification-list li { gap: 12px; }
  .certification-list li > span { max-width: 72px; text-align: right; }
  .activity-item summary { grid-template-columns: 1fr 20px; gap: 6px 20px; padding: 18px 0; }
  .activity-role { grid-column: 1; grid-row: 2; }
  .activity-toggle { grid-column: 2; grid-row: 1 / 3; }
  .personal-grid { margin-top: 42px; padding: 0; gap: 36px; }
  .about-outro { align-items: flex-start; flex-direction: column; gap: 24px; padding: 38px 0 50px; }
}
@media (prefers-reduced-motion: reduce) { .activity-toggle { transition: none; } }
</style>
