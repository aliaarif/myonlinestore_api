import Route from '@ioc:Adonis/Core/Route'

Route.group(() => {
    // User and their Profile Routes Start Here...
    Route.resource('products', 'ProductsController')

    //Route.get('products/:category_slug/:product_slug/', 'ProductsController.productInfo')

    //  User and their Profile Routes End Here...
}).prefix('api/v1/')