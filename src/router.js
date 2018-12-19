import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import PlayGame from './views/PlayGame.vue'
import Login from './views/Login.vue'
import SignUp from './views/SignUp.vue'


Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '*',
      name: 'home',
      component: Home
    },
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/playgame',
      name: 'playgame',
      component: PlayGame
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/sign-up',
      name: 'signUp',
      component: SignUp
    }
  ]
})
