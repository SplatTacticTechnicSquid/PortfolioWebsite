<script setup lang="ts">
import { ref } from 'vue'
import { profile } from '~/data/portfolio'

useSeoMeta({
  title: 'Contact',
  description: 'Get in touch with Raditya Pratama about software engineering, digital transformation, and collaboration.',
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
    <section class="contact-intro" aria-labelledby="contact-heading">
      <div>
        <p class="eyebrow">Start a conversation</p>
        <h1 id="contact-heading">Let’s build<br />something<br /><em>useful.</em><span class="heading-dot" aria-hidden="true"></span></h1>
        <p class="contact-description">A challenging problem, a new collaboration, or a shared curiosity. I’d love to hear what you have in mind.</p>
      </div>
      <div class="contact-aside">
        <div class="connection-art" aria-hidden="true">
          <span class="art-label">Ideas → conversations → possibilities</span>
          <svg viewBox="0 0 320 260" fill="none">
            <path class="art-grid" d="M0 52h320M0 104h320M0 156h320M0 208h320M64 0v260M128 0v260M192 0v260M256 0v260" />
            <circle class="art-orbit" cx="160" cy="130" r="92" />
            <circle class="art-orbit" cx="160" cy="130" r="60" />
            <path class="art-path" d="M43 193h66l102-122h67" />
            <path class="art-path" d="m261 55 17 16-17 17" />
            <circle class="art-node" cx="43" cy="193" r="8" />
            <circle class="art-node" cx="160" cy="132" r="11" />
            <path class="art-spark" d="M75 55v20M65 65h20M257 189v14M250 196h14" />
          </svg>
          <div class="art-footer"><span>SOFTWARE × SYSTEMS × PEOPLE</span><span>↗</span></div>
        </div>
        <div class="contact-location"><span class="location-dot" aria-hidden="true"></span><div><span class="location-label">Based in Indonesia</span><p>Cikarang, West Bekasi · UTC+7</p></div></div>
      </div>
    </section>

    <section class="email-section" aria-labelledby="email-heading">
      <div class="email-heading-row"><h2 id="email-heading" class="eyebrow">The best place to reach me</h2><span class="email-note">Straight to my inbox</span></div>
      <a :href="'mailto:' + profile.email" class="email-link"><span>{{ profile.email }}</span><svg viewBox="0 0 32 32" aria-hidden="true"><path d="M6 26 26 6M6 6h20v20" /></svg></a>
      <div class="email-actions"><a :href="'mailto:' + profile.email" class="button button-primary">Send an email <span aria-hidden="true">↗</span></a><button type="button" class="button button-secondary" :disabled="isCopying" @click="copyEmail"><svg viewBox="0 0 24 24" aria-hidden="true"><rect x="8" y="8" width="12" height="13" rx="2" /><path d="M16 8V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h3" /></svg>{{ isCopying ? 'Copying…' : 'Copy email' }}</button></div>
      <p class="copy-status" role="status" aria-live="polite">{{ copyStatus }}</p>
    </section>

    <section class="contact-bottom" aria-label="More ways to connect">
      <div class="conversation-note"><p class="eyebrow">A good starting point</p><h2>What are you<br /><em>working on?</em></h2><p>Tell me a little about your project, the challenge you’re solving, or the opportunity you’d like to discuss. A few lines is all it takes.</p></div>
      <div class="elsewhere"><p class="eyebrow">Elsewhere on the internet</p><a :href="profile.github" target="_blank" rel="noopener noreferrer" class="social-link"><div><span class="social-title">GitHub</span><span class="social-description">Explore the code</span></div><span aria-hidden="true">↗</span><span class="sr-only"> (opens in a new tab)</span></a><a v-if="profile.linkedin" :href="profile.linkedin" target="_blank" rel="noopener noreferrer" class="social-link"><div><span class="social-title">LinkedIn</span><span class="social-description">Connect professionally</span></div><span aria-hidden="true">↗</span><span class="sr-only"> (opens in a new tab)</span></a><a :href="cvUrl" download class="social-link"><div><span class="social-title">Curriculum vitae</span><span class="social-description">Experience, skills &amp; background</span></div><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3v12m-5-5 5 5 5-5M5 16v5h14v-5" /></svg></a></div>
    </section>
  </div>
</template>

<style scoped>
.contact-page { padding-top: 78px; padding-bottom: 76px; }
.contact-intro { display: grid; grid-template-columns: 1.2fr 1fr; gap: 100px; align-items: center; padding-bottom: 66px; }
.contact-intro h1 { font-size: clamp(4rem, 7.6vw, 7rem); line-height: 1; letter-spacing: -.065em; font-weight: 550; margin: 27px 0; }
em { font-family: Georgia, 'Times New Roman', serif; font-weight: 400; }
.heading-dot { display: inline-block; width: 14px; height: 14px; border-radius: 50%; background: #b4c991; margin-left: 14px; }
.contact-description { max-width: 380px; font-size: 15px; color: var(--muted); line-height: 1.85; }
.contact-aside { padding-top: 35px; }
.connection-art { background: #e6ecdc; border: 1px solid #cfd8c4; padding: 22px; border-radius: 2px; color: #2d5d46; }
.art-label { display: block; font-family: 'Courier New', monospace; font-size: 9px; letter-spacing: .055em; text-transform: uppercase; }
.connection-art svg { display: block; width: 100%; height: auto; margin: 16px 0; }
.art-grid { stroke: #ccd8bf; stroke-width: .7; }
.art-orbit { stroke: #adc29c; stroke-width: 1; stroke-dasharray: 3 5; }
.art-path { stroke: #2d5d46; stroke-width: 2.5; stroke-linecap: round; stroke-linejoin: round; }
.art-node { fill: #e6ecdc; stroke: #2d5d46; stroke-width: 2; }
.art-spark { stroke: #75966b; stroke-width: 1.5; }
.art-footer { display: flex; justify-content: space-between; align-items: center; font-family: 'Courier New', monospace; font-size: 8px; letter-spacing: .08em; }
.art-footer > span:last-child { font-family: Arial, sans-serif; font-size: 24px; }
.contact-location { display: flex; align-items: center; gap: 10px; padding-top: 22px; }
.location-dot { width: 6px; height: 6px; border-radius: 50%; background: #739568; flex-shrink: 0; }
.location-label { font-size: 11px; font-weight: 550; }
.contact-location p { color: var(--muted); font-size: 10px; margin-top: 5px; line-height: 1.6; }
.email-section { border-top: 1px solid #d8ded3; padding-top: 27px; }
.email-heading-row { display: flex; justify-content: space-between; align-items: center; gap: 16px; }
.email-note { color: var(--muted); font-size: 11px; }
.email-link { display: flex; align-items: center; justify-content: space-between; gap: 28px; margin-top: 23px; padding-bottom: 28px; border-bottom: 1px solid #d8ded3; font-size: clamp(1.6rem, 4vw, 3.6rem); line-height: 1.4; font-weight: 500; letter-spacing: -.055em; text-decoration: none; color: #182c25; }
.email-link:hover { color: #2d5d46; }
.email-link > span { overflow-wrap: anywhere; user-select: all; }
.email-link > svg { width: 32px; height: 32px; flex-shrink: 0; stroke: currentColor; stroke-width: 1.5; fill: none; transition: transform .2s; }
.email-link:hover > svg { transform: translate(3px, -3px); }
.email-actions { display: flex; flex-wrap: wrap; gap: 12px; margin-top: 25px; }
.email-actions svg { width: 16px; height: 16px; stroke: currentColor; stroke-width: 1.5; fill: none; }
.email-actions button { cursor: pointer; }
.email-actions button:disabled { cursor: wait; opacity: .65; }
.copy-status { min-height: 23px; margin-top: 12px; color: #2d5d46; font-size: 12px; line-height: 1.8; }
.contact-bottom { display: grid; grid-template-columns: 1.2fr 1fr; gap: 100px; padding-top: 56px; }
.conversation-note h2 { font-size: clamp(2rem, 3.5vw, 3.2rem); font-weight: 500; line-height: 1.12; letter-spacing: -.045em; margin: 20px 0; }
.conversation-note > p:last-child { color: var(--muted); font-size: 13px; max-width: 360px; line-height: 1.9; }
.elsewhere > .eyebrow { margin-bottom: 22px; }
.social-link { display: flex; align-items: center; justify-content: space-between; gap: 22px; padding: 21px 0; border-bottom: 1px solid #d8ded3; text-decoration: none; color: #182c25; }
.social-link:hover { color: #2d5d46; }
.social-title { display: block; font-size: 19px; font-weight: 500; letter-spacing: -.025em; }
.social-description { display: block; color: var(--muted); font-size: 11px; margin-top: 7px; }
.social-link > span[aria-hidden] { font-size: 24px; }
.social-link > svg { width: 21px; height: 21px; stroke: currentColor; stroke-width: 1.4; fill: none; }
@media (max-width: 960px) {
  .contact-intro, .contact-bottom { gap: 50px; }
  .contact-intro h1 { font-size: clamp(4rem, 8vw, 6rem); }
  .connection-art { padding: 18px; }
  .art-label { font-size: 8px; }
}
@media (max-width: 700px) {
  .contact-page { padding-top: 48px; padding-bottom: 48px; }
  .contact-intro { grid-template-columns: 1fr; gap: 30px; padding-bottom: 42px; }
  .contact-intro h1 { font-size: clamp(3.8rem, 15vw, 6rem); margin: 25px 0; }
  .contact-description { font-size: 14px; max-width: 430px; }
  .heading-dot { width: 11px; height: 11px; margin-left: 12px; }
  .contact-aside { padding-top: 0; }
  .connection-art { display: none; }
  .contact-location { padding-top: 0; }
  .email-heading-row { display: block; }
  .email-note { display: none; }
  .email-link { margin-top: 18px; padding-bottom: 22px; font-size: clamp(1.35rem, 5.1vw, 2rem); gap: 15px; letter-spacing: -.045em; }
  .email-link > svg { width: 23px; height: 23px; }
  .email-actions { gap: 10px; }
  .email-actions .button { font-size: 12px; }
  .contact-bottom { grid-template-columns: 1fr; gap: 36px; padding-top: 34px; }
  .conversation-note > p:last-child { max-width: 420px; }
}
@media (prefers-reduced-motion: reduce) { .email-link > svg { transition: none; } }
</style>
