import Vue from 'vue';
import Router from 'vue-router';

import Home from '../components/Home.vue';
import About from '../components/About.vue';

Vue.use(Router);

const router = new Router({
	mode: 'history',
    routes: [
    { path: '/', component: Home },
    { path: '/about', component: About, name: 'about' },
    ]
});

export default router;

