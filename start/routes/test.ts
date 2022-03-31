import Route from '@ioc:Adonis/Core/Route'

Route.group(() => {
    Route.get('tests/brands', 'TestsController.brands')
    Route.get('tests/categories', 'TestsController.categories')
    Route.get('tests/subcategories', 'TestsController.subcategories')
}).prefix('api/v1/')