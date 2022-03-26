import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class OrderItems extends BaseSchema {
    protected tableName = 'order_items'

    public async up() {
        this.schema.createTable(this.tableName, (table) => {
            table.increments('id').primary()
            table.integer('order_id').unsigned().references('id').inTable('orders').onDelete('CASCADE')
            table.string('description', 200)
        })
    }

    public async down() {
        this.schema.dropTable(this.tableName)
    }
}
