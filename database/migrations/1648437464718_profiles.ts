import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Profiles extends BaseSchema {
    protected tableName = 'profiles'

    public async up() {
        this.schema.createTable(this.tableName, (table) => {
            table.increments('id').primary()
            table.integer('user_id').unsigned().references('id').inTable('users').onDelete('CASCADE')
            table.string('country', 100).nullable()
            table.string('state', 100).nullable()
            table.string('city', 100).nullable()
        })
    }

    public async down() {
        this.schema.dropTable(this.tableName)
    }
}
