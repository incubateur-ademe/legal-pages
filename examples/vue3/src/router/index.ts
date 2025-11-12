import { createRouter, createWebHistory } from 'vue-router'

import Home from '@/views/AppHome.vue'
import PolitiqueDeConfidentialite from '@/views/PolitiqueDeConfidentialite.vue'
import PolitiqueDesCookies from '@/views/PolitiqueDesCookies.vue'
import MentionsLegales from '@/views/MentionsLegales.vue'

const MAIN_TITLE = 'Gabarit de démarrage VueDsfr'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/politique-de-confidentialite',
    name: 'Politique De Confidentialite',
    component: PolitiqueDeConfidentialite,
  },
  {
    path: '/politique-des-cookies',
    name: 'Politique Des Cookies',
    component: PolitiqueDesCookies,
  },
  {
    path: '/mentions-legales',
    name: 'Mentions Légales',
    component: MentionsLegales,
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env?.BASE_URL || ''),
  routes,
})

router.beforeEach((to) => { // Cf. https://github.com/vueuse/head pour des transformations avancées de Head
  const specificTitle = to.meta.title ? `${to.meta.title} - ` : ''
  document.title = `${specificTitle}${MAIN_TITLE}`
})

export default router
