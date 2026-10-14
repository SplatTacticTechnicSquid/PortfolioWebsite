<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from 'vue'

const glow = ref<HTMLDivElement | null>(null)
let removeListeners: (() => void) | undefined

onMounted(() => {
  const element = glow.value
  if (!element) return

  const enabled = window.matchMedia('(hover: hover) and (pointer: fine) and (prefers-reduced-motion: no-preference)')
  let frame = 0
  let x = 0
  let y = 0

  const hide = () => {
    cancelAnimationFrame(frame)
    frame = 0
    element.style.opacity = '0'
  }

  const move = (event: PointerEvent) => {
    if (!enabled.matches || event.pointerType !== 'mouse') {
      hide()
      return
    }

    x = event.clientX
    y = event.clientY
    if (frame) return

    frame = requestAnimationFrame(() => {
      element.style.setProperty('--cursor-x', `${x}px`)
      element.style.setProperty('--cursor-y', `${y}px`)
      const distance = Math.hypot(x - window.innerWidth / 2, y - window.innerHeight / 2)
      element.style.setProperty('--glow-size', `${Math.max(200 - distance, 100)}px`)
      element.style.opacity = '1'
      frame = 0
    })
  }

  const updatePreference = () => { if (!enabled.matches) hide() }
  const hideWhenInactive = () => { if (document.hidden) hide() }

  window.addEventListener('pointermove', move, { passive: true })
  document.documentElement.addEventListener('pointerleave', hide)
  window.addEventListener('blur', hide)
  document.addEventListener('visibilitychange', hideWhenInactive)
  enabled.addEventListener('change', updatePreference)

  removeListeners = () => {
    hide()
    window.removeEventListener('pointermove', move)
    document.documentElement.removeEventListener('pointerleave', hide)
    window.removeEventListener('blur', hide)
    document.removeEventListener('visibilitychange', hideWhenInactive)
    enabled.removeEventListener('change', updatePreference)
  }
})

onBeforeUnmount(() => removeListeners?.())
</script>

<template>
  <div ref="glow" class="cursor-glow" aria-hidden="true" />
</template>

<style scoped>
.cursor-glow {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 40;
  width: var(--glow-size, 100px);
  height: var(--glow-size, 100px);
  border-radius: 50%;
  pointer-events: none;
  background: oklch(0.723 0.219 149.579 / 30%);
  filter: blur(64px);
  mix-blend-mode: screen;
  opacity: 0;
  transform: translate3d(var(--cursor-x, -1000px), var(--cursor-y, -1000px), 0) translate(-50%, -50%);
  transition: opacity 180ms ease;
  will-change: transform, opacity;
}

@media (hover: none), (pointer: coarse), (prefers-reduced-motion: reduce) {
  .cursor-glow { display: none; }
}
</style>
