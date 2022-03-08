import {createRouter, createWebHashHistory } from 'vue-router'

const publicRoutes = [
  {
    path: '/login',
    component: () => import('../views/login/index.vue')
  },
  {
    path: '/dashboard/',
    component: () => import('../views/dashboard/index.vue'),
    children: [{
      path: 'table',
      component: () => import('../views/dashboard/table.vue'),
      
    }],
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes: publicRoutes
})

export default router