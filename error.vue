<template>
  <main class="error-page">
    <a class="error-brand" :href="homePath">raditya pratama.</a>
    <span class="eyebrow">A small detour</span>
    <p class="error-code">{{ error?.statusCode || 500 }}</p>
    <h1>{{ error?.statusCode === 404 ? 'This page is off the map.' : 'Something didn’t quite connect.' }}</h1>
    <p>{{ error?.statusCode === 404 ? 'The page you’re looking for may have moved. Let’s get you back to the work.' : 'Please try again, or head back to the homepage.' }}</p>
    <button class="button button-primary" @click="clearError({ redirect: '/' })">Back to home <span aria-hidden="true">↗</span></button>
  </main>
</template>

<script setup lang="ts">
import type { NuxtError } from '#app';
defineProps<{ error: NuxtError }>();
const homePath = useRuntimeConfig().app.baseURL;
useHead({ title: 'Page unavailable — Raditya Pratama', meta: [{ name: 'robots', content: 'noindex' }] });
</script>

<style scoped>
.error-page { min-height: 100vh; display: flex; flex-direction: column; align-items: center; justify-content: center; text-align: center; padding: 40px 24px; }
.error-brand { font-weight: 700; letter-spacing: -.5px; margin-bottom: 60px; }
.error-code { font: italic clamp(100px, 20vw, 180px)/1 Georgia, serif; letter-spacing: -.08em; color: var(--green); margin: 0 0 24px; }
h1 { font-size: clamp(26px, 4vw, 40px); font-weight: 500; letter-spacing: -.04em; line-height: 1.2; }
h1 + p { color: var(--muted); max-width: 470px; margin: 18px 0 28px; }
</style>
