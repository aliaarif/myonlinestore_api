import { DateTime } from 'luxon'
import Hash from '@ioc:Adonis/Core/Hash'
import { beforeSave, column, BaseModel, hasOne, HasOne, hasMany, HasMany } from '@ioc:Adonis/Lucid/Orm'

import Setting from 'App/Models/Setting'

import Profile from 'App/Models/Profile'
import Post from 'App/Models/Post'

import Product from 'App/Models/Product'




export default class User extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public name: string

  @column()
  public email: string

  @column()
  public phone: number

  @column()
  public username: string

  @column({ serializeAs: null })
  public password: string

  @column()
  public rememberMeToken?: string

  @column()
  public created_by: number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @beforeSave()
  public static async hashPassword(user: User) {
    if (user.$dirty.password) {
      user.password = await Hash.make(user.password)
    }
  }

  @hasOne(() => Setting, {
    foreignKey: 'userId',
  })
  public setting: HasOne<typeof Setting>

  @hasOne(() => Profile, {
    foreignKey: 'userId',
  })
  public profile: HasOne<typeof Profile>

  @hasMany(() => Post, {
    foreignKey: 'userId',
  })
  public posts: HasMany<typeof Post>

  @hasMany(() => Product, {
    foreignKey: 'userId',
  })
  public products: HasMany<typeof Product>

}
