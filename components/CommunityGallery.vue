<script setup lang="ts">
import { computed, nextTick, onBeforeUnmount, ref } from 'vue'
import { communityMoments, type CommunityPhoto } from '~/data/community'

const baseURL = useRuntimeConfig().app.baseURL.replace(/\/$/, '')
const imageURL = (path: string) => `${baseURL}/images/events/${path}`
const previewURL = (photo: CommunityPhoto, width: number) => imageURL(`optimized/${photo.preview}-${width}.webp`)
const previewSet = (photo: CommunityPhoto) => [640, 960, 1600].map(width => `${previewURL(photo, width)} ${Math.min(width, photo.width)}w`).join(', ')
const dialog = ref<HTMLDialogElement | null>(null)
const selectedMoment = ref(0)
const selectedPhoto = ref(0)
const isOpen = ref(false)
const moment = computed(() => communityMoments[selectedMoment.value]!)
const photo = computed(() => moment.value.photos[selectedPhoto.value]!)
let trigger: HTMLElement | null = null
let previousOverflow = ''

async function openGallery(index: number, event: MouseEvent) {
  if (isOpen.value) return
  selectedMoment.value = index
  selectedPhoto.value = 0
  trigger = event.currentTarget as HTMLElement
  isOpen.value = true
  previousOverflow = document.documentElement.style.overflow
  document.documentElement.style.overflow = 'hidden'
  await nextTick()
  dialog.value?.showModal()
}

function finishClose() {
  if (!isOpen.value) return
  isOpen.value = false
  document.documentElement.style.overflow = previousOverflow
  trigger?.focus({ preventScroll: true })
}

function movePhoto(direction: number) {
  selectedPhoto.value = (selectedPhoto.value + direction + moment.value.photos.length) % moment.value.photos.length
}

onBeforeUnmount(() => {
  if (isOpen.value) document.documentElement.style.overflow = previousOverflow
})
</script>

<template>
  <div class="community-gallery">
    <p class="gallery-intro">A few moments from the workshops, conversations, and communities I’ve been part of.</p>
    <div class="community-photo-grid">
      <article v-for="(item, index) in communityMoments" :key="item.id" class="community-photo-card">
        <button type="button" class="photo-trigger" :aria-label="`View ${item.photos.length === 1 ? 'photo' : 'photos'} from ${item.title}`" aria-haspopup="dialog" @click="openGallery(index, $event)">
          <img
            :src="previewURL(item.photos[0]!, 960)"
            :srcset="previewSet(item.photos[0]!)"
            sizes="(max-width: 700px) calc(100vw - 36px), (max-width: 960px) calc((100vw - 64px) / 2), 380px"
            :width="item.photos[0]!.width" :height="item.photos[0]!.height" :alt="item.photos[0]!.alt"
            loading="lazy" decoding="async"
          />
          <span class="photo-count">{{ item.photos.length }} {{ item.photos.length === 1 ? 'photo' : 'photos' }}</span>
          <span class="photo-open" aria-hidden="true">View photos <span>↗</span></span>
        </button>
        <div class="photo-caption">
          <p class="photo-meta">{{ item.year }} <span aria-hidden="true">/</span> {{ item.role }}</p>
          <h3>{{ item.title }}</h3>
          <p>{{ item.description }}</p>
        </div>
      </article>
    </div>
    <dialog ref="dialog" class="community-lightbox" aria-labelledby="community-photo-title" @close="finishClose" @click.self="dialog?.close()" @keydown.left.prevent="movePhoto(-1)" @keydown.right.prevent="movePhoto(1)">
      <div v-if="isOpen" class="lightbox-content">
        <div class="lightbox-header"><div><p class="photo-meta">{{ moment.year }} / {{ moment.role }}</p><h3 id="community-photo-title">{{ moment.title }}</h3></div><button class="lightbox-close" type="button" autofocus aria-label="Close photo viewer" @click="dialog?.close()">×</button></div>
        <figure>
          <img :src="previewURL(photo, 1600)" :width="photo.width" :height="photo.height" :alt="photo.alt" />
          <figcaption><p aria-live="polite">{{ photo.alt }} <span class="lightbox-counter">{{ selectedPhoto + 1 }} / {{ moment.photos.length }}</span></p><a :href="imageURL(photo.original)" target="_blank" rel="noopener noreferrer">Open original <span aria-hidden="true">↗</span><span class="visually-hidden"> (opens in a new tab)</span></a></figcaption>
        </figure>
        <div v-if="moment.photos.length > 1" class="photo-navigation" aria-label="Photo navigation"><button type="button" @click="movePhoto(-1)">← Previous</button><button type="button" @click="movePhoto(1)">Next →</button></div>
      </div>
    </dialog>
  </div>
</template>

