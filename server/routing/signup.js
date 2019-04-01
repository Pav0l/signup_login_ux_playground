const express = require('express');
const bcrypt = require('bcrypt');
const DB = require('../data/dbQueries');

const routes = express.Router();

/*
SIGNUP USER
@dev - [POST] - req.body must contain valid username, email and password
*/
routes.post('/', async(req, res, next) => {
  let { username, email, password } = req.body;
  
  if (username || email || password) {
    try {
      const hash = bcrypt.hashSync(password, 14);  
      password = hash;
      const addNewUser = await DB.insertUser(username, email, password);
      res.status(200).json(addNewUser);
    } catch (error) {
      next(error);
    }
  } else {
    res.status(400).json({ message: 'Please enter username, email and password.'});
  }
});


module.exports = routes;
