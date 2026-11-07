<script setup>
import { ref, watch } from 'vue'
import { useSite } from '../useSite'

const { route, t, link, switchPath, profile } = useSite()
const menuOpen = ref(false)
const year = new Date().getFullYear()
const navPages = ['projects', 'journey', 'experiences', 'contact']

watch(() => route.fullPath, () => { menuOpen.value = false })
</script>

<template>
  <div class="site" :data-theme="t.theme">
    <a href="#contenu" class="skip-link">{{ t.pages.home }} ↓</a>

    <header class="site-header">
      <div class="container-x header-inner">
        <RouterLink :to="link('home')" class="brand">
          {{ profile.name }} <span class="brand-tag">{{ t.brandTag }}</span>
        </RouterLink>

        <button
          class="menu-btn md:hidden"
          type="button"
          :aria-expanded="menuOpen"
          aria-controls="navigation"
          @click="menuOpen = !menuOpen"
        >
          {{ menuOpen ? t.close : t.menu }}
        </button>

        <nav
          id="navigation"
          class="nav"
          :class="menuOpen ? 'flex' : 'hidden md:flex'"
          :aria-label="t.menu"
        >
          <RouterLink v-for="page in navPages" :key="page" :to="link(page)" class="nav-link">
            {{ t.pages[page] }}
          </RouterLink>
          <RouterLink :to="switchPath" class="nav-switch" :title="t.switchTitle">
            {{ t.switchLabel }}
          </RouterLink>
        </nav>
      </div>
    </header>

    <main id="contenu" class="flex-1">
      <RouterView v-slot="{ Component }">
        <Transition name="page" mode="out-in">
          <component :is="Component" :key="route.path" />
        </Transition>
      </RouterView>
    </main>

    <footer class="site-footer">
      <div class="container-x footer-inner">
        <p>© {{ year }} {{ profile.name }} — {{ t.footer }}</p>
        <RouterLink to="/" class="link">⟲ {{ t.portal }}</RouterLink>
      </div>
    </footer>
  </div>
</template>
