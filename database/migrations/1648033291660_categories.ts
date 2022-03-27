import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Categories extends BaseSchema {
    protected tableName = 'categories'

    public async up() {
        this.schema.createTable(this.tableName, (table) => {
            table.increments('id').primary()
            table.string('title', 100)
            table.string('slug', 100).unique()
            table.string('description', 200)
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
