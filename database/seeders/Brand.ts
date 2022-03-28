import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Brand from 'App/Models/Brand'

import Category from 'App/Models/Category'

import Subcategory from 'App/Models/Subcategory'

export default class BrandSeeder extends BaseSeeder {

    public async run() {

        for (let i = 1; i <= 9; i++) {
            await Brand.createMany([
                {
                    title: 'B' + i,
                    slug: 'brand-' + i,
                    description: 'Dummy Description for B' + i + ' Brand'
                },
            ])
        }


        for (let i = 1; i <= 12; i++) {
            let brand = Math.floor(Math.random() * 3) + 1
            await Category.createMany([
                {
                    brandId: brand ? brand : 1,
                    title: 'Category ' + i,
                    slug: 'category-' + i,
                    description: 'Dummy Description for Category ' + i
                },

            ])
        }


        for (let i = 1; i <= 16; i++) {
            let category = Math.floor(Math.random() * 3) + 1
            await Subcategory.createMany([
                {
                    categoryId: category ? category : 1,
                    title: 'Sub Category ' + i,
                    slug: 'sub-category-' + i,
                    description: 'Dummy Description for Sub Category ' + i
                },
            ])
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
