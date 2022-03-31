import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
// import { SubcategoryFactory } from 'Database/factories'

import Brand from 'App/Models/Brand'

import Category from 'App/Models/Category'

import Subcategory from 'App/Models/Subcategory'

export default class SubcategorySeeder extends BaseSeeder {
    public async run() {
        const brands = await Brand.all()
        brands.forEach(async (brand: any) => {

            brand = brand ? brand?.id : Math.floor(Math.random() * 7) + 1

            const id = Math.floor(Math.random() * 7) + 1

            const categories = await Category.query().where('brandId', id)

            categories.forEach(async (category: any) => {

                const categoryId = category ? category?.id : 1

                Subcategory.createMany([
                    {
                        categoryId: categoryId,
                        title: 'Sub Category ' + category?.id,
                        slug: 'subcategory-' + category?.id,
                        description: 'Dummy Description for Sub Category ' + category?.id
                    },
                ])

            });



        });

        // const brandId = brand ? brand?.id : 1








    }


}
