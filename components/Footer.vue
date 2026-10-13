<template>
  <footer class="site-footer">
    <div class="site-container footer-main">
      <div class="footer-person"><NuxtLink to="/">Raditya Rifqi Pratama<span aria-hidden="true">↗</span></NuxtLink><p>Connecting software, systems, and the physical world.</p></div>
      <div class="footer-links"><a :href="profile.github" target="_blank" rel="noopener noreferrer">GitHub ↗</a><a :href="'mailto:' + profile.email">Email ↗</a><a :href="cvPath" download>Résumé ↓</a></div>
    </div>
    <div class="site-container footer-bottom"><span>© {{ year }} Raditya Pratama</span><span>Built with curiosity. Crafted with Nuxt.</span><span class="footer-location"><i aria-hidden="true"></i> Indonesia · UTC+7</span></div>
  </footer>
</template>

<script setup lang="ts">
import { profile } from '~/data/portfolio';
const year = new Date().getFullYear();
const cvPath = useRuntimeConfig().app.baseURL + profile.cvUrl.replace(/^\//, '');
</script>

<style scoped>
.site-footer { border-top: 1px solid var(--line); margin-top: 30px; }
.footer-main { display: flex; align-items: center; justify-content: space-between; gap: 32px; padding-block: 40px; }
.footer-person > a { font-size: 17px; font-weight: 600; letter-spacing: -.4px; display: inline-flex; gap: 18px; align-items: center; }
.footer-person > a span { color: var(--green); }
.footer-person p { color: var(--muted); margin: 7px 0 0; font-size: 12px; }
.footer-links { display: flex; gap: 28px; font-size: 12px; }
.footer-links a:hover { color: var(--green); text-decoration: underline; text-underline-offset: 4px; }
.footer-bottom { display: flex; justify-content: space-between; gap: 20px; padding-block: 20px; border-top: 1px solid var(--line); font: 10px/1.7 var(--font-mono); color: var(--muted); }
.footer-location { display: flex; align-items: center; gap: 8px; }
.footer-location i { width: 5px; height: 5px; border-radius: 50%; background: var(--green); }
@media (max-width: 700px) { .footer-main { flex-direction: column; align-items: flex-start; gap: 24px; padding-block: 32px; } .footer-bottom { flex-wrap: wrap; gap: 8px 24px; } .footer-bottom > span:nth-child(2) { display: none; } .footer-links { gap: 24px; } }
</style>
