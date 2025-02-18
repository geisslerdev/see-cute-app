import GalleryPage from '@/pages/GalleryPage.vue';
import HomePage from '@/pages/HomePage.vue';
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      name: 'home',
      component: HomePage
    },
    {
      path: '/gallery',
      name: 'gallery',
      component: GalleryPage
    },
  ]
})

export default router
