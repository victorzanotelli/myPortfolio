<script setup>
import { computed } from 'vue'
import { useSite } from '../useSite'

const { t, link, profile } = useSite()

const destinations = computed(() => {
  const counts = { projects: t.value.projects.length, experiences: t.value.experiences.length }
  return ['projects', 'journey', 'experiences', 'contact'].map((page) => ({
    page,
    label: t.value.pages[page],
    note: t.value.home.notes[page](counts[page]),
  }))
})
</script>

<template>
  <div>
    <section class="container-x hero">
      <div class="hero-text">
        <p class="eyebrow">{{ t.home.eyebrow }}</p>
        <h1 class="title hero-title">
          {{ t.home.title[0] }}
          <em>{{ t.home.title[1] }}</em>
          {{ t.home.title[2] }}
        </h1>
        <p class="intro">{{ t.home.intro }}</p>
        <div class="hero-actions">
          <RouterLink :to="link('projects')" class="btn">{{ t.home.cta }} →</RouterLink>
          <RouterLink :to="link('contact')" class="link">{{ t.home.contact }}</RouterLink>
        </div>
      </div>

      <figure class="photo">
        <img :src="profile.photo" :alt="`Portrait — ${profile.name}`">
        <figcaption>{{ t.home.caption }}</figcaption>
      </figure>
    </section>

    <section class="band">
      <div class="container-x">
        <h2 class="section-title">{{ t.home.next }}</h2>
        <ul class="dest-grid">
          <li v-for="(d, i) in destinations" :key="d.page">
            <RouterLink :to="link(d.page)" class="card dest">
              <span class="card-kicker">0{{ i + 1 }}</span>
              <span class="dest-label">{{ d.label }} <span class="arrow">→</span></span>
              <span class="dest-note">{{ d.note }}</span>
            </RouterLink>
          </li>
        </ul>
      </div>
    </section>
  </div>
</template>
