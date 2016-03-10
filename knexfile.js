// Update with your config settings.

module.exports = {

  development: {
    client: 'pg',
    connection: {
      filename: 'postgres://localhost/node_passport'
    },
    migrations: {
      tableName: 'migrations'
    }

  },

  staging: {
    client: 'pg',
    connection: {
      database: 'node_passport',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  production: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};
