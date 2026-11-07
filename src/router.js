import { createRouter, createWebHashHistory } from 'vue-router'
import HomePage from './pages/HomePage.vue'
import ProjectsPage from './pages/ProjectsPage.vue'
import JourneyPage from './pages/JourneyPage.vue'
import ExperiencesPage from './pages/ExperiencesPage.vue'
import ContactPage from './pages/ContactPage.vue'

// Historique en « hash » (#/projets) : fonctionne sur GitHub Pages
// même quand on recharge une page ou qu'on partage un lien direct.
const routes = [
  { path: '/', name: 'home', component: HomePage, meta: { title: 'Accueil' } },
  { path: '/projets', name: 'projects', component: ProjectsPage, meta: { title: 'Projets' } },
  { path: '/parcours', name: 'journey', component: JourneyPage, meta: { title: 'Parcours' } },
  { path: '/experiences', name: 'experiences', component: ExperiencesPage, meta: { title: 'Expériences' } },
  { path: '/contact', name: 'contact', component: ContactPage, meta: { title: 'Contact' } },
  { path: '/:pathMatch(.*)*', redirect: '/' },
]

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior: () => ({ top: 0 }),
})

router.afterEach((to) => {
  document.title = to.meta.title === 'Accueil'
    ? 'Victor — Portfolio'
    : `${to.meta.title} · Victor — Portfolio`
})

export default router
