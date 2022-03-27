import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Product from 'App/Models/Product'

export default class ProductController {
    public async index({ request, response }: HttpContextContract): Promise<void> {
        const page = request.input('page', 1)
        // const categoryId = request.input('categoryId', 1)
        // const subcategoryId = request.input('subcategoryId', 1)

        const limit = 12

        const products = await Product
            .query()

            .preload('category')
            // .preload('subcategory', (subcategoryQuery) => {
            //     subcategoryQuery.where('subcategory_id', subcategoryId)
            // })

            .paginate(page, limit)
        return response.send(products)
    }

    public async show({ response, params }: HttpContextContract): Promise<void> {
        const id = params.id
        const product = await Product.find(id)
        return response.send(product)
    }

}
