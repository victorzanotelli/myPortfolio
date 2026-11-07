<script setup>
import { useSite } from '../useSite'

const { t } = useSite()
</script>

<template>
  <section class="container-x page">
    <header class="page-head">
      <p class="eyebrow">{{ t.experiencesPage.eyebrow }}</p>
      <h1 class="title">{{ t.experiencesPage.title }}</h1>
      <p class="intro">{{ t.experiencesPage.intro }}</p>
    </header>

    <ol class="timeline">
      <li v-for="experience in t.experiences" :key="experience.title" class="timeline-item">
        <span class="timeline-dot" aria-hidden="true"></span>
        <p class="label">{{ experience.date }} · {{ experience.place }}</p>
        <h2 class="card-title">{{ experience.title }}</h2>
        <p class="muted">{{ experience.detail }}</p>
      </li>
    </ol>
  </section>
</template>
