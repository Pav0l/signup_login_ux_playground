const express = require('express');
const DB = require('../data/dbQueries');

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
      const addNewUser = await DB.insertUser(username, email, password);
      res.status(200).json(addNewUser);
    } catch (error) {
      next(error);
    }
  }
});


module.exports = routes;
