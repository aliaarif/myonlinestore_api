import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Categories extends BaseSchema {
    protected tableName = 'subcategories'

    public async up() {
        this.schema.createTable(this.tableName, (table) => {
            table.increments('id').primary()
            table.integer('category_id').unsigned().references('id').inTable('categories').onDelete('CASCADE')
            table.string('title', 100)
            table.string('slug', 100)
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
