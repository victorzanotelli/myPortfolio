<script setup>
import { ref } from 'vue'

const menuOpen = ref(false)
const email = ref('')
const message = ref('')
const year = new Date().getFullYear()

const projects = [
  {
    number: 'Archive 001',
    title: "Eclat d'art",
    context: "Projet full stack de fin d'étude",
    objective: "Créer un full-stack validant les aquis de la formation",
    skills: ['HTML', 'CSS', 'JavaScript',"PHP","Symphony", 'Travail en équipe', "Autonomie", "Réssilience"],
    reflection: "Cela m'a permit de découvir et partager avec des collaborateurs éxceptionnels mais aussi de surmonter des challenges qui, quelques mois plus tot, me paraissaient hors de porter. Et tout ça grâce à la force de l'amitier",
    code: '',
    demo: 'https://github.com/WildCodeSchool/2023-09-PHP-LYON-P3-eclat-d-art',
  },
  {
    number: 'Archive 002',
    title: "Nom d'un projet personnel",
    context: 'Explique ce qui t’a donné envie de créer ce projet.',
    objective: 'Quel résultat voulais-tu obtenir ?',
    skills: ['HTML', 'CSS', 'JavaScript', 'Accessibilité'],
    reflection: 'Présente une difficulté et la manière dont tu l’as résolue.',
    code: '',
    demo: '',
  },
]

const experiences = [
  {
    date: '2024 · Association',
    title: 'Atipik',
    detail: "Organisation d'évènement musicaux comprennant choix du line-up, acheminement des artistes, mise en place de des postes de ventes et services en temps réels ",
  },
  {
    date: "2021 · Mama Shelter",
    title: 'Bar rooftop au Mama Shelter de Lyon',
    detail: 'Mise en place du poste de vente : carte, équipement, matière première et personnel',
  },
]

function sendEmail() {
  const subject = encodeURIComponent('Message depuis mon portfolio')
  const bodyText = 'Mon adresse : ' + email.value + '\n\n' + message.value
  const body = encodeURIComponent(bodyText)
  window.location.href =
    'mailto:votre.adresse@example.com?subject=' + subject + '&body=' + body
}
</script>

