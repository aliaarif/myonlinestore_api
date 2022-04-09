import { DateTime } from 'luxon'

import { column, BaseModel, belongsTo, BelongsTo } from '@ioc:Adonis/Lucid/Orm'

import User from 'App/Models/User'


export default class ApiToken extends BaseModel {
    @column({ isPrimary: true })
    public id: number

    @column()
    public userId: number

    @column()
    public name: string

    @column()
    public type: string

    @column()
    public token: string

    @column()
    public is_revoked: number

    @column()
    public expiresAt: DateTime

    @column.dateTime({ autoCreate: true })
    public createdAt: DateTime

    @column.dateTime({ autoCreate: true, autoUpdate: true })
    public updatedAt: DateTime

    @belongsTo(() => User)
    public user: BelongsTo<typeof User>
}
