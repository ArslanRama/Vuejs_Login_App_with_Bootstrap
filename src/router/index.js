import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

// These routers will allow us to navigate from one page to another page.
  const routes = [
  {
    path: '/',
    name: 'login',
    component: () => import('../components/Login.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
