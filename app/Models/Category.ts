import { DateTime } from 'luxon'

import { column, BaseModel, hasMany, HasMany } from '@ioc:Adonis/Lucid/Orm'

import Product from 'App/Models/Product'

export default class Category extends BaseModel {
    @column({ isPrimary: true })
    public id: number

    @column()
    public title: string

    @column()
    public slug: string

    @column()
    public description: string

    @column()
    public created_by: number

    @column.dateTime({ autoCreate: true })
    public createdAt: DateTime

    @column.dateTime({ autoCreate: true, autoUpdate: true })
    public updatedAt: DateTime

    @hasMany(() => Product, {
        foreignKey: 'productId',
    })
    public products: HasMany<typeof Product>




}
