<script setup lang="ts">
import { profile, experiences, education, certifications, skillGroups, languages, activities, awards } from '~/data/portfolio'

useSeoMeta({
  title: 'About',
  description: 'Raditya Pratama’s experience, technical skills, education, and certifications. Software development at LG Electronics R&D and Telkomsigma, grounded in electronics and instrumentation.',
})
const cvUrl = useRuntimeConfig().app.baseURL.replace(/\/$/, '') + profile.cvUrl
</script>

<template>
  <div class="about-page site-container">
    <header class="about-intro">
      <div class="intro-title">
        <p class="eyebrow">Profile / Background</p>
        <h1>About me<span>.</span></h1>
        <p class="intro-summary">{{ profile.summary }}</p>
        <p class="intro-current">Currently a Junior Research Engineer at <strong>LG Electronics R&amp;D</strong>, developing tools for TV engineering teams. Previously a Junior Programmer at <strong>Telkomsigma</strong>.</p>
        <div class="intro-actions">
          <a :href="cvUrl" class="button button-primary" download>Download CV <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3v12m-5-5 5 5 5-5M5 16v5h14v-5" /></svg></a>
          <NuxtLink to="/projects" class="button button-secondary">View projects <span aria-hidden="true">↗</span></NuxtLink>
        </div>
      </div>
      <aside class="profile-card" aria-label="Profile at a glance">
        <div class="terminal-bar"><span class="terminal-dots" aria-hidden="true"><i></i><i></i><i></i></span><span>profile.json</span></div>
        <div class="profile-content">
          <span class="profile-brace" aria-hidden="true">{</span>
          <dl class="profile-details">
            <div><dt>name</dt><dd>{{ profile.name }}</dd></div>
            <div><dt>specialty</dt><dd>Software &amp; engineering systems</dd></div>
            <div><dt>location</dt><dd>Cikarang, Indonesia</dd></div>
            <div><dt>education</dt><dd>Electronics &amp; Instrumentation</dd></div>
            <div><dt>university</dt><dd>Universitas Gadjah Mada</dd></div>
          </dl>
          <span class="profile-brace" aria-hidden="true">}</span>
        </div>
      </aside>
    </header>

    <nav class="about-index" aria-label="About page sections">
      <a href="#experience"><span>01</span> Experience</a>
      <a href="#toolkit"><span>02</span> Technical skills</a>
      <a href="#education"><span>03</span> Education</a>
      <a href="#certifications"><span>04</span> Certifications</a>
      <a href="#beyond-work"><span>05</span> Community</a>
    </nav>

    <section id="experience" class="about-section experience-section" aria-labelledby="experience-heading">
      <div class="section-intro">
        <p class="eyebrow">01 / Experience</p>
        <h2 id="experience-heading" class="section-heading">Where I’ve worked.</h2>
        <p>Enterprise software, engineering automation, and hands-on instrumentation.</p>
      </div>
      <div class="experience-list">
        <article v-for="(experience, index) in experiences" :key="experience.organization" class="experience-item">
          <div class="experience-meta"><span>{{ experience.period }}</span><span v-if="index === 0" class="current-label">Current role</span></div>
          <h3>{{ experience.organization }}</h3>
          <p class="experience-role">{{ experience.role }}</p>
          <p class="location">{{ experience.location }}</p>
          <p class="experience-description">{{ experience.description }}</p>
          <ul class="highlights"><li v-for="highlight in experience.highlights" :key="highlight">{{ highlight }}</li></ul>
        </article>
      </div>
    </section>

    <section id="toolkit" class="about-section" aria-labelledby="toolkit-heading">
      <div class="section-header"><div><p class="eyebrow">02 / Technical skills</p><h2 id="toolkit-heading" class="section-heading">My toolkit.</h2></div><p>Tools I use to build, integrate, and ship applications.</p></div>
      <div class="skill-grid">
        <article v-for="(group, index) in skillGroups" :key="group.name" class="skill-group">
          <div class="skill-title"><span aria-hidden="true">{{ ['</>', '{ }', '>_', '↗', '~/', '[#]'][index] }}</span><h3>{{ group.name }}</h3></div>
          <div class="skill-tags"><span v-for="skill in group.skills" :key="skill" class="tag">{{ skill }}</span></div>
        </article>
      </div>
    </section>

    <section id="education" class="about-section" aria-labelledby="education-heading">
      <div class="section-header"><div><p class="eyebrow">03 / Education</p><h2 id="education-heading" class="section-heading">Engineering foundations.</h2></div></div>
      <div class="education-grid">
        <article v-for="(item, index) in education" :key="item.institution" class="education-item">
          <div class="education-icon" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="m2 9 10-5 10 5-10 5L2 9Zm4 2v6c4 3 8 3 12 0v-6m4-2v8" /></svg><span>{{ String(index + 1).padStart(2, '0') }}</span></div>
          <h3>{{ item.institution }}</h3>
          <p class="qualification">{{ item.qualification }}</p>
          <span class="small-meta">{{ item.period }}</span>
          <p class="location">{{ item.location }}</p>
          <p v-if="item.detail" class="education-detail">{{ item.detail }}</p>
        </article>
      </div>
    </section>

    <section id="certifications" class="about-section" aria-labelledby="certifications-heading">
      <div class="section-header"><div><p class="eyebrow">04 / Certifications</p><h2 id="certifications-heading" class="section-heading">Credentials.</h2></div></div>
      <ul class="certification-list"><li v-for="certification in certifications" :key="certification.name"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="m9 12 2 2 4-4M12 3l3 2 4 1v7c0 4-7 8-7 8s-7-4-7-8V6l4-1 3-2Z" /></svg><div><h3>{{ certification.name }}</h3><p>{{ certification.issuer }}<span aria-hidden="true"> · </span><span>{{ certification.date }}</span></p></div></li></ul>
    </section>

    <section id="beyond-work" class="about-section community-section" aria-labelledby="community-heading">
      <div class="section-header"><div><p class="eyebrow">05 / Community</p><h2 id="community-heading" class="section-heading">Leadership &amp; activities.</h2></div><p>Teaching, volunteering, and research beyond my day-to-day role.</p></div>
      <CommunityGallery />
      <div class="activity-list">
        <details v-for="activity in activities" :key="activity.organization + activity.role" class="activity-item">
          <summary><span class="activity-organization">{{ activity.organization }}</span><span class="activity-role">{{ activity.role }}</span><span class="activity-toggle" aria-hidden="true">+</span></summary>
          <div class="activity-details"><span class="small-meta">{{ activity.period }}</span><p>{{ activity.description }}</p></div>
        </details>
      </div>
      <div class="personal-grid">
        <section class="personal-card" aria-labelledby="languages-heading"><h3 id="languages-heading" class="minor-heading">Languages</h3><ul class="language-list"><li v-for="language in languages" :key="language.name"><span>{{ language.name }}</span><span>{{ language.level }}</span></li></ul></section>
        <section class="personal-card" aria-labelledby="recognition-heading"><h3 id="recognition-heading" class="minor-heading">Honors &amp; recognition</h3><ul class="awards-list"><li v-for="award in awards" :key="award.name"><h4>{{ award.name }}</h4><p>{{ award.issuer }} · {{ award.date }}</p></li></ul></section>
      </div>
    </section>

    <section class="about-outro" aria-labelledby="outro-heading"><div><p class="eyebrow">Get in touch</p><h2 id="outro-heading">Have a role or project in mind?</h2></div><NuxtLink to="/contact" class="button button-primary">Let’s connect <span aria-hidden="true">↗</span></NuxtLink></section>
  </div>
