import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Addresses extends BaseSchema {
  protected tableName = 'addresses'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.integer('user_id').unsigned().references('id').inTable('users').onDelete('CASCADE')
      table.string('name', 100).notNullable()
      table.string('email', 100).notNullable()
      table.string('phone', 100).notNullable()
      table.string('address', 100).notNullable()
      table.string('zip', 100).notNullable()
      table.string('place', 100).notNullable()
      table.dateTime("deleted_at").defaultTo(null)
      table.dateTime("created_at").notNullable()
      table.dateTime("updated_at").defaultTo(null)
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
