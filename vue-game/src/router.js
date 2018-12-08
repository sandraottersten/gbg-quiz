import Vue from 'vue';
import Router from 'vue-router';
import firebase from 'firebase';
import List from '@/components/List.vue';
import Home from '@/views/Home.vue';
import SignUp from '@/views/SignUp.vue';
import Login from '@/views/Login.vue';

Vue.use(Router);

const router = new Router({
	mode: 'history',
	base: process.env.BASE_URL,
	routes: [
		{
			path: '*',
			redirect: '/home'
		},
		{
			path: '/',
			redirect: '/home'
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
			path: '/about',
			name: 'About',
			component: Home
		},
		{
			path: '/highscore',
			name: 'Highscore',
			component: List,
			meta: {
				requiresAuth: true,
				fail: '/error'
			}
		}
	]
});

router.beforeEach((to, from, next) => {
	// to and from are both route objects
	const currentUser = firebase.auth().currentUser;
	const requiresAuth = to.matched.some((record) => record.meta.requiresAuth);
	if (requiresAuth && !currentUser) next('login');
	else if (!requiresAuth && currentUser) next('home');
	else next();
});

export default router;
