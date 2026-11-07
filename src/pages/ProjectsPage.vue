<script setup>
import { useSite } from '../useSite'

const { t } = useSite()
</script>

<template>
  <section class="container-x page">
    <header class="page-head">
      <p class="eyebrow">{{ t.projectsPage.eyebrow }}</p>
      <h1 class="title">{{ t.projectsPage.title }}</h1>
      <p class="intro">{{ t.projectsPage.intro }}</p>
    </header>

    <div class="grid gap-6 md:grid-cols-2">
      <article v-for="(project, index) in t.projects" :key="project.title" class="card project">
        <p class="card-kicker">{{ t.projectsPage.kicker }}{{ String(index + 1).padStart(2, '0') }}</p>
        <h2 class="card-title">{{ project.title }}</h2>

        <dl class="facts">
          <div>
            <dt class="label">{{ t.projectsPage.context }}</dt>
            <dd>{{ project.context }}</dd>
          </div>
          <div>
            <dt class="label">{{ t.projectsPage.objective }}</dt>
            <dd>{{ project.objective }}</dd>
          </div>
          <div>
            <dt class="label">{{ t.projectsPage.skills }}</dt>
            <dd class="tags">
              <span v-for="skill in project.skills" :key="skill" class="tag">{{ skill }}</span>
            </dd>
          </div>
        </dl>

        <p class="note">
          <span class="note-label">{{ t.projectsPage.reflection }}</span>
          {{ project.reflection }}
        </p>

        <div class="card-links">
          <a v-if="project.code" :href="project.code" target="_blank" rel="noreferrer" class="link">{{ t.projectsPage.code }} ↗</a>
          <span v-else class="muted">{{ t.projectsPage.codeMissing }}</span>
          <a v-if="project.demo" :href="project.demo" target="_blank" rel="noreferrer" class="link">{{ t.projectsPage.demo }} ↗</a>
          <span v-else class="muted">{{ t.projectsPage.demoMissing }}</span>
        </div>
      </article>
    </div>
  </section>
</template>
