import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
// import { CategoryFactory } from 'Database/factories'
import Category from 'App/Models/Category'

export default class CategorySeeder extends BaseSeeder {
  public async run() {
    // let randomNumber = Math.floor(Math.random() * 7) + 1
    // await CategoryFactory.createMany(randomNumber)

    for (let i = 1; i <= 7; i++) {
      // const id = Math.floor(Math.random() * 7) + 1
      await Category.createMany([
        {
          brandId: i,
          title: 'Sweets',
          slug: 'sweets-' + i,
          description: 'dummy desc'
        },

        {
          brandId: i,
          title: 'Rashan',
          slug: 'rashan-' + i,
          description: 'dummy desc'
        },

        {
          brandId: i,
          title: 'Personal Care',
          slug: 'personal-care-' + i,
          description: 'dummy desc'
        },

        {
          brandId: i,
          title: 'Ertras',
          slug: 'extras-' + i,
          description: 'dummy desc'
        },
      ])
    }
  }
}
