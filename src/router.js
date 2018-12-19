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
      component: HighScore,
      meta: {
        requiresAuth: true
      }
    }
  ]
})
router.beforeEach((to, from, next) => {
  var requiresAuth = to.matched.some(record => record.meta.requiresAuth);
  var currentUser = firebase.auth().currentUser;
  // when route requires auth and there's no current user, reidrect to '/login'
  if (requiresAuth && !currentUser) {
    next('/login');
    // when we go to login route and are already logged in, we can skip this page
    // so we redirect to the homepage
  } else if (to.path == '/login' && currentUser) {
    next('/');
    // if none of the above matches, we have a normal navigation that should just go through
    // so we call `next()`
  } else {
    next(); // you called `next('/')` which redirected to the homepage over and over again.
  }
});

/*
router.beforeEach((to, from, next) => {
  // to and from are both route objects
  const currentUser = firebase.auth().currentUser;
  const requiresAuth = to.matched.some((record) => record.meta.requiresAuth);
  if (requiresAuth && !currentUser) next('login');
  else if (!requiresAuth && currentUser) next('home');
  else next();
});
*/
export default router;
