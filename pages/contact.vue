<script setup lang="ts">
import { ref } from 'vue'
import { profile } from '~/data/portfolio'

useSeoMeta({
  title: 'Contact',
  description: 'Contact Raditya Pratama for software development roles, projects, and collaboration. Find his email, GitHub, and downloadable CV.',
})
const cvUrl = useRuntimeConfig().app.baseURL.replace(/\/$/, '') + profile.cvUrl
const copyStatus = ref('')
const isCopying = ref(false)

async function copyEmail() {
  isCopying.value = true
  copyStatus.value = ''
  try {
    await navigator.clipboard.writeText(profile.email)
    copyStatus.value = 'Email address copied. Ready when you are.'
  } catch {
    copyStatus.value = 'Copy is unavailable in this browser. Select and copy the email address above, or use “Send an email”.'
  } finally {
    isCopying.value = false
  }
}
</script>

<template>
  <div class="contact-page site-container">
    <header class="contact-intro">
      <p class="eyebrow">Contact / Say hello</p>
      <h1>Let’s connect<span>.</span></h1>
      <p>For roles, projects, or collaboration.</p>
    </header>

    <div class="contact-grid">
      <section class="email-section" aria-labelledby="email-heading">
        <div class="contact-icon" aria-hidden="true"><svg viewBox="0 0 24 24"><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m3 6 9 7 9-7" /></svg></div>
        <h2 id="email-heading">Email me</h2>
        <p class="email-description">The best way to reach me. Include a few details about the role or project you’d like to discuss.</p>
        <a :href="'mailto:' + profile.email" class="email-link"><span>{{ profile.email }}</span><svg viewBox="0 0 24 24" aria-hidden="true"><path d="m6 18 12-12M6 6h12v12" /></svg></a>
        <div class="email-actions"><a :href="'mailto:' + profile.email" class="button button-primary">Send an email <span aria-hidden="true">↗</span></a><button type="button" class="button button-secondary" :disabled="isCopying" @click="copyEmail"><svg viewBox="0 0 24 24" aria-hidden="true"><rect x="8" y="8" width="12" height="13" rx="2" /><path d="M16 8V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h3" /></svg>{{ isCopying ? 'Copying…' : 'Copy email' }}</button></div>
        <p class="copy-status" role="status" aria-live="polite">{{ copyStatus }}</p>
        <div class="contact-location"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M19 10c0 5-7 11-7 11S5 15 5 10a7 7 0 1 1 14 0Z" /><circle cx="12" cy="10" r="2.5" /></svg><span>Cikarang, West Bekasi, Indonesia</span><span class="timezone">UTC+7</span></div>
      </section>

      <aside class="contact-profile" aria-label="Profile and professional links">
        <div class="identity"><span class="profile-monogram" aria-hidden="true">RP<span>.</span></span><div><h2>{{ profile.name }}</h2><p>{{ profile.role }}</p></div></div>
        <div class="profile-current"><span class="status-dot" aria-hidden="true"></span><div><span>Currently at</span><strong>LG Electronics R&amp;D</strong></div></div>
        <div class="social-links">
          <a :href="profile.github" target="_blank" rel="noopener noreferrer" class="social-link"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M9 19c-4 1-4-2-6-2m12 5v-4c0-1 .1-1.6-.5-2.2 3-.3 6-1.5 6-6.3a5 5 0 0 0-1.4-3.4c.2-.6.6-2-.1-3.3 0 0-1.1-.4-3.6 1.3a12 12 0 0 0-6.5 0C6.4 2.4 5.3 2.8 5.3 2.8c-.7 1.3-.3 2.7-.1 3.3a5 5 0 0 0-1.4 3.4c0 4.8 3 6 6 6.3-.6.6-.5 1.2-.5 2.2v4" /></svg><div><span class="social-title">GitHub</span><span class="social-description">@radityaprtm</span></div><span class="link-arrow" aria-hidden="true">↗</span><span class="sr-only"> (opens in a new tab)</span></a>
          <a v-if="profile.linkedin" :href="profile.linkedin" target="_blank" rel="noopener noreferrer" class="social-link"><svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="2" /><path d="M7 10v7m0-11v1m4 10v-7m0 3a3 3 0 0 1 6 0v4" /></svg><div><span class="social-title">LinkedIn</span><span class="social-description">Connect professionally</span></div><span class="link-arrow" aria-hidden="true">↗</span><span class="sr-only"> (opens in a new tab)</span></a>
          <a :href="cvUrl" download class="social-link"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M14 3H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9l-6-6Zm0 0v6h6M8 13h8m-8 4h5" /></svg><div><span class="social-title">Download CV</span><span class="social-description">Experience, skills &amp; education · PDF</span></div><svg class="download-icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3v12m-5-5 5 5 5-5M5 16v5h14v-5" /></svg></a>
        </div>
      </aside>
    </div>

    <nav class="contact-bottom" aria-label="Explore portfolio"><span>More about my work</span><NuxtLink to="/projects">Projects <span aria-hidden="true">↗</span></NuxtLink><NuxtLink to="/about">Experience &amp; skills <span aria-hidden="true">↗</span></NuxtLink></nav>
  </div>
