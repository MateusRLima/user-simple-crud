import Vue from 'vue'
import VueRouter from 'vue-router'
import LoginView from '../views/LoginView.vue'
import HomeView from '@/views/HomeView.vue'
import { auth } from "../main"

Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    {
      path: '*',
      redirect: '/login'
    },
    {
      path: '/',
      redirect: '/login'
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView
    },
    {
      path: '/home',
      name: 'home',
      component: HomeView,
      meta: {
        requiresAuth: true
      }
    }
  ]
})

router.beforeEach((to, from, next) => {
  const usuarioLogado = auth.currentUser
  const requerAut = to.matched.some(record => record.meta.requiresAuth)

  if (requerAut && !usuarioLogado) next('login')
  else if (!requerAut && usuarioLogado) next('home')
  else next()
})

export default router
