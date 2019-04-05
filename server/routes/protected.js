const express = require('express');

const { protectedRoute } = require('../middleware/auth');
const { getAllUsers } = require('../data/dbQueries');

const routes = express.Router();

/*
GET USERS
@dev - [GET] - req.headers must containt authorization header with valid JWT
@dev - returns an array of users
*/
routes.get('/', protectedRoute, async (req, res, next) => {
  try {
    const allUsers = await getAllUsers();

    if (allUsers) {
      res
        .status(200)
        .json({
          message: `Hello ${req.tokenPayload.username}, here are your users:`,
          users: allUsers,
        });
    } else {
      res.status(404).json({ error: 'No users were found' });
    }
  } catch (error) {
    next(error);
  }
});

module.exports = routes;
