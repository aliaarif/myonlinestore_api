import Route from '@ioc:Adonis/Core/Route'

Route.group(() => {
    Route.post('auth/login', 'AuthController.login')
    Route.post('auth/register', 'AuthController.register')
    // Route.post('auth/refresh/token', 'AuthControlle.refreshToken')
    Route.post('auth/logout', 'AuthController.logout')
}).prefix('api/v1/')