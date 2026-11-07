<script setup>
import { ref } from 'vue'
import { profile } from '../data'

// Côté survolé : 'fr', 'en' ou null
const hovered = ref(null)
</script>

<template>
  <main class="portal">
    <h1 class="sr-only">Victor — Portfolio</h1>

    <div class="frame" :class="hovered && `is-${hovered}`">
      <!-- En bas à gauche : version française, plus sombre -->
      <RouterLink
        to="/fr"
        class="half half-fr"
        aria-label="Version française"
        @mouseenter="hovered = 'fr'"
        @mouseleave="hovered = null"
        @focus="hovered = 'fr'"
        @blur="hovered = null"
      >
        <img :src="profile.portal" alt="" class="half-img">
        <span class="door-label door-label-fr" aria-hidden="true">
          <small>Version française</small>
          <q lang="fr">C'est comme si je glissais sans tomber, le plus dur c'est une fois en bas.</q>
          <cite>Jacques Mayol</cite>
        </span>
      </RouterLink>

      <!-- En haut à droite : version anglaise, plus lumineuse -->
      <RouterLink
        to="/en"
        class="half half-en"
        aria-label="English version"
        @mouseenter="hovered = 'en'"
        @mouseleave="hovered = null"
        @focus="hovered = 'en'"
        @blur="hovered = null"
      >
        <img :src="profile.portal" alt="" class="half-img">
        <span class="door-label door-label-en" aria-hidden="true">
          <small>English version</small>
          <q lang="en">One cubic centimetre cures ten gloomy sentiments.</q>
          <cite>Assistant Predestinator</cite>
        </span>
      </RouterLink>
    </div>

    <!-- Sur téléphone, l'image est petite : on ajoute deux boutons lisibles -->
    <nav class="mobile-choice" aria-label="Choose a version">
      <RouterLink to="/fr" class="choice choice-fr">Version française</RouterLink>
      <RouterLink to="/en" class="choice choice-en">English version</RouterLink>
    </nav>
  </main>
</template>

<style scoped>
.portal {
  min-height: 100vh;
  min-height: 100dvh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1.5rem;
  background: #0a0a0b;
  overflow: hidden;
}

/* Le cadre garde les proportions de l'image pour que la diagonale tombe juste */
.frame {
  position: relative;
  width: min(100vw, calc(100vh * 1741 / 903));
  aspect-ratio: 1741 / 903;
}

.half {
  position: absolute;
  inset: 0;
  display: block;
  outline: none;
}
.half-fr { clip-path: polygon(0 0, 100% 100%, 0 100%); }
.half-en { clip-path: polygon(0 0, 100% 0, 100% 100%); }

.half-img {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  user-select: none;
  -webkit-user-drag: none;
  transition: filter .6s ease;
}

/* Toujours en noir et blanc : le côté français plus sombre, le côté anglais plus lumineux */
.half-fr .half-img { filter: grayscale(1) brightness(.62) contrast(1.1); }
.half-en .half-img { filter: grayscale(1) brightness(1.28) contrast(.92); }

/* Au survol, chaque côté accentue son caractère */
.is-fr .half-fr .half-img { filter: grayscale(1) brightness(.45) contrast(1.35); }
.is-en .half-en .half-img { filter: grayscale(1) brightness(1.55) contrast(.85); }

.door-label {
  position: absolute;
  display: flex;
  flex-direction: column;
  max-width: 38%;
  pointer-events: none;
  opacity: .85;
  transition: opacity .4s, transform .4s;
}
.is-fr .door-label-fr, .is-en .door-label-en { opacity: 1; transform: translateY(-4px); }

.door-label small {
  margin-bottom: .8em;
  font-size: clamp(.5rem, .9vw, .75rem);
  letter-spacing: .25em;
  text-transform: uppercase;
}
.door-label q {
  quotes: "« " " »" "‹ " " ›";
  font-size: clamp(.72rem, 1.75vw, 1.6rem);
  line-height: 1.3;
}
.door-label-en q { quotes: "“" "”" "‘" "’"; }
.door-label cite {
  margin-top: .7em;
  font-style: normal;
  font-size: clamp(.55rem, 1vw, .85rem);
  letter-spacing: .12em;
  text-transform: uppercase;
  opacity: .8;
}
.door-label cite::before { content: "— "; }

.door-label-fr {
  left: 3.5%;
  bottom: 6%;
  font-family: "Chakra Petch", sans-serif;
  font-weight: 600;
  color: #f2f2f2;
  text-shadow: 0 1px 10px #000c;
}
.door-label-fr small, .door-label-fr cite { font-family: "Space Mono", monospace; }

.door-label-en {
  right: 3.5%;
  top: 6%;
  align-items: flex-end;
  text-align: right;
  font-family: "Jost", sans-serif;
  font-weight: 400;
  font-weight: 500;
  color: #0b0b0b;
}
.door-label-en small, .door-label-en cite { letter-spacing: .25em; }

.half:focus-visible .door-label { outline: 2px dashed currentColor; outline-offset: 8px; }

.mobile-choice {
  display: grid;
  gap: .75rem;
  width: min(100% - 2.5rem, 24rem);
}
.choice {
  padding: .9rem 1rem;
  text-align: center;
  text-decoration: none;
  font-weight: 600;
  letter-spacing: .12em;
  text-transform: uppercase;
}
.choice-fr {
  font-family: "Chakra Petch", sans-serif;
  color: #f2f2f2;
  background: #1c1c1e;
  border: 1px solid #3a3a3d;
}
.choice-en {
  font-family: "Jost", sans-serif;
  color: #111;
  background: #f4f4f4;
}

@media (min-width: 768px) {
  .mobile-choice { display: none; }
}
</style>
