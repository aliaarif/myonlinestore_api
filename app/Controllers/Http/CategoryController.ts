import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Category from 'App/Models/Category'


export default class CategoryController {
    public async index({ request, response }: HttpContextContract): Promise<void> {
        const page = request.input('page', 1)
        // const subcategoryId = request.input('subcategoryId', 1)
        const limit = 12

        const categories = await Category
            .query()
            // .preload('subcategories', (subcategoryQuery) => {
            //     subcategoryQuery.where('subcategory_id', subcategoryId)
            // })
            .paginate(page, limit)
        return response.send(categories)
    }

    // public async show({ response, params }: HttpContextContract): Promise<void> {
    //     const id = params.productId
    //     const category = await Category.find(id)
    //     return response.send(category)
    // }

}
