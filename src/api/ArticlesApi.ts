import { Article, ArticleDto } from '@/models/Article';
import routes from './routes';
import instance from './axios';

export class ArticlesApi {
	private static ArticleApi = instance;

	static async getArticles(restaurantId: string): Promise<Article[]> {
		try {
			const response = await this.ArticleApi.get<ArticleDto[]>(
				routes.ARTICLES.replace(':restaurantId', restaurantId),
			);
			return response.data.map((article) => new Article(article));
		} catch (error) {
			console.log(error);
			return [];
		}
	}

	static async getArticle(articleId: string): Promise<Article | undefined> {
		try {
			const response = await this.ArticleApi.get<ArticleDto>(routes.ARTICLE.replace(':id', articleId));
			return new Article(response.data);
		} catch (error) {
			console.log(error);
			return undefined;
		}
	}

	static async createArticle(payload: any) {
		try {
			const response = await this.ArticleApi.post(routes.ARTICLE, payload);
			return response.data;
		} catch (error) {
			return error;
		}
	}
}