<template>
  <div class="min-h-screen bg-[#101112] text-[#e8e5dc]">
    <header class="absolute z-20 flex w-full items-center justify-between border-b border-white/10 px-[7%] py-5">
      <a href="#accueil" class="text-sm font-extrabold tracking-[.13em] no-underline">
        DOSSIER <span class="text-[#c52f32]">· 01</span>
      </a>

      <button
        class="rounded-sm border border-[#c52f32] bg-[#101112] px-3 py-2 text-sm md:hidden"
        type="button"
        :aria-expanded="menuOpen"
        aria-controls="navigation"
        @click="menuOpen = !menuOpen"
      >
        {{ menuOpen ? 'Fermer' : 'Navigation' }}
      </button>

      <nav
        id="navigation"
        aria-label="Navigation principale"
        class="absolute right-[6%] top-16 flex-col gap-3 border border-[#454545] bg-[#101112] p-4 md:static md:flex md:flex-row md:gap-6 md:border-0 md:bg-transparent md:p-0"
        :class="menuOpen ? 'flex' : 'hidden md:flex'"
      >
        <a href="#projets" class="text-sm no-underline hover:text-[#c52f32]" @click="menuOpen = false">Projets</a>
        <a href="#parcours" class="text-sm no-underline hover:text-[#c52f32]" @click="menuOpen = false">Parcours</a>
        <a href="#experiences" class="text-sm no-underline hover:text-[#c52f32]" @click="menuOpen = false">Expériences</a>
        <a href="#contact" class="text-sm no-underline hover:text-[#c52f32]" @click="menuOpen = false">Contact</a>
      </nav>
    </header>

    <main>
      <section
        id="accueil"
        class="relative grid min-h-screen grid-cols-1 items-center gap-8 overflow-hidden bg-[linear-gradient(160deg,#101112,#202122)] px-[7%] pb-52 pt-32 md:grid-cols-[minmax(0,1fr)_minmax(150px,250px)] md:gap-16 md:bg-[linear-gradient(90deg,#101112_0_50%,#18191a_50%_100%)] md:px-[10%] md:py-36"
      >
        <div class="pointer-events-none absolute inset-0 z-0 bg-[linear-gradient(#ffffff0b_1px,transparent_1px),linear-gradient(90deg,#ffffff0b_1px,transparent_1px)] bg-[size:52px_52px]"></div>

        <div class="relative z-10 max-w-3xl">
          <p class="mb-4 text-xs font-bold uppercase tracking-[.15em] text-[#c52f32]">
            Portfolio · Année 2026-2027 · Accès public
          </p>
          <h1 class="mb-6 text-[clamp(2.7rem,8vw,6.5rem)] font-black uppercase leading-[.98] tracking-[-.06em]">
            "Faire de la publicité, c'est agiter un bâton dans l'auge à cochons."
            <h4>George Orwell</h4>
          </h1>
          <a href="#projets" class="inline-block bg-[#c52f32] px-5 py-3 font-bold uppercase no-underline hover:bg-red-700">
            Consulter mes projets
          </a>
        </div>

        <figure class="relative z-10 m-0 w-[clamp(140px,42vw,190px)] justify-self-end grayscale md:w-full md:max-w-[250px]">
          <img
            src="/photo-pro.jpg"
            alt="Portrait professionnel de Votre Nom"
            class="block aspect-[4/5] w-full border border-[#e8e5dc] bg-[#1b1c1d] object-cover"
          >
          <figcaption class="mt-2 text-right text-xs text-[#aaa9a3]">
            Etudiant à Epitech
          </figcaption>
        </figure>
      </section>

      <section id="projets" class="px-[7%] py-16 md:px-[10%] md:py-24">
        <div class="mb-10 max-w-3xl">
          <p class="mb-3 text-xs font-bold uppercase tracking-[.15em] text-[#c52f32]">01 · Travaux recensés</p>
          <h2 class="mb-4 text-4xl font-extrabold uppercase leading-tight tracking-tight md:text-6xl">Projets réalisés</h2>
        </div>

        <div class="grid gap-5 md:grid-cols-2">
          <article
            v-for="(project, index) in projects"
            :key="project.number"
            class="min-w-0 border border-[#454545] border-t-4 p-6 md:p-8"
            :class="index === 1 ? 'border-t-[#c52f32] bg-[#1b1c1d]' : 'border-t-[#e8e5dc] bg-[#171819]'"
          >
            <p class="mb-3 text-xs font-bold uppercase tracking-[.15em] text-[#aaa9a3]">{{ project.number }}</p>
            <h3 class="mb-5 break-words text-2xl font-extrabold uppercase">{{ project.title }}</h3>
            <p><strong>Contexte :</strong> {{ project.context }}</p>
            <p><strong>Objectif :</strong> {{ project.objective }}</p>
            <p><strong>Compétences :</strong> {{ project.skills.join(', ') }}</p>
            <p class="border-l-2 border-[#c52f32] pl-3"><strong>Mon retour :</strong> {{ project.reflection }}</p>
            <div class="mt-6 flex flex-wrap gap-4 text-sm">
              <a v-if="project.code" :href="project.code" target="_blank" rel="noreferrer" class="underline underline-offset-4 hover:text-[#c52f32]">Code source ↗</a>
              <span v-else class="text-[#aaa9a3]">Lien du code à ajouter</span>
              <a v-if="project.demo" :href="project.demo" target="_blank" rel="noreferrer" class="underline underline-offset-4 hover:text-[#c52f32]">Démo ↗</a>
              <span v-else class="text-[#aaa9a3]">Lien de démo à ajouter</span>
            </div>
          </article>
        </div>
      </section>

      <section id="parcours" class="grid gap-10 bg-[#191a1b] px-[7%] py-16 md:grid-cols-[1.3fr_.8fr] md:items-center md:gap-12 md:px-[10%] md:py-24">
        <div>
          <p class="mb-3 text-xs font-bold uppercase tracking-[.15em] text-[#c52f32]">02 · Évolution des compétences</p>
          <h2 class="mb-5 text-4xl font-extrabold uppercase leading-tight tracking-tight md:text-6xl">Mon parcours cette année</h2>
          <p class="text-[#aaa9a3]">
            Cette année, j'ai progressé en <strong>[compétence]</strong>. J’ai rencontré
            <strong>[difficulté]</strong>, puis j’ai avancé grâce à
            <strong>[méthode ou projet]</strong>. Je sais maintenant
            <strong>[progrès concret]</strong>.
          </p>
          <p class="text-[#aaa9a3]">Ma prochaine étape est d'approfondir <strong>[compétence à développer]</strong></p>
        </div>
      </section>

      <section id="experiences" class="px-[7%] py-16 md:px-[10%] md:py-24">
        <div class="mb-8">
          <p class="mb-3 text-xs font-bold uppercase tracking-[.15em] text-[#c52f32]">03 · Activités hors programme</p>
          <h2 class="text-4xl font-extrabold uppercase leading-tight tracking-tight md:text-6xl">Autres expériences</h2>
        </div>
        <article v-for="experience in experiences" :key="experience.date" class="grid gap-2 border-t border-[#454545] py-6 md:grid-cols-[220px_minmax(0,1fr)] md:gap-8">
          <p class="text-xs font-bold uppercase tracking-[.15em] text-[#c52f32]">{{ experience.date }}</p>
          <div>
            <h3 class="mb-2 text-xl font-bold uppercase">{{ experience.title }}</h3>
            <p class="text-[#aaa9a3]">{{ experience.detail }}</p>
          </div>
        </article>
      </section>

      <section id="contact" class="grid gap-10 bg-[#191a1b] px-[7%] py-16 md:grid-cols-2 md:gap-16 md:px-[10%] md:py-24">
        <div>
          <p class="mb-3 text-xs font-bold uppercase tracking-[.15em] text-[#c52f32]">04 · Canal de contact</p>
          <h2 class="mb-5 text-4xl font-extrabold uppercase leading-tight tracking-tight md:text-6xl">Entrer en communication</h2>
          <p class="mb-6 text-[#aaa9a3]">
            <a class="underline underline-offset-4" href="mailto:victor.anclin@epitech.eu"></a>
          </p>
          <a href="/CV-VAZ-Epitech.pdf" download class="inline-block bg-[#c52f32] px-5 py-3 font-bold uppercase no-underline hover:bg-red-700">
            Télécharger mon CV (PDF)
          </a>
        </div>

        <form class="grid gap-3" @submit.prevent="sendEmail">
          <label for="email">Adresse e-mail</label>
          <input id="email" v-model="email" name="email" type="email" required class="border border-[#454545] bg-[#101112] px-3 py-3 text-[#e8e5dc] outline-none focus:border-[#c52f32]">
          <label for="message">Message</label>
          <textarea id="message" v-model="message" name="message" rows="5" required class="resize-y border border-[#454545] bg-[#101112] px-3 py-3 text-[#e8e5dc] outline-none focus:border-[#c52f32]"></textarea>
          <button class="mt-2 justify-self-start bg-[#e8e5dc] px-5 py-3 font-bold uppercase text-[#101112] hover:bg-white" type="submit">
            Préparer un e-mail
          </button>
        </form>
      </section>
    </main>

    <footer class="px-[7%] py-8 text-sm text-[#aaa9a3] md:px-[10%]">
      <p>© {{ year }} Votre Nom · Fin du dossier</p>
      <p class="mt-5 border-t border-[#454545] pt-5 text-xs">
        AVERTISSEMENT — L’univers graphique et les éléments narratifs de ce portfolio sont fictifs.
        Toute ressemblance avec des personnes, organisations ou événements réels serait fortuite.
        Les informations sur l’auteur, ses projets et ses expériences sont réelles.
      </p>
    </footer>
  </div>
</template>
