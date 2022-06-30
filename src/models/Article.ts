import type { IMenu } from './Menu';

export interface IArticle {
	_id: string;
	name: string;
	description: string;
	price: number;
	restaurantId: string;
	menus: string[];
	image: string;
	createdAt: string;
	updatedAt: string;
}

export class ArticleDto implements IArticle {
	_id: string = '';
	name: string = '';
	description: string = '';
	price: number = 0;
	restaurantId: string = '';
	menus: string[] = [];
	image: string = '';
	createdAt: string = '';
	updatedAt: string = '';
}

export class Article extends ArticleDto {
	constructor(article: IArticle) {
		super();
		Object.assign(this, article);
	}
}
