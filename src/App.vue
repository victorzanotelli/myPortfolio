<script setup>
import { ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import { profile } from './data'

const menuOpen = ref(false)
const route = useRoute()
const year = new Date().getFullYear()

const links = [
  { to: '/projets', label: 'Projets' },
  { to: '/parcours', label: 'Parcours' },
  { to: '/experiences', label: 'Expériences' },
  { to: '/contact', label: 'Contact' },
]

watch(() => route.fullPath, () => { menuOpen.value = false })
</script>

<template>
  <div class="topo flex min-h-screen flex-col bg-paper text-ink">
    <a href="#contenu" class="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:bg-ink focus:px-3 focus:py-2 focus:text-paper">
      Aller au contenu
    </a>

    <header class="sticky top-0 z-30 border-b border-line/80 bg-paper/85 backdrop-blur">
      <div class="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 md:px-8">
        <RouterLink to="/" class="group flex items-center gap-3 no-underline">
          <svg viewBox="0 0 32 32" class="h-8 w-8 text-amber transition-transform duration-500 group-hover:rotate-45" aria-hidden="true">
            <circle cx="16" cy="16" r="14" fill="none" stroke="currentColor" stroke-width="1.5" />
            <path d="M16 5 19 16 16 27 13 16Z" fill="currentColor" />
            <path d="M16 5 19 16H13Z" class="fill-ink" />
          </svg>
          <span class="font-display text-lg font-semibold tracking-tight">
            {{ profile.name }}<span class="text-ink-soft font-normal italic"> · carnet de bord</span>
          </span>
        </RouterLink>

        <button
          class="rounded-full border border-ink/30 px-4 py-2 text-sm font-semibold md:hidden"
          type="button"
          :aria-expanded="menuOpen"
          aria-controls="navigation"
          @click="menuOpen = !menuOpen"
        >
          {{ menuOpen ? 'Fermer' : 'Menu' }}
        </button>

        <nav
          id="navigation"
          aria-label="Navigation principale"
          class="absolute right-5 top-[4.25rem] flex-col gap-4 rounded-2xl border border-line bg-card p-5 shadow-lg md:static md:flex md:flex-row md:gap-7 md:rounded-none md:border-0 md:bg-transparent md:p-0 md:shadow-none"
          :class="menuOpen ? 'flex' : 'hidden md:flex'"
        >
          <RouterLink
            v-for="link in links"
            :key="link.to"
            :to="link.to"
            class="pencil-link text-sm font-semibold"
          >
            {{ link.label }}
          </RouterLink>
        </nav>
      </div>
    </header>

    <main id="contenu" class="flex-1">
      <RouterView v-slot="{ Component }">
        <Transition name="page" mode="out-in">
          <component :is="Component" :key="route.path" />
        </Transition>
      </RouterView>
    </main>

    <footer class="border-t border-line/80">
      <div class="mx-auto flex max-w-6xl flex-col gap-2 px-5 py-8 text-sm text-ink-soft md:flex-row md:items-center md:justify-between md:px-8">
        <p>© {{ year }} {{ profile.name }} — toujours en exploration.</p>
        <p class="font-hand text-xl text-sea">« Et si on essayait autrement ? »</p>
      </div>
    </footer>
  </div>
</template>
