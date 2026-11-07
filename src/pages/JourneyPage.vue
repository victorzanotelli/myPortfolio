<script setup>
import PageHeader from '../components/PageHeader.vue'
</script>

<template>
  <section class="mx-auto max-w-6xl px-5 py-14 md:px-8 md:py-20">
    <PageHeader
      step="Étape 02 · Le chemin parcouru"
      title="Mon parcours cette année"
    />

    <div class="grid gap-10 md:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] md:gap-14">
      <div class="space-y-5 text-lg leading-relaxed text-ink-soft">
        <p>
          Cette année, j'ai progressé en <strong class="text-ink">JAVA</strong>. J’ai rencontré
          <strong class="text-ink">peu de difficulté</strong>, puis j’ai avancé grâce à
          <strong class="text-ink">au pouvoir de l'amitié</strong>. Je sais maintenant
          <strong class="text-ink">la vie vaut le coup d'être d'être vécu</strong>.
        </p>
      </div>

      <aside class="relative rounded-2xl border border-dashed border-amber/60 bg-card p-7">
        <p class="mb-2 font-hand text-2xl text-amber">Prochaine destination</p>
        <p class="text-lg leading-relaxed">
          Ma prochaine étape est d'approfondir
          <strong>le développement de syteme ce controle de masse</strong>
        </p>
        <svg viewBox="0 0 40 40" class="absolute -right-3 -top-4 h-10 w-10 text-amber" aria-hidden="true">
          <path d="M20 4c-6 0-10 4.5-10 10 0 7.5 10 20 10 20s10-12.5 10-20c0-5.5-4-10-10-10Z" fill="currentColor" />
          <circle cx="20" cy="14" r="4" class="fill-card" />
        </svg>
      </aside>
    </div>
  </section>
</template>
