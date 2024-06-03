import { createRouter, createWebHistory } from 'vue-router'
import posthog from 'posthog-js'

posthog.init('phc_GNH7NLSCwqKsXEClKqTwQTm6Vt089bfoMzMRucVJB6Z',
    {
        api_host: 'https://us.i.posthog.com',
        person_profiles: 'identified_only' // or 'always' to create profiles for anonymous users as well
    }
)

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      // component: Profile
      // component: () => import('../Profile.vue')
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      // component: () => import('../views/AboutView.vue')
    }
  ]
})

export default router
