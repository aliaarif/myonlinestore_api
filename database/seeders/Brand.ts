import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Brand from 'App/Models/Brand'

// import Category from 'App/Models/Category'

// import Subcategory from 'App/Models/Subcategory'

export default class BrandSeeder extends BaseSeeder {

    public async run() {



        for (let i = 1; i <= 7; i++) {
            // const condition = i === 1 ? true : false
            await Brand.createMany([
                {
                    title: 'B' + i,
                    slug: 'brand-' + i,
                    description: 'Dummy Description for Brand' + i + ' Brand'
                },
            ])
        }


        // for (let i = 1; i <= 20; i++) {
        //     let brandId = Math.floor(Math.random() * 7) // Total Brands Available
        //     // const condition = i === 0 ? true : false
        //     await Category.createMany([
        //         {
        //             brandId: brandId ? brandId : 1,
        //             title: 'Category ' + i,
        //             slug: 'category-' + i,
        //             description: 'Dummy Description for Category ' + i
        //         },

        //     ])

        // }


        // for (let i = 1; i <= 4; i++) {
        //     const id = Math.floor(Math.random() * 7) + 1
        //     const brand = await Brand.find(id)
        //     const brandId = brand ? brand?.id : 1


        //     const category = await Category.query().where('brandId', brandId).first()
        //     const categoryId = category ? category?.id : 1

        //     await Subcategory.createMany([
        //         {
        //             categoryId: categoryId,
        //             title: 'Sub Category ' + i,
        //             slug: 'subcategory-' + i,
        //             description: 'Dummy Description for Sub Category ' + i
        //         },
        //     ])
        // }

    }
}
