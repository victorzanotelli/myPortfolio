import { createRouter, createWebHashHistory } from 'vue-router'
import { content, paths } from './data'
import PortalPage from './pages/PortalPage.vue'
import SiteLayout from './layouts/SiteLayout.vue'
import HomePage from './pages/HomePage.vue'
import ProjectsPage from './pages/ProjectsPage.vue'
import JourneyPage from './pages/JourneyPage.vue'
import ExperiencesPage from './pages/ExperiencesPage.vue'
import ContactPage from './pages/ContactPage.vue'

const pages = {
  home: HomePage,
  projects: ProjectsPage,
  journey: JourneyPage,
  experiences: ExperiencesPage,
  contact: ContactPage,
}

// Les deux mondes ont exactement les mêmes pages, seules la langue et le thème changent.
function world(lang) {
  const root = paths[lang].home
  return {
    path: root,
    component: SiteLayout,
    meta: { lang },
    children: Object.entries(paths[lang]).map(([page, full]) => ({
      path: full === root ? '' : full.slice(root.length + 1),
      component: pages[page],
      meta: { page },
    })),
  }
}

const router = createRouter({
  // Historique en « hash » (#/fr/projets) : fonctionne sur GitHub Pages
  // même quand on recharge une page ou qu'on partage un lien direct.
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', component: PortalPage, meta: { page: 'portal' } },
    world('fr'),
    world('en'),
    { path: '/:pathMatch(.*)*', redirect: '/' },
  ],
  scrollBehavior: () => ({ top: 0 }),
})

router.afterEach((to) => {
  const lang = to.meta.lang
  document.documentElement.lang = lang || 'fr'
  document.title = lang
    ? `${content[lang].pages[to.meta.page]} · Victor — Portfolio`
    : 'Victor — Portfolio'
})

export default router
