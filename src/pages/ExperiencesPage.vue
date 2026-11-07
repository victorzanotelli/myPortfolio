<script setup>
import PageHeader from '../components/PageHeader.vue'
import { experiences } from '../data'
</script>

<template>
  <section class="mx-auto max-w-6xl px-5 py-14 md:px-8 md:py-20">
    <PageHeader
      step="Étape 03 · Hors des sentiers battus"
      title="Autres expériences"
      intro="Le code n’est pas le seul terrain d’apprentissage. Ces expériences m’ont appris à organiser, à m’adapter et à travailler avec les autres."
    />

    <ol class="relative m-0 max-w-3xl border-l-2 border-dashed border-line p-0 pl-8">
      <li v-for="experience in experiences" :key="experience.title" class="relative mb-10 list-none last:mb-0">
        <span class="absolute -left-[2.6rem] top-1 grid h-5 w-5 place-items-center rounded-full border-2 border-amber bg-paper" aria-hidden="true">
          <span class="h-2 w-2 rounded-full bg-amber"></span>
        </span>
        <p class="mb-1 text-xs font-bold uppercase tracking-[.15em] text-amber">
          {{ experience.date }} · {{ experience.place }}
        </p>
        <h2 class="mb-2 font-display text-2xl font-semibold tracking-tight">{{ experience.title }}</h2>
        <p class="leading-relaxed text-ink-soft">{{ experience.detail }}</p>
      </li>
    </ol>
  </section>
</template>
