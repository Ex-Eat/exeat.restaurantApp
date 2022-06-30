import exp from 'constants';
import type { IMenu } from './Menu';
import type { IArticle } from './Article';
import { MenusApi } from '@/api/MenusApi';
import { ArticlesApi } from '@/api/ArticlesApi';

export interface IRestaurant {
	_id?: string;
	globalUserId: string;
	name: string;
	description: string;
	keywords: string[];
	professionalMail: string;
	phoneNumber: string;
	location: {
		lat: number;
		lng: number;
		address: string;
	};
	menus: string[] | IMenu[];
	articles: string[] | IArticle[];
	image: string;
	createdAt: string;
	updatedAt: string;
}

export class RestaurantDto implements IRestaurant {
	_id: string = '';
	globalUserId: string = '';
	name: string = '';
	description: string = '';
	keywords: string[] = [];
	professionalMail: string = '';
	phoneNumber: string = '';
	location: {
		lat: number;
		lng: number;
		address: string;
	} = {
		lat: 0,
		lng: 0,
		address: '',
	};
	menus: string[] | IMenu[] = [];
	articles: string[] | IArticle[] = [];
	image: string = '';
	createdAt: string = '';
	updatedAt: string = '';
}

export interface CreateRestaurantDto {
	name: string;
	description: string;
	keywords: string[];
	professionalMail: string;
	phoneNumber: string;
	address: string;
	termsOfUse: boolean;
}

export class Restaurant extends RestaurantDto {
	constructor(dto: RestaurantDto) {
		super();
		Object.assign(this, dto);
		this.populateMenus();
	}
	async populateMenus() {
		this.menus = await MenusApi.getMenus(this._id);
	}

	async populateArticles() {
		this.articles = await ArticlesApi.getArticles(this._id);
	}
}
