import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class ProductDetails extends BaseSchema {
    protected tableName = 'product_details'

    public async up() {
        this.schema.createTable(this.tableName, (table) => {
            table.increments('id').primary()
            table.integer('product_id').unsigned().references('id').inTable('products').onDelete('CASCADE')
        })
    }

    public async down() {
        this.schema.dropTable(this.tableName)
    }
}
