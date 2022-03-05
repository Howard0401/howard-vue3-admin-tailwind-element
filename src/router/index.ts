import {createRouter, createWebHashHistory } from 'vue-router'

const publicRoutes = [
  {
    path: '/login',
    component: () => import('../views/login/index.vue')
  },
  {
    path: '/dashboard',
    component: () => import('../views/dashboard/index.vue')
  },
  // {
  //   path: '/',
  //   component: () => import('@/views/login/index.vue')
  // },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes: publicRoutes
})

export default router