import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import WorksView from '../views/WorksView.vue'
import ContactView from '../views/ContactView.vue'
import Errors404 from '../components/Errors404.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/works',
    name: 'works',
    component: WorksView
  },
  {
    path: '/contact',
    name: 'contact',
    component: ContactView
  },
  {
    path: "/:catchAll(.*)",
    name: "errors404",
    meta: {
      requiresAuth: false
    },
    component: Errors404
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
