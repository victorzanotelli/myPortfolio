<script setup>
import { profile, projects, experiences } from '../data'

const destinations = [
  { to: '/projets', label: 'Projets', note: `${projects.length} découvertes à explorer`, icon: 'M4 18 10 6l4 8 3-5 3 9Z' },
  { to: '/parcours', label: 'Parcours', note: 'Ce que j’ai appris en chemin', icon: 'M4 18c4 0 3-8 8-8s4-6 8-6' },
  { to: '/experiences', label: 'Expériences', note: `${experiences.length} terrains hors programme`, icon: 'M12 3v18M3 12h18M6 6l12 12' },
  { to: '/contact', label: 'Contact', note: 'Partons à l’aventure ensemble', icon: 'M3 6h18v12H3ZM3 6l9 7 9-7' },
]
</script>

<template>
  <div>
    <section class="mx-auto grid max-w-6xl items-center gap-12 px-5 pb-16 pt-12 md:grid-cols-[minmax(0,1fr)_300px] md:gap-16 md:px-8 md:pb-24 md:pt-20">
      <div>
        <p class="mb-5 flex items-center gap-3 text-xs font-bold uppercase tracking-[.2em] text-amber">
          <span class="h-px w-8 bg-amber"></span>
          Carnet de bord · 2026-2027
        </p>
        <h1 class="mb-6 font-display text-[clamp(2.75rem,7vw,5.5rem)] font-semibold leading-[1.02] tracking-tight">
          Curieux de nature,
          <em class="font-normal text-sea">développeur</em>
          en exploration.
        </h1>
        <p class="mb-8 max-w-xl text-lg leading-relaxed text-ink-soft">
          {{ profile.school }}. J’apprends en démontant, en testant et en posant beaucoup
          de questions. Voici la carte de ce que j’ai découvert jusqu’ici.
        </p>
        <div class="flex flex-wrap items-center gap-4">
          <RouterLink to="/projets" class="rounded-full bg-ink px-6 py-3 font-semibold text-paper no-underline transition hover:bg-amber">
            Explorer mes projets →
          </RouterLink>
          <RouterLink to="/contact" class="pencil-link font-semibold">Me contacter</RouterLink>
        </div>

        <blockquote class="mt-14 max-w-lg border-l-2 border-amber pl-5">
          <p class="font-display text-xl italic leading-snug">
            « Le véritable voyage de découverte ne consiste pas à chercher de nouveaux paysages,
            mais à avoir de nouveaux yeux. »
          </p>
          <footer class="mt-2 text-sm text-ink-soft">— Marcel Proust</footer>
        </blockquote>
      </div>

      <figure class="relative mx-auto w-[min(260px,75vw)] md:w-full">
        <svg viewBox="0 0 120 120" class="absolute -right-10 -top-12 h-28 w-28 text-sea/70" aria-hidden="true">
          <circle cx="60" cy="60" r="50" fill="none" stroke="currentColor" stroke-width="1" stroke-dasharray="2 4" />
          <circle cx="60" cy="60" r="38" fill="none" stroke="currentColor" stroke-width="1" />
          <text x="60" y="16" text-anchor="middle" font-size="10" fill="currentColor" font-family="Fraunces">N</text>
          <g class="compass-needle">
            <path d="M60 26 66 60 60 94 54 60Z" class="fill-amber" />
            <path d="M60 60 66 60 60 94 54 60Z" fill="currentColor" />
          </g>
        </svg>
        <div class="rotate-2 rounded-sm bg-card p-3 pb-4 shadow-[0_18px_40px_-18px_#1f2a3766] transition hover:rotate-0">
          <img
            :src="profile.photo"
            :alt="`Portrait de ${profile.name}`"
            class="block aspect-[4/5] w-full bg-paper-deep object-cover"
          >
          <figcaption class="mt-3 text-center font-hand text-2xl leading-tight text-ink">
            {{ profile.name }}, quelque part en route
          </figcaption>
        </div>
        <span class="absolute -top-3 left-1/2 h-6 w-20 -translate-x-1/2 -rotate-3 bg-amber/25" aria-hidden="true"></span>
      </figure>
    </section>

    <section class="border-t border-line/80 bg-paper-deep/50">
      <div class="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-20">
        <h2 class="mb-8 font-display text-3xl font-semibold tracking-tight">Où va-t-on ensuite ?</h2>
        <ul class="grid gap-4 p-0 sm:grid-cols-2 lg:grid-cols-4">
          <li v-for="(d, i) in destinations" :key="d.to" class="list-none">
            <RouterLink
              :to="d.to"
              class="group flex h-full flex-col justify-between rounded-2xl border border-line bg-card p-6 no-underline transition hover:-translate-y-1 hover:border-amber hover:shadow-lg"
            >
              <div class="mb-10 flex items-start justify-between">
                <svg viewBox="0 0 24 24" class="h-7 w-7 text-sea" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round" aria-hidden="true">
                  <path :d="d.icon" />
                </svg>
                <span class="font-hand text-xl text-ink-soft">n°0{{ i + 1 }}</span>
              </div>
              <div>
                <p class="font-display text-2xl font-semibold">{{ d.label }} <span class="inline-block text-amber transition group-hover:translate-x-1">→</span></p>
                <p class="mt-1 text-sm text-ink-soft">{{ d.note }}</p>
              </div>
            </RouterLink>
          </li>
        </ul>
      </div>
    </section>
  </div>
</template>
