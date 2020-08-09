import * as Knex from 'knex';

export async function up(knex: Knex){
    return knex.schema.createTable('connections', table => {
        table.increments('id').primary();
        
        table.integer('user_id').notNullable().references('id').inTable('users')
            .onDelete('CASCADE') //deleta todas as aulas que relacionam com esse id.
            .onUpdate('CASCADE'); // altera em todos os lugares que dependem desse id.

        table.timestamp('created_at')
            .defaultTo(knex.raw('CURRENT_TIMESTAMP'))
            .notNullable();
    });
}

export async function down(knex: Knex){
    return knex.schema.dropTable('connections');
}