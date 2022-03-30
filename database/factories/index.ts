import Factory from '@ioc:Adonis/Lucid/Factory'

import { string } from '@ioc:Adonis/Core/Helpers'

import Profile from 'App/Models/Profile'

import Post from 'App/Models/Post'

import User from 'App/Models/User'

import Product from 'App/Models/Product'

export const ProductFactory = Factory
    .define(Product, ({ faker }) => {
        const title = faker.commerce.productName()
        const slug = string.dashCase(title)
        const price = faker.commerce.price()
        let brand = Math.floor(Math.random() * 7)
        let category = Math.floor(Math.random() * 20)
        let subcategory = Math.floor(Math.random() * 8)

        category = category ? category : 1
        brand = brand ? brand : 1
        subcategory = subcategory ? subcategory : 1
        return {
            brandId: brand,
            categoryId: category,
            subcategoryId: subcategory,
            title: title,
            slug: slug,
            price: price,
            image: slug,
            thumbnail: slug,
            description: slug
        }
    })
    .build()

export const ProfileFactory = Factory.define(Profile, ({ faker }) => {
    return {
        country: faker.address.country(),
        state: faker.address.state(),
        city: faker.address.city()
    }
}).build()

export const PostFactory = Factory.define(Post, ({ faker }) => {
    const title = faker.lorem.words(6)
    return {
        title: title,
        slug: string.dashCase(title),
        body: faker.lorem.lines(2)
    }
}).build()

export const UserFactory = Factory
    .define(User, ({ faker }) => {
        const phone = faker.datatype.number({ min: 7777777777, max: 9999999999 })
        return {
            name: faker.internet.userName(),
            email: faker.internet.email(),
            phone: phone,
            username: string.dashCase(faker.internet.userName()),
            password: 'password',
            created_by: 1,
        }
    })
    .relation('profile', () => ProfileFactory) //
    .relation('posts', () => PostFactory) // 👈
    .relation('products', () => ProductFactory) // 👈
    .build()