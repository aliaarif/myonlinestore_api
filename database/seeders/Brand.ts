import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Brand from 'App/Models/Brand'

import Category from 'App/Models/Category'

import Subcategory from 'App/Models/Subcategory'

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


        for (let i = 1; i <= 20; i++) {
            let brand = Math.floor(Math.random() * 7) // Total Brands Available
            // const condition = i === 0 ? true : false
            await Category.createMany([
                {
                    brandId: brand ? brand : 1,
                    title: 'Category ' + i,
                    slug: 'category-' + i,
                    description: 'Dummy Description for Category ' + i
                },

            ])



            for (let j = 1; j <= 8; j++) {
                let category = await Category.query().where('brandId', brand).paginate(1, 1)

                // const condition = i === 0 ? true : false
                await Subcategory.createMany([
                    {
                        categoryId: category['id'],
                        // categoryId: category,
                        title: 'Sub Category ' + i + '-' + j,
                        slug: 'subcategory-' + i + '-' + j,
                        description: 'Dummy Description for Sub Category ' + j + '-' + i
                    },
                ])
            }






        }








        // for (let i = 1; i <= 3; i++) {

        //     if (i === 1) {
        //         await Subcategory.createMany([
        //             {
        //                 categoryId: i,
        //                 title: 'Sitta',
        //                 slug: 'sitta',
        //                 description: 'Dummy Description for Sitta Subcategory'
        //             },
        //             {
        //                 categoryId: i,
        //                 title: 'Kalakand',
        //                 slug: 'kalakand',
        //                 description: 'Dummy Description for Kalakand Subcategory'
        //             },
        //             {
        //                 categoryId: i,
        //                 title: 'Rasgulla',
        //                 slug: 'rasgulla',
        //                 description: 'Dummy Description for Rasgulla Subcategory'
        //             },
        //             {
        //                 categoryId: i,
        //                 title: 'Kaju Katli',
        //                 slug: 'kaju-katli',
        //                 description: 'Dummy Description for Kaju Katli Subcategory'
        //             },
        //             {
        //                 categoryId: i,
        //                 title: 'Son Papri',
        //                 slug: 'son-papri',
        //                 description: 'Dummy Description for Son Papri Subcategory'
        //             },
        //         ])
        //     }

        //     if (i === 2) {
        //         await Subcategory.createMany([
        //             {
        //                 categoryId: i,
        //                 title: 'Potato',
        //                 slug: 'potato',
        //                 description: 'Dummy Description for Potato Subcategory'
        //             },
        //             {
        //                 categoryId: i,
        //                 title: 'Tomato',
        //                 slug: 'tomato',
        //                 description: 'Dummy Description for Tomato Subcategory'
        //             }
        //         ])
        //     }

        //     if (i === 3) {
        //         await Subcategory.createMany([
        //             {
        //                 categoryId: i,
        //                 title: 'Pizza',
        //                 slug: 'pizza',
        //                 description: 'Dummy Description for Pizza Subcategory'
        //             },
        //             {
        //                 categoryId: i,
        //                 title: 'Dossa',
        //                 slug: 'dossa',
        //                 description: 'Dummy Description for Dossa Subcategory'
        //             },
        //             {
        //                 categoryId: i,
        //                 title: 'Burger',
        //                 slug: 'burger',
        //                 description: 'Dummy Description for Burger Subcategory'
        //             },
        //             {
        //                 categoryId: i,
        //                 title: 'Frech Fries',
        //                 slug: 'frech-fries',
        //                 description: 'Dummy Description for Frech Fries Subcategory'
        //             },
        //         ])
        //     }

        // }

    }
}
