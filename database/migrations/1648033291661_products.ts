import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Products extends BaseSchema {
    protected tableName = 'products'

    public async up() {
        this.schema.createTable(this.tableName, (table) => {
            table.increments('id').primary()
            table.integer('user_id').unsigned().references('id').inTable('users').onDelete('CASCADE')
            table.integer('category_id').unsigned().references('id').inTable('categories').onDelete('CASCADE')
            // table.integer('subcategory_id').unsigned().references('id').inTable('subcategories').onDelete('CASCADE')
            table.string('title', 100)
            table.string('slug', 100).unique()
            table.decimal('price', 6, 2)
            table.string('image', 200)
            table.string('thumbnail', 200)
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
