<script setup>
import { useSite } from '../useSite'

const { t } = useSite()
</script>

<template>
  <section class="container-x page">
    <header class="page-head">
      <p class="eyebrow">{{ t.journeyPage.eyebrow }}</p>
      <h1 class="title">{{ t.journeyPage.title }}</h1>
    </header>

    <div class="journey">
      <div class="prose">
        <!-- Texte écrit dans src/data.js (peut contenir <strong>) -->
        <p v-for="(paragraph, i) in t.journey" :key="i" v-html="paragraph"></p>
      </div>

      <aside class="card next-step">
        <p class="card-kicker">{{ t.journeyPage.next }}</p>
        <p v-html="t.journeyNext"></p>
      </aside>
    </div>
  </section>
</template>
