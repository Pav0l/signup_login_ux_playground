// Import dependencies
const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
// Import middlewares
const errorMiddleware = require('../middleware/error');
// Import routes
const signupRoutes = require('./signup');
const loginRoutes = require('./login');

// Define variables
const app = express();
const signupUrl = '/api/signup';
const loginUrl = '/api/login';

app.use(express.json());
app.use(helmet());
app.use(cors());

app.use(signupUrl, signupRoutes);
app.use(loginUrl, loginRoutes);

app.get('/', (req, res) => {
  res.status(200).json('Main home');
});

app.use(errorMiddleware);

module.exports = app;
