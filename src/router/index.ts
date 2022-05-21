import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import WorksView from '../views/WorksView.vue'
import ContactView from '../views/ContactView.vue'

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
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
