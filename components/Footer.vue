<template>
  <footer class="site-footer">
    <div class="site-container footer-main">
      <div class="footer-person"><NuxtLink to="/">Raditya<span>.</span></NuxtLink><p>Full-stack development · Digital transformation · Electronics</p></div>
      <div class="footer-links"><a :href="profile.github" target="_blank" rel="noopener noreferrer">GitHub ↗</a><a :href="'mailto:' + profile.email">Email ↗</a><a :href="cvPath" download>Download CV ↓</a></div>
    </div>
    <div class="site-container footer-bottom"><span>© {{ year }} Raditya Rifqi Pratama</span><span>Built with Nuxt &amp; TypeScript</span><span class="footer-location"><i aria-hidden="true"></i> Indonesia · UTC+7</span></div>
  </footer>
</template>

<script setup lang="ts">
import { profile } from '~/data/portfolio';
const year = new Date().getFullYear();
const cvPath = useRuntimeConfig().app.baseURL + profile.cvUrl.replace(/^\//, '');
</script>

<style scoped>
.site-footer { border-top: 1px solid var(--line); background: #0a1320; }
.footer-main { display: flex; align-items: center; justify-content: space-between; gap: 32px; padding-block: 32px; }
.footer-person > a { font: 700 22px/1.3 var(--font-mono); letter-spacing: -.5px; }
.footer-person > a span { color: var(--green); }
.footer-person p { color: var(--muted); margin: 8px 0 0; font-size: 12px; }
.footer-links { display: flex; gap: 26px; font-size: 12px; }
.footer-links a:hover { color: var(--green); text-decoration: underline; text-underline-offset: 4px; }
.footer-bottom { display: flex; justify-content: space-between; gap: 20px; padding-block: 18px; border-top: 1px solid var(--line); font: 10px/1.7 var(--font-mono); color: var(--muted); }
.footer-location { display: flex; align-items: center; gap: 8px; }
.footer-location i { width: 5px; height: 5px; border-radius: 50%; background: var(--green); }
@media (max-width: 700px) { .footer-main { flex-direction: column; align-items: flex-start; gap: 24px; padding-block: 30px; } .footer-bottom { flex-wrap: wrap; gap: 8px 24px; } .footer-bottom > span:nth-child(2) { display: none; } .footer-links { gap: 24px; } }
</style>
