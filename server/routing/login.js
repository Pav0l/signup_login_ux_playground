const express = require('express');

const routes = express.Router();


/*
LOGIN USER
@dev - [POST] - req.body must contain valid username and password
*/
routes.post('/api/login', async(req, res) => {

  try {
    res.status(200).json({ message: "[GET] /api/users"});
  } catch (error) {
    res.status(500).status({ message: "Something went wrong", error });
  }
});


module.exports = routes;
