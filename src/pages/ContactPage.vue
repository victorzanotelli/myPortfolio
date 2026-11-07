<script setup>
import { ref } from 'vue'
import { useSite } from '../useSite'

const { t, profile } = useSite()
const email = ref('')
const message = ref('')

function sendEmail() {
  const c = t.value.contactPage
  const subject = encodeURIComponent(c.subject)
  const body = encodeURIComponent(c.bodyPrefix + email.value + '\n\n' + message.value)
  window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`
}
</script>

<template>
  <section class="container-x page">
    <header class="page-head">
      <p class="eyebrow">{{ t.contactPage.eyebrow }}</p>
      <h1 class="title">{{ t.contactPage.title }}</h1>
      <p class="intro">{{ t.contactPage.intro }}</p>
    </header>

    <div class="contact">
      <div class="contact-info">
        <p>
          <span class="label">{{ t.contactPage.emailLabel }}</span>
          <a :href="`mailto:${profile.email}`" class="link contact-email">{{ profile.email }}</a>
        </p>
        <a :href="profile.cv" download class="btn">↓ {{ t.contactPage.cv }}</a>
      </div>

      <form class="card form" @submit.prevent="sendEmail">
        <label for="email" class="label">{{ t.contactPage.formEmail }}</label>
        <input id="email" v-model="email" name="email" type="email" required class="field">
        <label for="message" class="label">{{ t.contactPage.formMessage }}</label>
        <textarea id="message" v-model="message" name="message" rows="5" required class="field"></textarea>
        <button class="btn" type="submit">{{ t.contactPage.submit }}</button>
      </form>
    </div>
  </section>
</template>
