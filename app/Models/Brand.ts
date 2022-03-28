import { DateTime } from 'luxon'
import { BaseModel, column, hasMany, HasMany } from '@ioc:Adonis/Lucid/Orm'

import Category from 'App/Models/Category'

import Product from 'App/Models/Product'

export default class Brand extends BaseModel {
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

  @hasMany(() => Category, {
    foreignKey: 'brandId',
  })
  public categories: HasMany<typeof Category>

  @hasMany(() => Product, {
    foreignKey: 'productId',
  })
  public products: HasMany<typeof Product>

}
