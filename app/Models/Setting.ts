import { column, BaseModel, belongsTo, BelongsTo } from '@ioc:Adonis/Lucid/Orm'

import User from 'App/Models/User'

export default class Setting extends BaseModel {
    @column({ isPrimary: true })
    public id: number

    @belongsTo(() => User)
    public user: BelongsTo<typeof User>
}
