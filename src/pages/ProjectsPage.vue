<script setup>
import PageHeader from '../components/PageHeader.vue'
import { projects } from '../data'
</script>

<template>
  <section class="mx-auto max-w-6xl px-5 py-14 md:px-8 md:py-20">
    <PageHeader
      step="Étape 01 · Découvertes"
      title="Projets réalisés"
      intro="Chaque projet a commencé par une question. Voici ce que j’ai trouvé en cherchant la réponse."
    />

    <div class="grid gap-6 md:grid-cols-2">
      <article
        v-for="(project, index) in projects"
        :key="project.title"
        class="relative min-w-0 rounded-2xl border border-line bg-card p-7 md:p-9"
      >
        <p class="mb-2 font-hand text-2xl text-amber">Découverte n°{{ String(index + 1).padStart(2, '0') }}</p>
        <h2 class="mb-6 break-words font-display text-3xl font-semibold tracking-tight">{{ project.title }}</h2>

        <dl class="grid gap-4 text-[0.97rem] leading-relaxed">
          <div>
            <dt class="text-xs font-bold uppercase tracking-[.15em] text-ink-soft">Point de départ</dt>
            <dd class="m-0">{{ project.context }}</dd>
          </div>
          <div>
            <dt class="text-xs font-bold uppercase tracking-[.15em] text-ink-soft">Cap visé</dt>
            <dd class="m-0">{{ project.objective }}</dd>
          </div>
          <div>
            <dt class="mb-2 text-xs font-bold uppercase tracking-[.15em] text-ink-soft">Ce que j’ai mobilisé</dt>
            <dd class="m-0 flex flex-wrap gap-2">
              <span v-for="skill in project.skills" :key="skill" class="rounded-full border border-sea/30 bg-sea/10 px-3 py-1 text-sm text-sea">
                {{ skill }}
              </span>
            </dd>
          </div>
        </dl>

        <p class="mt-6 rounded-xl bg-paper p-4 leading-relaxed">
          <span class="mb-1 block font-hand text-xl text-sea">Note de terrain :</span>
          {{ project.reflection }}
        </p>

        <div class="mt-6 flex flex-wrap gap-5 text-sm font-semibold">
          <a v-if="project.code" :href="project.code" target="_blank" rel="noreferrer" class="pencil-link">Code source ↗</a>
          <span v-else class="text-ink-soft/70">Lien du code à ajouter</span>
          <a v-if="project.demo" :href="project.demo" target="_blank" rel="noreferrer" class="pencil-link">Démo ↗</a>
          <span v-else class="text-ink-soft/70">Lien de démo à ajouter</span>
        </div>
      </article>
    </div>
  </section>
</template>
