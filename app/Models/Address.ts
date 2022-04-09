import { DateTime } from 'luxon'
import { BaseModel, column, belongsTo, BelongsTo, } from '@ioc:Adonis/Lucid/Orm'
import User from 'App/Models/User'

export default class Address extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public userId: number

  @column()
  public name: string

  @column()
  public email: string

  @column()
  public phone: number

  @column()
  public address: string

  @column()
  public zip: string

  @column()
  public place: string

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @belongsTo(() => User)
  public user: BelongsTo<typeof User>
}
