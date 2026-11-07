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
      <!-- En bas à gauche : version française, monde Zalem -->
      <RouterLink
        to="/fr"
        class="half half-fr"
        aria-label="Version française — thème Zalem"
        @mouseenter="hovered = 'fr'"
        @mouseleave="hovered = null"
        @focus="hovered = 'fr'"
        @blur="hovered = null"
      >
        <img :src="profile.portal" alt="" class="half-img">
        <span class="label label-fr" aria-hidden="true">
          <small>Version française</small>
          Zalem
        </span>
      </RouterLink>

      <!-- En haut à droite : version anglaise, monde Brave New World -->
      <RouterLink
        to="/en"
        class="half half-en"
        aria-label="English version — Brave New World theme"
        @mouseenter="hovered = 'en'"
        @mouseleave="hovered = null"
        @focus="hovered = 'en'"
        @blur="hovered = null"
      >
        <img :src="profile.portal" alt="" class="half-img">
        <span class="label label-en" aria-hidden="true">
          <small>English version</small>
          Brave New World
        </span>
      </RouterLink>
    </div>

    <!-- Sur téléphone, l'image est petite : on ajoute deux boutons lisibles -->
    <nav class="mobile-choice" aria-label="Choose a version">
      <RouterLink to="/fr" class="choice choice-fr">Français · Zalem</RouterLink>
      <RouterLink to="/en" class="choice choice-en">English · Brave New World</RouterLink>
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

/* Survol : chaque monde prend sa couleur, l'autre s'assombrit */
.is-fr .half-fr .half-img { filter: sepia(1) saturate(3.4) hue-rotate(-28deg) contrast(1.15); }
.is-en .half-en .half-img { filter: sepia(.55) saturate(2.2) hue-rotate(178deg) brightness(1.22) contrast(.95); }
.is-fr .half-en .half-img,
.is-en .half-fr .half-img { filter: brightness(.38); }

.label {
  position: absolute;
  display: flex;
  flex-direction: column;
  line-height: 1;
  pointer-events: none;
  opacity: .82;
  transition: opacity .4s, transform .4s;
}
.label small { margin-bottom: .45em; font-size: .38em; letter-spacing: .25em; text-transform: uppercase; opacity: .85; }
.is-fr .label-fr, .is-en .label-en { opacity: 1; transform: translateY(-4px); }

.label-fr {
  left: 3.5%;
  bottom: 6%;
  font-family: "Chakra Petch", sans-serif;
  font-weight: 700;
  font-size: clamp(1.1rem, 4vw, 3.6rem);
  text-transform: uppercase;
  color: #ff7a45;
  text-shadow: 2px 0 #33e3c6aa, -2px 0 #ff4f9aaa;
}
.label-fr small { font-family: "Space Mono", monospace; color: #f1e5d0; text-shadow: none; }

.label-en {
  right: 3.5%;
  top: 6%;
  align-items: flex-end;
  text-align: right;
  font-family: "Jost", sans-serif;
  font-weight: 400;
  font-size: clamp(1rem, 3.2vw, 2.8rem);
  letter-spacing: .12em;
  text-transform: uppercase;
  color: #fffdf4;
  text-shadow: 0 1px 12px #0008;
}

.half:focus-visible .label { outline: 2px dashed currentColor; outline-offset: 8px; }

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
}
.choice-fr {
  font-family: "Chakra Petch", sans-serif;
  text-transform: uppercase;
  color: #14100d;
  background: #e2572c;
  clip-path: polygon(10px 0, 100% 0, calc(100% - 10px) 100%, 0 100%);
}
.choice-en {
  font-family: "Jost", sans-serif;
  letter-spacing: .1em;
  text-transform: uppercase;
  color: #1b2442;
  background: #fbfaf6;
  border-radius: 999px;
}

@media (min-width: 768px) {
  .mobile-choice { display: none; }
}
</style>
