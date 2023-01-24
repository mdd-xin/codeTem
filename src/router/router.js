import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  { name: 'home', path: '/', component: () => import('../views/mddHome.vue') },
  {
    name: 'about',
    path: '/about',
    component: () => import('../views/mddAbout.vue'),
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes, // `routes: routes` 的缩写
})

export default router
