import { DateTime } from 'luxon'

import { column, BaseModel, belongsTo, BelongsTo, hasMany, HasMany } from '@ioc:Adonis/Lucid/Orm'

import Brand from 'App/Models/Brand'

import Category from 'App/Models/Category'

import Subcategory from 'App/Models/Subcategory'

import User from 'App/Models/User'

export default class Product extends BaseModel {
    @column({ isPrimary: true })
    public id: number

    @column()
    public userId: number

    @column()
    public brandId: number

    @column()
    public categoryId: number

    @column()
    public subcategoryId: number

    @column()
    public title: string

    @column()
    public slug: string

    @column()
    public price: string

    @column()
    public image: string

    @column()
    public thumbnail: string

    @column()
    public description: string

    @column()
    public created_by: number

    @column.dateTime({ autoCreate: true })
    public createdAt: DateTime

    @column.dateTime({ autoCreate: true, autoUpdate: true })
    public updatedAt: DateTime

    @belongsTo(() => User)
    public user: BelongsTo<typeof User>

    @hasMany(() => Brand)
    public brands: HasMany<typeof Brand>

    @belongsTo(() => Category)
    public category: BelongsTo<typeof Category>

    @belongsTo(() => Subcategory)
    public subcategory: BelongsTo<typeof Subcategory>

}