</template>

<style scoped>
.about-page { padding-top: 66px; padding-bottom: 32px; }
.about-intro { display: grid; grid-template-columns: 1.35fr 1fr; align-items: center; gap: 64px; padding-bottom: 48px; }
.intro-title h1 { margin: 15px 0 22px; font-size: clamp(3rem, 5vw, 4.3rem); font-weight: 750; line-height: 1.08; letter-spacing: -.055em; }
.intro-title h1 > span { color: var(--green); }
.intro-summary { color: var(--ink); font-size: 17px; line-height: 1.8; max-width: 620px; }
.intro-current { margin-top: 17px; color: var(--muted); font-size: 14px; line-height: 1.85; }
.intro-current strong { color: var(--ink); font-weight: 550; }
.intro-actions { display: flex; align-items: center; flex-wrap: wrap; gap: 12px; margin-top: 27px; }
.intro-actions svg { width: 17px; height: 17px; fill: none; stroke: currentColor; stroke-width: 1.7; }
.profile-card { min-width: 0; border: 1px solid var(--line); background: var(--surface); border-radius: 16px; overflow: hidden; box-shadow: 0 16px 60px #00000024; }
.terminal-bar { display: flex; align-items: center; gap: 25px; border-bottom: 1px solid var(--line); padding: 15px 21px; color: var(--muted); font-family: ui-monospace, Consolas, monospace; font-size: 11px; }
.terminal-dots { display: flex; gap: 6px; }
.terminal-dots i { width: 7px; height: 7px; border-radius: 50%; background: var(--line); }
.terminal-dots i:first-child { background: var(--green); }
.profile-content { padding: 20px 25px 22px; }
.profile-brace { color: var(--green); font: 18px ui-monospace, Consolas, monospace; }
.profile-details { margin: 9px 0 9px 15px; }
.profile-details > div + div { margin-top: 12px; }
.profile-details dt { color: var(--accent); font: 11px ui-monospace, Consolas, monospace; }
.profile-details dd { margin: 4px 0 0; color: var(--ink); font-size: 13px; line-height: 1.5; }
.about-index { display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 18px 22px; padding: 22px 0; border-top: 1px solid var(--line); border-bottom: 1px solid var(--line); }
.about-index a { color: var(--muted); font-size: 12px; text-decoration: none; }
.about-index a span { color: var(--green); font: 11px ui-monospace, Consolas, monospace; margin-right: 7px; }
.about-index a:hover { color: var(--ink); }
.about-section { padding: 64px 0; border-bottom: 1px solid var(--line); scroll-margin-top: 95px; }
.experience-section { display: grid; grid-template-columns: .65fr 1.5fr; gap: 70px; }
.section-intro .section-heading { margin: 13px 0 18px; }
.section-intro > p:last-child { color: var(--muted); line-height: 1.8; max-width: 285px; font-size: 14px; }
.experience-item { position: relative; padding: 0 0 38px 28px; border-left: 1px solid var(--line); }
.experience-item::before { content: ''; position: absolute; top: 6px; left: -5px; width: 9px; height: 9px; border: 2px solid var(--green); border-radius: 50%; background: var(--paper); }
.experience-item:first-child::before { background: var(--green); box-shadow: 0 0 12px #49e39b40; }
.experience-item:last-child { padding-bottom: 0; }
.experience-meta { display: flex; align-items: center; flex-wrap: wrap; gap: 12px; font-size: 11px; color: var(--muted); font-family: ui-monospace, Consolas, monospace; }
.current-label { background: var(--sage); color: var(--green); padding: 4px 8px; border-radius: 5px; font-size: 10px; }
.experience-item h3 { margin: 13px 0 7px; font-size: 21px; font-weight: 650; line-height: 1.4; letter-spacing: -.025em; }
.experience-role { font-size: 14px; color: var(--green); line-height: 1.6; }
.location { font-size: 12px; color: var(--muted); margin-top: 5px; line-height: 1.6; }
.experience-description { margin-top: 15px; font-size: 14px; line-height: 1.8; color: var(--muted); }
.highlights { list-style: none; margin: 12px 0 0; padding: 0; }
.highlights li { position: relative; padding-left: 16px; font-size: 13px; line-height: 1.85; color: var(--muted); margin-top: 8px; }
.highlights li::before { content: '›'; color: var(--green); position: absolute; left: 0; font-size: 17px; line-height: 1.4; }
.section-header { display: flex; align-items: flex-end; justify-content: space-between; gap: 36px; margin-bottom: 28px; }
.section-header .section-heading { margin-top: 13px; }
.section-header > p { max-width: 310px; color: var(--muted); font-size: 13px; line-height: 1.8; }
.skill-grid { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 16px; }
.skill-group { padding: 24px; background: var(--surface); border: 1px solid var(--line); border-radius: 12px; }
.skill-title { display: flex; align-items: center; gap: 12px; margin-bottom: 20px; }
.skill-title > span { color: var(--green); font: 15px ui-monospace, Consolas, monospace; min-width: 30px; }
.skill-title h3 { font-size: 14px; font-weight: 600; line-height: 1.5; }
.skill-tags { display: flex; flex-wrap: wrap; gap: 7px; }
.skill-tags .tag { font-size: 11px; }
.education-grid { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 16px; }
.education-item { min-width: 0; border: 1px solid var(--line); border-radius: 12px; background: var(--surface); padding: 24px; }
.education-icon { display: flex; justify-content: space-between; align-items: center; margin-bottom: 22px; }
.education-icon svg { width: 27px; height: 27px; stroke: var(--green); fill: none; stroke-width: 1.4; stroke-linejoin: round; }
.education-icon > span { font: 11px ui-monospace, Consolas, monospace; color: var(--muted); }
.education-item h3 { font-size: 18px; font-weight: 650; letter-spacing: -.025em; line-height: 1.4; margin-bottom: 9px; }
.qualification { font-size: 13px; color: var(--green); line-height: 1.7; margin-bottom: 16px; }
.small-meta { font-family: ui-monospace, Consolas, monospace; font-size: 10px; line-height: 1.8; color: var(--muted); }
.education-detail { color: var(--muted); font-size: 12px; line-height: 1.85; margin-top: 18px; padding-top: 15px; border-top: 1px solid var(--line); }
.certification-list { display: grid; grid-template-columns: 1fr 1fr; gap: 12px 24px; list-style: none; padding: 0; margin: 0; }
.certification-list li { display: flex; gap: 14px; padding: 18px 20px; border: 1px solid var(--line); border-radius: 10px; }
.certification-list svg { width: 20px; height: 20px; flex-shrink: 0; fill: none; stroke: var(--green); stroke-width: 1.4; stroke-linecap: round; stroke-linejoin: round; }
.certification-list h3 { font-size: 13px; line-height: 1.6; font-weight: 550; }
.certification-list p { font-size: 11px; line-height: 1.8; color: var(--muted); margin-top: 5px; }
.activity-list { border: 1px solid var(--line); border-radius: 12px; padding: 0 24px; }
.activity-item + .activity-item { border-top: 1px solid var(--line); }
.activity-item summary { cursor: pointer; display: grid; grid-template-columns: 1fr 1fr 20px; gap: 22px; align-items: center; padding: 19px 0; list-style: none; }
.activity-item summary::-webkit-details-marker { display: none; }
.activity-item summary:hover .activity-organization { color: var(--green); }
.activity-organization { font-size: 14px; font-weight: 550; line-height: 1.6; }
.activity-role { font-size: 12px; color: var(--muted); line-height: 1.7; }
.activity-toggle { font-size: 20px; color: var(--green); transition: transform .2s; }
.activity-item[open] .activity-toggle { transform: rotate(45deg); }
.activity-details { max-width: 740px; padding: 0 0 22px; }
.activity-details p { margin-top: 9px; font-size: 13px; line-height: 1.85; color: var(--muted); }
.personal-grid { display: grid; grid-template-columns: .75fr 1.25fr; gap: 24px; margin-top: 24px; }
.personal-card { padding: 26px; border: 1px solid var(--line); border-radius: 12px; background: var(--surface); }
.minor-heading { font-size: 17px; font-weight: 650; margin-bottom: 18px; }
.language-list, .awards-list { list-style: none; padding: 0; margin: 0; }
.language-list li { display: flex; justify-content: space-between; padding: 10px 0; gap: 20px; font-size: 13px; border-bottom: 1px solid var(--line); }
.language-list li:last-child { border-bottom: 0; }
.language-list li span:last-child { color: var(--muted); font-size: 12px; }
.awards-list li + li { margin-top: 18px; }
.awards-list h4 { font-size: 13px; font-weight: 550; line-height: 1.6; }
.awards-list p { font-size: 11px; color: var(--muted); margin-top: 3px; line-height: 1.7; }
.about-outro { display: flex; justify-content: space-between; align-items: center; gap: 30px; padding: 40px 0; }
.about-outro h2 { font-size: clamp(1.3rem, 2.5vw, 1.9rem); letter-spacing: -.025em; font-weight: 650; line-height: 1.4; margin-top: 11px; }
.about-outro .button { flex-shrink: 0; }
@media (max-width: 960px) {
  .about-intro { gap: 32px; grid-template-columns: 1.2fr 1fr; }
  .experience-section { gap: 35px; grid-template-columns: .7fr 1.5fr; }
  .skill-grid { grid-template-columns: 1fr 1fr; }
  .education-grid { grid-template-columns: 1fr; }
  .education-item { display: grid; grid-template-columns: 1.3fr 1fr; column-gap: 24px; }
  .education-icon { grid-column: 1 / -1; margin-bottom: 14px; }
  .education-item h3 { grid-column: 1; }
  .qualification { grid-column: 1; margin-bottom: 0; }
  .education-item .small-meta { grid-column: 2; grid-row: 2; }
  .education-item .location { grid-column: 2; grid-row: 3; }
  .education-detail { grid-column: 1 / -1; }
}
@media (max-width: 700px) {
  .about-page { padding-top: 40px; padding-bottom: 14px; }
  .about-intro { grid-template-columns: 1fr; gap: 32px; padding-bottom: 32px; }
  .intro-title h1 { margin-top: 14px; }
  .intro-summary { font-size: 15px; }
  .intro-current { font-size: 13px; }
  .profile-content { padding: 18px 22px; }
  .profile-details { display: grid; grid-template-columns: 1fr 1fr; gap: 15px; }
  .profile-details > div + div { margin-top: 0; }
  .profile-details > div:first-child { grid-column: 1 / -1; }
  .about-index { justify-content: flex-start; gap: 17px 22px; }
  .about-index a { font-size: 11px; }
  .about-section { padding: 44px 0; }
  .experience-section { grid-template-columns: 1fr; gap: 30px; }
  .section-intro > p:last-child { max-width: 430px; }
  .experience-item { padding-left: 20px; }
  .experience-item h3 { font-size: 19px; }
  .section-header { display: block; margin-bottom: 23px; }
  .section-header > p { margin-top: 16px; max-width: 430px; }
  .skill-grid, .certification-list, .personal-grid { grid-template-columns: 1fr; }
  .skill-group { padding: 21px; }
  .skill-title { margin-bottom: 15px; }
  .education-item { display: block; padding: 22px; }
  .qualification { margin-bottom: 12px; }
  .activity-list { padding: 0 19px; }
  .activity-item summary { grid-template-columns: 1fr 20px; gap: 5px 15px; padding: 17px 0; }
  .activity-role { grid-column: 1; grid-row: 2; }
  .activity-toggle { grid-column: 2; grid-row: 1 / 3; }
  .personal-grid { gap: 16px; margin-top: 16px; }
  .personal-card { padding: 22px; }
  .about-outro { align-items: flex-start; flex-direction: column; gap: 22px; padding: 32px 0; }
}
@media (prefers-reduced-motion: reduce) { .activity-toggle { transition: none; } }
</style>
