const knex = require('knex');
const knewxConfig = require('../knexfile');

const db = knex(knewxConfig.development);

module.exports = {
  insertUser,
};

function insertUser(username, email, password) {
  return db('users').insert({ username, email, password });
}
