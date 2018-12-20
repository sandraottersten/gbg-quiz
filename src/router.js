import Vue from 'vue'
import Router from 'vue-router'
import firebase from 'firebase'

import Home from './views/Home.vue'
import PlayGame from './views/PlayGame.vue'
import Login from './views/Login.vue'
import SignUp from './views/SignUp.vue'
import HighScore from './views/HighScore.vue'


Vue.use(Router);

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '*',
      redirect: '/home'
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
    },
    {
      path: '/highscore',
      name: 'highScore',
      component: HighScore
    }
  ]
})
router.beforeEach((to, from, next) => {
  var requiresAuth = to.matched.some(record => record.meta.requiresAuth);
  var currentUser = firebase.auth().currentUser;

  if (requiresAuth && !currentUser) {
    next('/login');

  } else if (to.path == '/login' && currentUser) {
    next('/');

  } else {
    next(); 
  }
});

export default router;
