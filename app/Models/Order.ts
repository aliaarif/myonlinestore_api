import { column, BaseModel, hasMany, HasMany } from '@ioc:Adonis/Lucid/Orm'

import OrderItem from 'App/Models/OrderItem'

export default class Order extends BaseModel {
    @column({ isPrimary: true })
    public id: number

    @hasMany(() => OrderItem)
    public items: HasMany<typeof OrderItem>

}
