import { defineStore } from 'pinia';
import instance from '@/api/axios';
import routes from '@/api/routes';
import type { CreateRestaurantDto, Restaurant } from '@/models/Restaurant';
import { RestaurantsApi } from '@/api/RestaurantsApi';

export const useRestaurantStore = defineStore({
	id: 'restaurant',
	state: () => ({
		restaurants: [] as Restaurant[],
	}),
	getters: {
		getRestaurants: (state) => state.restaurants,
	},
	actions: {
		async loadRestaurants() {
			this.restaurants = await RestaurantsApi.getRestaurants();
		},
		async createRestaurant(payload: CreateRestaurantDto) {
			try {
				console.log(payload);
				const response = await instance.post(routes.CREATE_RESTAURANT, payload);
				console.log(response.data);
				this.restaurants.push(response.data);
				return { message: 'Restaurant successfully created' };
			} catch (error) {
				return error;
			}
		},
	},
});