<style scoped>
.community-gallery { margin-bottom: 32px; }
.gallery-intro { margin: 0 0 22px; max-width: 640px; color: var(--muted); font-size: 14px; line-height: 1.8; }
.community-photo-grid { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 20px; }
.community-photo-card { min-width: 0; overflow: hidden; border: 1px solid var(--line); border-radius: 12px; background: var(--surface); }
.photo-trigger { position: relative; display: block; width: 100%; padding: 0; border: 0; background: #142333; color: white; text-align: left; cursor: pointer; }
.photo-trigger::after { position: absolute; inset: 45% 0 0; content: ''; background: linear-gradient(transparent, #030b16b3); pointer-events: none; }
.photo-trigger img { display: block; width: 100%; height: auto; aspect-ratio: 4 / 3; object-fit: cover; object-position: center; transition: transform .25s ease; }
.photo-trigger:hover img { transform: scale(1.025); }
.photo-trigger:focus-visible { z-index: 1; outline: 3px solid var(--green); outline-offset: -4px; }
.photo-count { position: absolute; z-index: 1; top: 13px; right: 13px; padding: 4px 9px; border: 1px solid #ffffff30; border-radius: 5px; background: #080f1ad9; font: 10px/1.7 ui-monospace, Consolas, monospace; }
.photo-open { position: absolute; z-index: 1; bottom: 15px; left: 18px; right: 18px; display: flex; align-items: center; justify-content: space-between; font-size: 12px; font-weight: 550; }
.photo-open > span { font-size: 20px; }
.photo-caption { padding: 21px 22px 23px; }
.photo-meta { margin: 0; color: var(--green); font: 10px/1.8 ui-monospace, Consolas, monospace; }
.photo-meta > span { margin-inline: 6px; opacity: .6; }
.photo-caption h3 { margin: 10px 0 9px; font-size: 18px; line-height: 1.4; font-weight: 650; letter-spacing: -.025em; }
.photo-caption > p:last-child { margin: 0; color: var(--muted); font-size: 12px; line-height: 1.85; }
.community-lightbox { width: min(1100px, calc(100vw - 40px)); max-height: calc(100dvh - 40px); margin: auto; padding: 0; border: 1px solid var(--line); border-radius: 14px; background: var(--paper); color: var(--ink); overflow: auto; overscroll-behavior: contain; box-shadow: 0 25px 100px #0009; }
.community-lightbox::backdrop { background: #02070ee8; }
.lightbox-content { padding: 23px; }
.lightbox-header { display: flex; align-items: center; justify-content: space-between; gap: 20px; margin-bottom: 20px; }
.lightbox-header h3 { margin: 6px 0 0; font-size: 22px; font-weight: 650; line-height: 1.4; letter-spacing: -.025em; }
.lightbox-close { display: grid; place-items: center; flex: 0 0 44px; width: 44px; height: 44px; padding: 0; border: 1px solid var(--line); border-radius: 7px; background: var(--surface); color: var(--ink); font-size: 28px; line-height: 1; }
.lightbox-content figure { margin: 0; }
.lightbox-content figure > img { display: block; width: 100%; height: auto; max-height: 68dvh; object-fit: contain; background: #060c14; border-radius: 6px; }
.lightbox-content figcaption { display: flex; justify-content: space-between; align-items: baseline; gap: 20px; margin-top: 17px; color: var(--muted); font-size: 12px; line-height: 1.7; }
.lightbox-content figcaption p { margin: 0; }
.lightbox-counter { display: inline-block; margin-left: 10px; white-space: nowrap; color: var(--green); }
.lightbox-content figcaption a { flex-shrink: 0; padding: 8px 0; color: var(--green); text-decoration: underline; text-underline-offset: 4px; }
.photo-navigation { display: flex; justify-content: space-between; gap: 14px; margin-top: 14px; }
.photo-navigation button { min-height: 44px; padding: 9px 17px; border: 1px solid var(--line); border-radius: 6px; background: var(--surface); color: var(--ink); font-size: 12px; }
.lightbox-close:hover, .photo-navigation button:hover { border-color: var(--green); }
.visually-hidden { position: absolute; width: 1px; height: 1px; padding: 0; margin: -1px; overflow: hidden; clip: rect(0, 0, 0, 0); white-space: nowrap; border: 0; }
@media (max-width: 960px) { .community-photo-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); } }
@media (max-width: 700px) {
  .community-photo-grid { grid-template-columns: 1fr; gap: 18px; }
  .community-lightbox { width: calc(100vw - 24px); max-height: calc(100dvh - 24px); border-radius: 10px; }
  .lightbox-content { padding: 15px; }
  .lightbox-header { margin-bottom: 15px; }
  .lightbox-header h3 { font-size: 18px; }
  .lightbox-content figcaption { flex-direction: column; gap: 4px; }
}
@media (prefers-reduced-motion: reduce) { .photo-trigger img { transition: none; } .photo-trigger:hover img { transform: none; } }
</style>
