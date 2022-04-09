import Route from '@ioc:Adonis/Core/Route'

Route.group(() => {
    Route.resource('category', 'CategoryController')

    Route.get('category/get-only-first/:id', 'CategoryController.findOneCategory')


}).prefix('api/v1/')