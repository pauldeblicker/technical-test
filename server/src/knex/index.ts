import Knex from 'knex';
import path from 'path';

export const knex = Knex({
  client: 'better-sqlite3',
  connection: {
    filename: path.resolve(__dirname, 'database.sqlite'),
  },
  useNullAsDefault: true,
});
