const express = require('express');
const knex = require('knex');

const routes = express.Router();


/*
SIGNUP USER
@dev - [POST] - req.body must contain valid username, email and password
*/
routes.post('/', async(req, res) => {
  const credentials = req.body;
  const { username, email, password } = credentials;

  if (username || email || password) {
    try {

      res.status(200).json({ message: "[GET] /api/users"});
    } catch (error) {
      next(error);
  }
  }
});


module.exports = routes;
