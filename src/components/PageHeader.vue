<script setup>
defineProps({
  step: { type: String, required: true },
  title: { type: String, required: true },
  intro: { type: String, default: '' },
})
</script>

<template>
  <header class="mb-12 max-w-3xl md:mb-16">
    <p class="mb-4 flex items-center gap-3 text-xs font-bold uppercase tracking-[.2em] text-amber">
      <span class="h-px w-8 bg-amber"></span>
      {{ step }}
    </p>
    <h1 class="mb-5 font-display text-5xl font-semibold leading-[1.05] tracking-tight md:text-7xl">
      {{ title }}
    </h1>
    <p v-if="intro" class="max-w-2xl text-lg leading-relaxed text-ink-soft">{{ intro }}</p>
  </header>
</template>
