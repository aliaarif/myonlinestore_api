import Route from '@ioc:Adonis/Core/Route'

Route.group(() => {
    Route.resource('products', 'ProductsController')
    //Route.get('products/:category_slug/:product_slug/', 'ProductsController.productInfo')
}).prefix('api/v1/')