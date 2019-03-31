const knex = require('knex');
const knewxConfig = require('../knexfile');

const db = knex(knewxConfig.development);

module.exports = {
  insertUser,
};

function insertUser(name, email, password) {
  return db('users').insert({ name, email, password });
}
