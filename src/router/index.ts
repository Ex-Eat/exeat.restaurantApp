import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import LoginView from '../views/LoginView.vue';
import LogoutView from '../views/LogoutView.vue';
import SignupView from '../views/SignupView.vue';
import RestaurantView from '../views/RestaurantView.vue';
import EditRestaurantView from '../views/EditRestaurantView.vue';
import CreateRestaurantView from '../views/CreateRestaurantView.vue';

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: '/',
			name: 'home',
			component: HomeView,
		},
		{
			path: '/login',
			name: 'login',
			component: LoginView,
		},
		{
			path: '/signup',
			name: 'signup',
			component: SignupView,
		},
		{
			path: '/logout',
			name: 'logout',
			component: LogoutView,
		},
		{
			path: '/restaurant/:id?',
			name: 'restaurant',
			component: RestaurantView,
		},
		{
			path: '/restaurant/:id?/edit',
			name: 'restaurant-edit',
			component: EditRestaurantView,
		},
		{
			path: '/restaurant/create',
			name: 'restaurant-create',
			component: CreateRestaurantView,
		},
	],
});

export default router;
