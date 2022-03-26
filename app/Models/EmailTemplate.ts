import { column, BaseModel } from '@ioc:Adonis/Lucid/Orm'

export default class EmailTemplate extends BaseModel {
    @column({ isPrimary: true })
    public id: number
}
