<template>
  <header class="site-header" @keydown.esc="closeMenu">
    <div class="site-container nav-inner">
      <NuxtLink to="/" class="brand" aria-label="Raditya Pratama, home" @click="menuOpen = false">
        <span class="brand-code" aria-hidden="true">&lt;</span>Raditya<span class="brand-dot">.</span><span class="brand-code" aria-hidden="true">/&gt;</span>
      </NuxtLink>
      <nav class="desktop-nav" aria-label="Main navigation">
        <NuxtLink v-for="link in links" :key="link.to" :to="link.to" :class="{ 'is-active': isActive(link.to) }" :aria-current="isActive(link.to) ? 'page' : undefined">{{ link.label }}</NuxtLink>
      </nav>
      <a class="nav-contact" :href="cvPath" download>Download CV <svg viewBox="0 0 20 20" aria-hidden="true"><path d="M10 3v10m-4-4 4 4 4-4M4 13v4h12v-4" /></svg></a>
      <button class="menu-toggle" :aria-expanded="menuOpen" aria-controls="mobile-navigation" :aria-label="menuOpen ? 'Close navigation' : 'Open navigation'" @click="menuOpen = !menuOpen">
        <span :class="{ open: menuOpen }"></span><span :class="{ open: menuOpen }"></span>
      </button>
    </div>
    <nav v-if="menuOpen" id="mobile-navigation" class="mobile-nav site-container" aria-label="Mobile navigation">
      <NuxtLink v-for="link in links" :key="link.to" :to="link.to" :aria-current="isActive(link.to) ? 'page' : undefined" @click="menuOpen = false">{{ link.label }}<span aria-hidden="true">↗</span></NuxtLink>
      <a :href="cvPath" download>Download CV <span aria-hidden="true">↓</span></a>
    </nav>
  </header>
</template>

<script setup lang="ts">
import { profile } from '~/data/portfolio';
const route = useRoute();
const menuOpen = ref(false);
const cvPath = useRuntimeConfig().app.baseURL + profile.cvUrl.replace(/^\//, '');
const links = [{ to: '/', label: 'Home' }, { to: '/projects', label: 'Projects' }, { to: '/about', label: 'About' }, { to: '/contact', label: 'Contact' }];
const isActive = (path: string) => path === '/' ? route.path === '/' : route.path.startsWith(path);
watch(() => route.path, () => { menuOpen.value = false; });
function closeMenu() {
  menuOpen.value = false;
  document.querySelector<HTMLButtonElement>('.menu-toggle')?.focus();
}
</script>

<style scoped>
.site-header { position: sticky; top: 0; z-index: 40; background: rgb(8 15 26 / 90%); backdrop-filter: blur(20px); border-bottom: 1px solid #233349b0; }
.nav-inner { display: flex; align-items: center; justify-content: space-between; height: 80px; gap: 30px; }
.brand { display: inline-flex; align-items: center; font: 700 22px/1.3 var(--font-mono); letter-spacing: -1px; }
.brand-code { color: var(--green); font-size: 18px; font-weight: 400; margin-right: 7px; }
.brand-code:last-child { margin: 0 0 0 7px; }
.brand-dot { color: var(--green); }
.desktop-nav { display: flex; gap: 32px; }
.desktop-nav a { position: relative; font-size: 13px; color: #a9b5c7; padding: 27px 0; }
.desktop-nav a:hover, .desktop-nav a.is-active { color: var(--green); }
.desktop-nav a.is-active::after { content: ''; position: absolute; height: 2px; background: var(--green); bottom: 0; inset-inline: 0; }
.nav-contact { color: var(--green); font-size: 12px; font-weight: 600; display: inline-flex; gap: 13px; align-items: center; border: 1px solid #38664f; background: #12302540; padding: 10px 16px; border-radius: 6px; }
.nav-contact:hover { background: var(--sage); border-color: var(--green); }
.nav-contact svg { width: 17px; fill: none; stroke: currentColor; stroke-width: 1.5; }
.menu-toggle { display: none; }
.mobile-nav { padding-block: 10px 24px; }
.mobile-nav a { display: flex; justify-content: space-between; padding: 14px 0; border-bottom: 1px solid var(--line); font-size: 17px; }
.mobile-nav a[aria-current] { color: var(--green); font-weight: 600; }
@media (min-width: 761px) { .mobile-nav { display: none; } }
@media (max-width: 760px) {
  .nav-inner { height: 70px; gap: 14px; }
  .desktop-nav, .nav-contact { display: none; }
  .brand { font-size: 21px; }
  .menu-toggle { display: flex; flex-direction: column; justify-content: center; align-items: center; gap: 6px; width: 44px; height: 44px; background: var(--surface); border: 1px solid var(--line); border-radius: 6px; }
  .menu-toggle span { width: 18px; height: 1px; background: var(--ink); transition: transform .2s; }
  .menu-toggle span.open:first-child { transform: translateY(3.5px) rotate(45deg); }
  .menu-toggle span.open:last-child { transform: translateY(-3.5px) rotate(-45deg); }
}
</style>
