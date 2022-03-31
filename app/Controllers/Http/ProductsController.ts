import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Product from 'App/Models/Product'
// import Subcategory from 'App/Models/Subcategory'

export default class ProductsController {
    public async index({ request, response }: HttpContextContract): Promise<void> {

        const page = request.input('page', 1)

        const limit = 12

        const filters = request.only(['brandId', 'categoryId', 'subCategoryId'])

        const products = await Product
            .query()

            .where('brandId', filters.brandId)
            .where('categoryId', filters.categoryId)
            //.where('subcategoryId', filters.subCategoryId)
            .preload('category')

            // .preload('category', (categoryQuery) => {
            //     categoryQuery.where('id', filters.categoryId)
            // })
            .whereNotNull('title')

            .paginate(page, limit)
        return response.send(products)
    }

    public async show({ response, params }: HttpContextContract): Promise<void> {
        const id = params.id
        const product = await Product.find(id)
        return response.send(product)
    }

}
