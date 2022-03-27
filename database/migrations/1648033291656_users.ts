import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class UsersSchema extends BaseSchema {
  protected tableName = 'users'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary()
      table.string('name', 100).notNullable()
      table.string('email', 100).notNullable().unique()
      table.string('phone', 100).notNullable().unique()
      table.string('username', 100).notNullable().unique()
      table.string('password', 100).notNullable()
      table.string('remember_me_token').nullable()
      table.integer("created_by").defaultTo(1)
      table.integer("updated_by").defaultTo(1)
      table.dateTime("deleted_at").defaultTo(null)
      table.dateTime("created_at").notNullable()
      table.dateTime("updated_at").defaultTo(null)
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
