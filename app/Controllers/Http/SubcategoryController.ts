import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Subcategory from 'App/Models/Subcategory'


export default class SubcategoryController {
    public async index({ request, response }: HttpContextContract): Promise<void> {
        const page = request.input('page', 1)
        // const categoryId = request.input('categoryId', 1)
        const limit = 12
        const filters = request.only(['categoryId'])

        const categories = await Subcategory
            .query()
            .where('categoryId', filters.categoryId)
            //.whereNotNull('title')
            // .preload('category', (subCategoryQuery) => {
            //     subCategoryQuery.where('category_id', categoryId)
            // })
            .distinct('title')
            // .distinct('categoryId', filters.categoryId)

            .paginate(page, limit)
        return response.send(categories)
    }

    // public async show({ response, params }: HttpContextContract): Promise<void> {
    //     const id = params.productId
    //     const category = await Category.find(id)
    //     return response.send(category)
    // }

}
