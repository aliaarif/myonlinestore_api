import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import { CategoryFactory } from 'Database/factories'

export default class CategorySeeder extends BaseSeeder {
  public async run() {
    let randomNumber = Math.floor(Math.random() * 20) + 1
    await CategoryFactory.createMany(randomNumber)
  }
}
