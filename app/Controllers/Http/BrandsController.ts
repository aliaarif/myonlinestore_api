import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Brand from 'App/Models/Brand'


export default class BrandsController {
    public async index({ request, response }: HttpContextContract): Promise<void> {
        const page = request.input('page', 1)
        const limit = 30
        const categories = await Brand
            .query()
            .paginate(page, limit)
        return response.send(categories)
    }
}
