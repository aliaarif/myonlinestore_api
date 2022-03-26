import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Product from 'App/Models/Product'

export default class ProductsController {
    public async index({ response }: HttpContextContract): Promise<void> {
        const products = await Product
            .query()
            .preload('category')
        // .preload('category', (categoryQuery) => {
        //     categoryQuery.where('slug', 'sweets')
        // })



        return response.send(products)



    }
}
