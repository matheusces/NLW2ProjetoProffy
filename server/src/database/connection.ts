import * as knex from 'knex';
import * as path from 'path';

// migrations -> controlam as versões do banco de dados.

const db = knex({
    client: 'sqlite3',
    connection: {
        filename: path.resolve(__dirname, 'database.sqlite')
    },
    useNullAsDefault: true,
});

export default db;