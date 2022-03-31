import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Category from 'App/Models/Category'


export default class CategoryController {
    public async index({ request, response }: HttpContextContract): Promise<void> {
        const page = request.input('page', 1)
        const limit = 12
        const filters = request.only(['brandId'])
        const categories = await Category
            .query()
            .where('brandId', filters.brandId)
            .paginate(page, limit)
        return response.send(categories)
    }
}
