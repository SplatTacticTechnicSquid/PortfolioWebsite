<template>
  <header class="site-header" @keydown.esc="closeMenu">
    <div class="site-container nav-inner">
      <NuxtLink to="/" class="brand" aria-label="Raditya Pratama, home" @click="menuOpen = false">
        <span class="brand-symbol" aria-hidden="true">r<span>.</span></span>
        <span class="brand-name">raditya<span>pratama</span></span>
      </NuxtLink>
      <nav class="desktop-nav" aria-label="Main navigation">
        <NuxtLink v-for="link in links" :key="link.to" :to="link.to" :class="{ 'is-active': isActive(link.to) }" :aria-current="isActive(link.to) ? 'page' : undefined">{{ link.label }}</NuxtLink>
      </nav>
      <a class="nav-contact" :href="'mailto:' + profile.email">Let’s talk <span aria-hidden="true">↗</span></a>
      <button class="menu-toggle" :aria-expanded="menuOpen" aria-controls="mobile-navigation" :aria-label="menuOpen ? 'Close navigation' : 'Open navigation'" @click="menuOpen = !menuOpen">
        <span :class="{ open: menuOpen }"></span><span :class="{ open: menuOpen }"></span>
      </button>
    </div>
    <nav v-if="menuOpen" id="mobile-navigation" class="mobile-nav site-container" aria-label="Mobile navigation">
      <NuxtLink v-for="link in links" :key="link.to" :to="link.to" :aria-current="isActive(link.to) ? 'page' : undefined" @click="menuOpen = false">{{ link.label }}<span aria-hidden="true">↗</span></NuxtLink>
      <a :href="'mailto:' + profile.email">Let’s talk <span aria-hidden="true">↗</span></a>
    </nav>
  </header>
</template>

<script setup lang="ts">
import { profile } from '~/data/portfolio';
const route = useRoute();
const menuOpen = ref(false);
const links = [{ to: '/', label: 'Home' }, { to: '/projects', label: 'Work' }, { to: '/about', label: 'About' }, { to: '/contact', label: 'Contact' }];
const isActive = (path: string) => path === '/' ? route.path === '/' : route.path.startsWith(path);
watch(() => route.path, () => { menuOpen.value = false; });
function closeMenu() {
  menuOpen.value = false;
  document.querySelector<HTMLButtonElement>('.menu-toggle')?.focus();
}
</script>

<style scoped>
.site-header { position: sticky; top: 0; z-index: 40; background: rgb(244 243 237 / 94%); backdrop-filter: blur(16px); border-bottom: 1px solid var(--line); }
.nav-inner { display: flex; align-items: center; justify-content: space-between; height: 86px; gap: 32px; }
.brand { display: inline-flex; align-items: center; gap: 12px; }
.brand-symbol { display: flex; align-items: center; justify-content: center; width: 35px; height: 38px; background: var(--green); border-radius: 4px; color: var(--paper); font: 600 34px/.8 Georgia, serif; letter-spacing: -5px; padding-right: 4px; padding-bottom: 6px; }
.brand-symbol span { color: #c5d5a6; }
.brand-name { font-size: 17px; letter-spacing: -.8px; font-weight: 700; }
.brand-name > span { font-weight: 400; margin-left: 3px; }
.desktop-nav { display: flex; gap: 33px; margin-left: auto; margin-right: auto; padding-left: 20px; }
.desktop-nav a { position: relative; font-size: 12px; color: var(--muted); padding: 10px 0; }
.desktop-nav a:hover, .desktop-nav a.is-active { color: var(--ink); }
.desktop-nav a.is-active::after { content: ''; position: absolute; width: 4px; height: 4px; background: var(--green); border-radius: 50%; bottom: 0; left: calc(50% - 2px); }
.nav-contact { font-size: 12px; font-weight: 600; display: inline-flex; gap: 27px; align-items: center; border: 1px solid var(--line); padding: 9px 16px; border-radius: 4px; }
.nav-contact:hover { background: var(--sage); border-color: var(--green); }
.menu-toggle { display: none; }
.mobile-nav { padding-block: 10px 24px; }
.mobile-nav a { display: flex; justify-content: space-between; padding: 14px 0; border-bottom: 1px solid var(--line); font-size: 19px; }
.mobile-nav a[aria-current] { color: var(--green); font-weight: 600; }
@media (min-width: 761px) { .mobile-nav { display: none; } }
@media (max-width: 760px) {
  .nav-inner { height: 72px; gap: 14px; }
  .desktop-nav, .nav-contact { display: none; }
  .brand-name { font-size: 16px; }
  .menu-toggle { display: flex; flex-direction: column; justify-content: center; align-items: center; gap: 6px; width: 44px; height: 44px; background: transparent; border: 1px solid var(--line); border-radius: 4px; }
  .menu-toggle span { width: 18px; height: 1px; background: var(--ink); transition: transform .2s; }
  .menu-toggle span.open:first-child { transform: translateY(3.5px) rotate(45deg); }
  .menu-toggle span.open:last-child { transform: translateY(-3.5px) rotate(-45deg); }
}
</style>
