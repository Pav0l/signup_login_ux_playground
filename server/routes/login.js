const express = require('express');
const bcrypt = require('bcrypt');

const { createToken } = require('../middleware/auth');
const { getUserByName } = require('../data/dbQueries');

const routes = express.Router();

/*
LOGIN USER
@dev - [POST] - req.body must contain valid username and password
@dev - returns message with token or error
*/
routes.post('/', async (req, res, next) => {
  let { username, password } = req.body;

  try {
    const savedUser = await getUserByName(username);

    if (savedUser) {
      const hashedPw = savedUser.password;
      const areTheseProperCredentials = bcrypt.compareSync(password, hashedPw);

      if (areTheseProperCredentials) {
        const token = createToken(savedUser);

        res.status(200).json({ message: 'User logged in succesfully.', token });
      } else {
        res.status(401).json({ error: 'Incorrect password' });
      }
    } else {
      res.status(401).json({ error: `User ${username} does not exist.` });
    }
  } catch (error) {
    next(error);
  }
});

module.exports = routes;
