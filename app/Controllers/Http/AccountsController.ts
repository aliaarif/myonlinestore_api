import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Address from 'App/Models/Address'


export default class AccountsController {
    public async index({ request, response }: HttpContextContract): Promise<void> {
        const filters = request.only(['userId'])
        const addresses = await Address
            .query()
            .where('userId', filters.userId)

        return response.send(addresses)
    }


    // public async findOneCategory({ response, params }: HttpContextContract): Promise<void> {
    //     const category = await Category
    //         .query()
    //         .where('brandId', params.id)
    //         .first()
    //     return response.send(category?.id ?? 0)
    // }
}
