import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Noticias extends BaseSchema {
  protected tableName = 'noticias'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')

      table.string('titulo',150).notNullable()
      table.string('chamada',200).notNullable()
      table.text('conteudo').notNullable()



      /**
       * Uses timestamptz for PostgreSQL and DATETIME2 for MSSQL
       */
      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