</template>

<style scoped>
.contact-page { padding-top: 66px; padding-bottom: 56px; }
.contact-intro { margin-bottom: 38px; }
.contact-intro h1 { font-size: clamp(3rem, 5.2vw, 4.5rem); line-height: 1.1; letter-spacing: -.055em; font-weight: 750; margin: 16px 0 18px; }
.contact-intro h1 > span { color: var(--green); }
.contact-intro > p:last-child { color: var(--muted); font-size: 17px; line-height: 1.8; }
.contact-grid { display: grid; grid-template-columns: 1.4fr 1fr; gap: 24px; align-items: start; }
.email-section { border: 1px solid var(--line); border-radius: 16px; padding: 34px; background: linear-gradient(135deg, #102620 0%, var(--surface) 55%); min-width: 0; }
.contact-icon { display: flex; align-items: center; justify-content: center; width: 48px; height: 48px; background: var(--sage); border: 1px solid #285240; border-radius: 12px; margin-bottom: 22px; color: var(--green); }
.contact-icon > svg { width: 25px; height: 25px; fill: none; stroke: currentColor; stroke-width: 1.5; stroke-linejoin: round; }
.email-section h2 { font-size: 24px; font-weight: 650; letter-spacing: -.035em; }
.email-description { max-width: 430px; margin-top: 11px; font-size: 13px; line-height: 1.9; color: var(--muted); }
.email-link { display: flex; align-items: center; justify-content: space-between; gap: 20px; margin-top: 24px; padding-bottom: 23px; border-bottom: 1px solid var(--line); font-size: clamp(1.1rem, 2vw, 1.55rem); line-height: 1.5; font-weight: 550; letter-spacing: -.035em; text-decoration: none; color: var(--green); }
.email-link:hover { color: var(--ink); }
.email-link > span { overflow-wrap: anywhere; user-select: all; }
.email-link > svg { width: 21px; height: 21px; flex-shrink: 0; stroke: currentColor; stroke-width: 1.5; fill: none; transition: transform .2s; }
.email-link:hover > svg { transform: translate(2px, -2px); }
.email-actions { display: flex; flex-wrap: wrap; gap: 12px; margin-top: 24px; }
.email-actions svg { width: 16px; height: 16px; stroke: currentColor; stroke-width: 1.5; fill: none; }
.email-actions button { cursor: pointer; }
.email-actions button:disabled { cursor: wait; opacity: .65; }
.copy-status { min-height: 23px; margin-top: 12px; color: var(--green); font-size: 12px; line-height: 1.8; }
.contact-location { display: flex; align-items: center; flex-wrap: wrap; gap: 8px; border-top: 1px solid var(--line); padding-top: 20px; margin-top: 12px; color: var(--muted); font-size: 11px; line-height: 1.7; }
.contact-location svg { width: 17px; height: 17px; flex-shrink: 0; stroke: var(--green); stroke-width: 1.5; fill: none; }
.timezone { margin-left: auto; font: 10px ui-monospace, Consolas, monospace; padding: 5px 7px; border: 1px solid var(--line); border-radius: 4px; }
.contact-profile { border: 1px solid var(--line); border-radius: 16px; padding: 28px; background: var(--surface); min-width: 0; }
.identity { display: flex; align-items: center; gap: 15px; }
.profile-monogram { display: flex; align-items: center; justify-content: center; width: 52px; height: 52px; flex-shrink: 0; background: var(--paper); border: 1px solid var(--line); border-radius: 12px; font-size: 22px; font-weight: 750; letter-spacing: -.07em; }
.profile-monogram > span { color: var(--green); }
.identity h2 { font-size: 17px; line-height: 1.5; font-weight: 650; letter-spacing: -.025em; }
.identity p { font-size: 11px; line-height: 1.8; color: var(--muted); margin-top: 3px; }
.profile-current { display: flex; align-items: center; gap: 11px; padding: 20px 0 22px; margin-top: 3px; }
.status-dot { width: 6px; height: 6px; border-radius: 50%; background: var(--green); box-shadow: 0 0 10px #49e39b33; }
.profile-current > div { display: flex; flex-wrap: wrap; gap: 6px; align-items: center; font-size: 11px; line-height: 1.7; }
.profile-current span { color: var(--muted); }
.profile-current strong { color: var(--green); font-weight: 500; }
.social-links { border-top: 1px solid var(--line); }
.social-link { display: flex; align-items: center; gap: 14px; padding: 23px 0; text-decoration: none; color: var(--ink); }
.social-link + .social-link { border-top: 1px solid var(--line); }
.social-link:last-child { padding-bottom: 3px; }
.social-link:hover { color: var(--green); }
.social-link > svg { width: 22px; height: 22px; flex-shrink: 0; stroke: currentColor; stroke-width: 1.5; fill: none; stroke-linecap: round; stroke-linejoin: round; }
.social-title { display: block; font-size: 14px; font-weight: 550; }
.social-description { display: block; color: var(--muted); font-size: 11px; line-height: 1.7; margin-top: 4px; }
.link-arrow { font-size: 21px; margin-left: auto; color: var(--muted); }
.social-link > .download-icon { width: 19px; height: 19px; margin-left: auto; color: var(--muted); }
.contact-bottom { display: flex; align-items: center; flex-wrap: wrap; gap: 25px; margin-top: 36px; padding-top: 26px; border-top: 1px solid var(--line); }
.contact-bottom > span { color: var(--muted); font: 11px ui-monospace, Consolas, monospace; margin-right: auto; }
.contact-bottom a { display: flex; align-items: center; gap: 14px; text-decoration: none; color: var(--ink); font-size: 12px; }
.contact-bottom a > span { color: var(--green); font-size: 17px; }
.contact-bottom a:hover { color: var(--green); }
@media (max-width: 960px) {
  .contact-grid { grid-template-columns: 1.2fr 1fr; gap: 18px; }
  .email-section { padding: 26px; }
  .contact-profile { padding: 24px; }
  .identity { gap: 12px; }
  .identity h2 { font-size: 15px; }
  .profile-monogram { width: 44px; height: 44px; font-size: 20px; }
  .email-actions { gap: 10px; }
  .email-actions .button { font-size: 12px; }
}
@media (max-width: 700px) {
  .contact-page { padding-top: 40px; padding-bottom: 40px; }
  .contact-intro { margin-bottom: 29px; }
  .contact-intro > p:last-child { font-size: 15px; }
  .contact-grid { grid-template-columns: 1fr; gap: 20px; }
  .email-section { padding: 25px 22px; }
  .email-link { font-size: clamp(1.05rem, 4.5vw, 1.7rem); gap: 13px; }
  .email-description { font-size: 13px; }
  .email-link > svg { width: 19px; height: 19px; }
  .email-actions .button { font-size: 12px; }
  .contact-profile { padding: 24px 22px; }
  .identity h2 { font-size: 17px; }
  .profile-monogram { width: 49px; height: 49px; }
  .contact-bottom { gap: 18px 25px; margin-top: 28px; }
  .contact-bottom > span { width: 100%; }
}
@media (prefers-reduced-motion: reduce) { .email-link > svg { transition: none; } }
</style>
