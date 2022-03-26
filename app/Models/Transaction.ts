import { column, BaseModel, belongsTo, BelongsTo } from '@ioc:Adonis/Lucid/Orm'

import Order from 'App/Models/Order'

export default class Transaction extends BaseModel {
    @column({ isPrimary: true })
    public id: number

    @belongsTo(() => Order)
    public order: BelongsTo<typeof Order>
}
