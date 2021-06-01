import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

// routes will allow us to navigate from one page to another. 
// but in our case we have just one router. 
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
