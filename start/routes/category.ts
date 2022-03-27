import Route from '@ioc:Adonis/Core/Route'

Route.group(() => {
    // User and their Profile Routes Start Here...
    Route.resource('category', 'CategoryController')

    //Route.get('products/:category_slug/:product_slug/', 'ProductsController.productInfo')

    //  User and their Profile Routes End Here...
}).prefix('api/v1/')