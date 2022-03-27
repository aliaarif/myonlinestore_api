import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'

import { string } from '@ioc:Adonis/Core/Helpers'

import Category from 'App/Models/Category'

import Subcategory from 'App/Models/Subcategory'

export default class CategorySeeder extends BaseSeeder {
  public async run() {

    // console.log = function (msg, ...options) {
    //   const ignore = '.returning() is not supported by mysql and will not have any effect.'
    //   if (msg.indexOf(ignore) === -1) {
    //     console.info(msg, ...options)
    //   }
    // }

    await Category.createMany([
      {
        title: 'Sweets',
        slug: 'sweets',
        description: 'Dummy Description for Sweets Category'
      },
      {
        title: 'Vegitables',
        slug: 'vegitables',
        description: 'Dummy Description for Vegitables Category'
      },
      {
        title: 'Fast Food',
        slug: string.dashCase('Fast Food'),
        description: 'Dummy Description for Fast Food Category'
      },
    ])


    for (let i = 1; i <= 3; i++) {

      if (i === 1) {
        await Subcategory.createMany([
          {
            categoryId: i,
            title: 'Sitta',
            slug: 'sitta',
            description: 'Dummy Description for Sitta Subcategory'
          },
          {
            categoryId: i,
            title: 'Kalakand',
            slug: 'kalakand',
            description: 'Dummy Description for Kalakand Subcategory'
          },
          {
            categoryId: i,
            title: 'Rasgulla',
            slug: 'rasgulla',
            description: 'Dummy Description for Rasgulla Subcategory'
          },
          {
            categoryId: i,
            title: 'Kaju Katli',
            slug: 'kaju-katli',
            description: 'Dummy Description for Kaju Katli Subcategory'
          },
          {
            categoryId: i,
            title: 'Son Papri',
            slug: 'son-papri',
            description: 'Dummy Description for Son Papri Subcategory'
          },
        ])
      }

      if (i === 2) {
        await Subcategory.createMany([
          {
            categoryId: i,
            title: 'Potato',
            slug: 'potato',
            description: 'Dummy Description for Potato Subcategory'
          },
          {
            categoryId: i,
            title: 'Tomato',
            slug: 'tomato',
            description: 'Dummy Description for Tomato Subcategory'
          }
        ])
      }

      if (i === 3) {
        await Subcategory.createMany([
          {
            categoryId: i,
            title: 'Pizza',
            slug: 'pizza',
            description: 'Dummy Description for Pizza Subcategory'
          },
          {
            categoryId: i,
            title: 'Dossa',
            slug: 'dossa',
            description: 'Dummy Description for Dossa Subcategory'
          },
          {
            categoryId: i,
            title: 'Burger',
            slug: 'burger',
            description: 'Dummy Description for Burger Subcategory'
          },
          {
            categoryId: i,
            title: 'Frech Fries',
            slug: 'frech-fries',
            description: 'Dummy Description for Frech Fries Subcategory'
          },
        ])
      }

    }

  }
}
