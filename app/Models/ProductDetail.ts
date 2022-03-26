import { column, BaseModel, belongsTo, BelongsTo } from '@ioc:Adonis/Lucid/Orm'

import Product from 'App/Models/Product'

export default class ProductDetail extends BaseModel {
    @column({ isPrimary: true })
    public id: number

    @belongsTo(() => Product)
    public product: BelongsTo<typeof Product>
}
