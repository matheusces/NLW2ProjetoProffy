import * as Knex from 'knex';

export async function up(knex: Knex){
    return knex.schema.createTable('classes', table => {
        table.increments('id').primary();
        table.string('subject').notNullable();
        table.decimal('cost').notNullable();

        table.integer('user_id').notNullable().references('id').inTable('users')
            .onDelete('CASCADE') //deleta todas as aulas que relacionam com esse id.
            .onUpdate('CASCADE'); // altera em todos os lugares que dependem desse id.
    });
}

export async function down(knex: Knex){
    return knex.schema.dropTable('classes');
}