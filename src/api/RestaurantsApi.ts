import { config } from '@/config';
import { Restaurant, RestaurantDto } from '@/models/Restaurant';
import axios from 'axios';
import routes from './routes';
import instance from '@/api/axios';

export class RestaurantsApi {
	private static RestaurantApi = instance;

	static async getRestaurants(): Promise<Restaurant[]> {
		try {
			const response = await this.RestaurantApi.get<RestaurantDto[]>(routes.RESTAURANTS);
			return response.data.map((restaurant) => new Restaurant(restaurant));
		} catch (error) {
			console.log(error);
			return [];
		}
	}

	static async createRestaurant(payload: any): Promise<Restaurant | undefined> {
		try {
			const response = await this.RestaurantApi.post(routes.RESTAURANT, payload);
			return response.data;
		} catch (error) {
			console.log(error);
			return undefined;
		}
	}
}
