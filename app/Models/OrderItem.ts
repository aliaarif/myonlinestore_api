import { column, BaseModel, belongsTo, BelongsTo } from '@ioc:Adonis/Lucid/Orm'

import Order from 'App/Models/Order'

export default class OrderItem extends BaseModel {
    @column({ isPrimary: true })
    public id: number

    @belongsTo(() => Order)
    public order: BelongsTo<typeof Order>
}
