import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class ProductVariants extends BaseSchema {
    protected tableName = 'product_variants'

    public async up() {
        this.schema.createTable(this.tableName, (table) => {
            table.increments('id').primary()
            table.integer('product_id').unsigned().references('id').inTable('products').onDelete('CASCADE')
            table.integer('category_id').unsigned().references('id').inTable('categories').onDelete('CASCADE')
        })
    }

    public async down() {
        this.schema.dropTable(this.tableName)
    }
}
