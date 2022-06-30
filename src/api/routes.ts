enum routes {
	LOAD_CONNECTED_USER = '/auth/user',
	LOGIN = '/auth/login',
	SIGNUP = '/auth/signup',
	LOGOUT = '/auth/logout',

	RESTAURANT = '/restaurant',
	CREATE_RESTAURANT = '/restaurant/create',
	RESTAURANTS = '/restaurant/owned',

	MENU = 'restaurant/menu/:id',
	MENUS = 'restaurant/:restaurantId/menus',

	ARTICLE = 'restaurant/article/:id',
	ARTICLES = 'restaurant/:restaurantId/articles',
}

export default routes;
