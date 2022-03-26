import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class StatesSchema extends BaseSchema {
    protected tableName = 'states'

    public async up() {
        this.schema.createTable(this.tableName, (table) => {
            table.increments('id').primary()
            table.integer('country_id').unsigned().references('id').inTable('countries').onDelete('CASCADE')
            table.string('name', 100).notNullable()

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
