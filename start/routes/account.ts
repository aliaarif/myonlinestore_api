import Route from '@ioc:Adonis/Core/Route'

Route.group(() => {
    Route.post('account/addresses', 'AccountsController.index')
}).prefix('api/v1/')