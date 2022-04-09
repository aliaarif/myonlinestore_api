import Route from '@ioc:Adonis/Core/Route'

Route.group(() => {
    Route.post('orders/checkout', 'OrdersController.checkout')
}).prefix('api/v1/')

