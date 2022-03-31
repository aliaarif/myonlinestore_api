import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Brand from 'App/Models/Brand'
import Category from 'App/Models/Category'
import Subcategory from 'App/Models/Subcategory'
// import Database from '@ioc:Adonis/Lucid/Database'

export default class TestsController {
    public async brands({ response }: HttpContextContract): Promise<void> {
        const brands = await Brand.all()
        const categories = await Category.query().where('brandId', 1).select('id')
        var categoriesArr = [1]
        categories.forEach(function (category: any): void {
            const categoryId = category ? category.id : ''
            categoriesArr.push(categoryId)
        })
        categoriesArr.shift()
        categoriesArr.includes(5)



        brands.forEach((brand) => {
            return response.json([brand])
        })

        return response.send(brands)
    }

    public async categories({ response }: HttpContextContract): Promise<void> {

        const categories = await Category
            .query()

        return response.send(categories)
    }

    public async subcategories({ response }: HttpContextContract): Promise<void> {

        const subcategories = await Subcategory
            .query()

        return response.send(subcategories)
    }
}
