<script setup>
import { ref } from 'vue'
import PageHeader from '../components/PageHeader.vue'
import { profile } from '../data'

const email = ref('')
const message = ref('')

function sendEmail() {
  const subject = encodeURIComponent('Message depuis mon portfolio')
  const body = encodeURIComponent('Mon adresse : ' + email.value + '\n\n' + message.value)
  window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`
}
</script>

<template>
  <section class="mx-auto max-w-6xl px-5 py-14 md:px-8 md:py-20">
    <PageHeader
      step="Étape 04 · Point de rencontre"
      title="Partons explorer ensemble"
      intro="Une question, une idée de projet, un stage ? Écris-moi, j’adore découvrir de nouveaux terrains."
    />

    <div class="grid gap-10 md:grid-cols-2 md:gap-16">
      <div class="space-y-6">
        <p class="text-lg">
          <span class="block text-xs font-bold uppercase tracking-[.15em] text-ink-soft">E-mail</span>
          <a :href="`mailto:${profile.email}`" class="pencil-link font-display text-2xl font-semibold">{{ profile.email }}</a>
        </p>
        <a
          :href="profile.cv"
          download
          class="inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3 font-semibold text-paper no-underline transition hover:bg-amber"
        >
          <svg viewBox="0 0 24 24" class="h-5 w-5" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
            <path d="M12 4v11m0 0-4-4m4 4 4-4M5 20h14" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
          Télécharger mon CV (PDF)
        </a>
      </div>

      <form class="grid gap-3 rounded-2xl border border-line bg-card p-6 md:p-8" @submit.prevent="sendEmail">
        <label for="email" class="text-sm font-semibold">Ton adresse e-mail</label>
        <input
          id="email" v-model="email" name="email" type="email" required
          class="rounded-xl border border-line bg-paper px-4 py-3 outline-none transition focus:border-sea"
        >
        <label for="message" class="mt-2 text-sm font-semibold">Message</label>
        <textarea
          id="message" v-model="message" name="message" rows="5" required
          class="resize-y rounded-xl border border-line bg-paper px-4 py-3 outline-none transition focus:border-sea"
        ></textarea>
        <button class="mt-3 justify-self-start rounded-full bg-amber px-6 py-3 font-semibold text-white transition hover:bg-amber-dark" type="submit">
          Préparer un e-mail
        </button>
      </form>
    </div>
  </section>
</template>
