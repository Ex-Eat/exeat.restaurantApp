import type { IArticle } from './Article';
import type { IRestaurant } from './Restaurant';

export interface IMenu {
	_id: string;
	name: string;
	price: number;
	articles: IArticle[] | string[];
	restaurantId: string;
	createdAt: string;
	updatedAt: string;
}

export class MenuDto implements IMenu {
	_id: string = '';
	name: string = '';
	price: number = 0;
	articles: IArticle[] | string[] = [];
	restaurantId: string = '';
	createdAt: string = '';
	updatedAt: string = '';
}

export class Menu extends MenuDto {
	constructor(dto: MenuDto) {
		super();
		Object.assign(this, dto);
	}
}
