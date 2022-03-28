import Route from '@ioc:Adonis/Core/Route'

Route.group(() => {
    Route.resource('subcategory', 'SubcategoryController')
}).prefix('api/v1/')