let connectionString = 'postgres://postgres:SteelSeries123@localhost:5432/postgres'
let knex = require('knex')({
  client: 'pg',
  connection: connectionString,
  acquireConnectionTimeout: 10000000
})
exports.model = require('bookshelf')(knex)
