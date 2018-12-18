import Vue from 'vue';
import Router from 'vue-router';
import firebase from 'firebase';
import List from '@/components/List.vue';
import Home from '@/views/Home.vue';
import SignUp from '@/views/SignUp.vue';
import Login from '@/views/Login.vue';
import PlayGame from '@/views/PlayGame.vue';

Vue.use(Router);

const router = new Router({
	mode: 'history',
	base: process.env.BASE_URL,
	routes: [

		{
			path: '*',
			redirect: '/home',
		},
		{
			path: '/',
			redirect: 'home',
		},
		{
			path: '/login',
			name: 'Login',
			component: Login
		},
		{
			path: '/home',
			name: 'home',
			component: Home
		},
		{
			path: '/sign-up',
			name: 'SignUp',
			component: SignUp
		},
		{
			path: '/playgame',
			name: 'playgame',
			component: PlayGame
		},
		{
			path: '/highscore',
			name: 'Highscore',
			component: List,
			meta: {
				requiresAuth: true
			}
		}
	]
});

router.beforeEach((to, from, next) => {
	var requiresAuth = to.matched.some(record => record.meta.requiresAuth);
	var currentUser = false;
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
	const currentUser = firebase.auth().currentUser;
	const requiresAuth = to.matched.some(record => record.meta.requiresAuth);

	if (requiresAuth && !currentUser) { next('login'); }
	else if (requiresAuth && currentUser) { next('highscore') }
	else next();
});
*/
export default router;