import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'

import { UserFactory } from 'Database/factories'

export default class UserSeeder extends BaseSeeder {
    public async run() {
        await UserFactory.with('profile', 1).with('addresses', 4).with('cards', 4).with('posts', 2).with('products', 6).createMany(7)
    }
}