import { Menu, MenuDto } from '@/models/Menu';
import routes from './routes';
import instance from '@/api/axios';

export class MenusApi {
	private static MenuApi = instance;

	static async getMenus(restaurantId: string): Promise<Menu[]> {
		try {
			const response = await this.MenuApi.get<MenuDto[]>(routes.MENUS.replace(':restaurantId', restaurantId));
			return response.data.map((menu) => new Menu(menu));
		} catch (error) {
			console.log(error);
			return [];
		}
	}

	static async getMenu(menuId: string): Promise<Menu | undefined> {
		try {
			const response = await this.MenuApi.get<MenuDto>(routes.MENU.replace(':id', menuId));
			return new Menu(response.data);
		} catch (error) {
			console.log(error);
			return undefined;
		}
	}

	static async createMenu(payload: any) {
		try {
			const response = await this.MenuApi.post(routes.MENU, payload);
			return response.data;
		} catch (error) {
			return error;
		}
	}
}
