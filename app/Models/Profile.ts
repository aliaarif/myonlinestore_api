import { column, BaseModel, belongsTo, BelongsTo } from '@ioc:Adonis/Lucid/Orm'

import User from 'App/Models/User'

export default class Profile extends BaseModel {
    @column({ isPrimary: true })
    public id: number

    @column()
    public userId: number

    @column()
    public country: string

    @column()
    public state: string

    @column()
    public city: string

    @belongsTo(() => User)
    public user: BelongsTo<typeof User>
}
