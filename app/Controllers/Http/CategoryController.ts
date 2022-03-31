import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Category from 'App/Models/Category'


export default class CategoryController {
    public async index({ request, response }: HttpContextContract): Promise<void> {
        const page = request.input('page', 1)
        const limit = 12
        const filters = request.only(['categoryId'])
        const categories = await Category
            .query()
            .where('id', filters.categoryId)
            .paginate(page, limit)
        return response.send(categories)
    }
}
