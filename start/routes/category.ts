import Route from '@ioc:Adonis/Core/Route'

Route.group(() => {
    Route.resource('category', 'CategoryController')
}).prefix('api/v1/')