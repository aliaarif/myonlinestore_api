import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Orders extends BaseSchema {
    protected tableName = 'orders'

    public async up() {
        this.schema.createTable(this.tableName, (table) => {
            table.increments('id').primary()
            table.integer('user_id').unsigned().references('id').inTable('users').onDelete('CASCADE')
            table.integer('address_id').unsigned().references('id').inTable('addresses').onDelete('CASCADE')
            table.integer('card_id').unsigned().references('id').inTable('cards').onDelete('CASCADE')
            table.string('title', 100)
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
