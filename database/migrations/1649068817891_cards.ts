import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Cards extends BaseSchema {
  protected tableName = 'cards'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.integer('user_id').unsigned().references('id').inTable('users').onDelete('CASCADE')
      table.string('card_no', 16).notNullable()
      table.string('card_exp', 4).notNullable()
      table.string('card_cvv', 3).notNullable()
      table.dateTime("deleted_at").defaultTo(null)
      table.dateTime("created_at").notNullable()
      table.dateTime("updated_at").defaultTo(null)
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
