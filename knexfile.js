// Update with your config settings.

module.exports = {
  development: {
    client: 'sqlite3',
    useNullAsDefault: true, // used for sqlite
    connection: { // an object or a string
      filename: './data/produce.db3' // from the root folder
    },
    migrations: {
      directory: './data/migrations'
    }
  }
}

// to create a migration === knex migrate:make
// to run all pending migrations === knex migrate:latest
// to undo migrations === knex migrate:rollback