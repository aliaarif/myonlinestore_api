import Factory from '@ioc:Adonis/Lucid/Factory'

import { string } from '@ioc:Adonis/Core/Helpers'

import Profile from 'App/Models/Profile'

import Post from 'App/Models/Post'

import User from 'App/Models/User'

import Product from 'App/Models/Product'

// import Brand from 'App/Models/Brand'

import Category from 'App/Models/Category'
import Subcategory from 'App/Models/Subcategory'
import Address from 'App/Models/Address'
import Card from 'App/Models/Card'

// import Subcategory from 'App/Models/Subcategory'

export const CategoryFactory = Factory.define(Category, ({ faker }) => {
    const id = Math.floor(Math.random() * 7) + 1
    // const brand = Brand.find(id)
    // const brandId = brand ? brand?.id : 1
    const title = faker.lorem.words(2)
    return {
        brandId: id,
        title: title,
        slug: string.dashCase(title),
        description: faker.lorem.lines(1)
    }
}).build()

// export const SubcategoryFactory = Factory.define(Subcategory, ({ faker }) => {
//     const id = Math.floor(Math.random() * 50) + 1

//     const categories = Category.query().where('brandId', id).select('id')

//     // const brand = Brand.find(id)
//     // const brandId = brand ? brand?.id : 1
//     const title = faker.lorem.words(6)
//     return {
//         categoryId: id,
//         title: title,
//         slug: string.dashCase(title),
//         description: faker.lorem.lines(2)
//     }
// }).build()


export const ProductFactory = Factory
    .define(Product, async ({ faker }) => {
        const title = faker.commerce.productName()
        const slug = string.dashCase(title)
        const price = faker.commerce.price()
        let brandId = Math.floor(Math.random() * 7) + 1

        const randomCategory = await Category.query().where('brandId', brandId).first()
        const categoryId = randomCategory ? randomCategory?.id : 1

        const categories = await Category.query().where('brandId', brandId).select('id')
        var categoriesArr = [1]
        categories.forEach(function (category: any): void {
            // const categoryId = category ? category.id : ''
            categoriesArr.push(category ? category.id : '')
        })
        categoriesArr.shift()
        categoriesArr.includes(categoryId)





        let randomSubcategory = await Subcategory.query().where('categoryId', categoryId).first()
        const subcategoryId = randomSubcategory ? randomSubcategory?.id : 1



        const subcategories = await Subcategory.query().where('categoryId', subcategoryId).select('id')
        var subcategoriesArr = [1]
        subcategories.forEach(function (subcategory: any): void {
            // const categoryId = category ? category.id : ''
            subcategoriesArr.push(subcategory ? subcategory.id : '')
        })
        subcategoriesArr.shift()
        subcategoriesArr.includes(subcategoryId)


        return {
            brandId: brandId,
            categoryId: categoriesArr.includes(categoryId) ? categoryId : 1,
            subcategoryId: subcategoriesArr.includes(subcategoryId) ? subcategoryId : 1,
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

export const CardFactory = Factory.define(Card, () => {

    let cards = ['378282246310005', '371449635398431', '378734493671000', '5610591081018250', '4242424242424242', '30569309025904']
    let exp = ['1224', '1225', '0126', '1226', '0827', '1227']
    let cvv = ['123', '456', '789', '101', '113', '145']
    return {
        card_no: cards[Math.floor(Math.random() * 5)],
        card_exp: exp[Math.floor(Math.random() * 5)],
        card_cvv: cvv[Math.floor(Math.random() * 5)],

    }
}).build()

export const AddressFactory = Factory.define(Address, ({ faker }) => {
    const phone = faker.datatype.number({ min: 7777777777, max: 9999999999 })
    let zip = ['331023', '331023', '331023', '331023', '331023', '331023']
    let place = ['Pilani Mode', 'Sony Hospital', 'Fazal Hussen Point', 'Chauhan Bartan Bhandar', 'Giga Chowk', 'Kashan E Wafa']



    return {
        name: faker.internet.userName(),
        email: faker.internet.email(),
        phone: phone,
        address: faker.address.city() + ', ' + faker.address.state() + ', ' + faker.address.country(),
        zip: zip[Math.floor(Math.random() * 5)],
        place: place[Math.floor(Math.random() * 5)]
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
    .relation('addresses', () => AddressFactory) //
    .relation('cards', () => CardFactory) //
    .relation('posts', () => PostFactory) // ????
    .relation('products', () => ProductFactory) // ????
    .build()