const jwt = require('jsonwebtoken');

const createToken = user => {
  const { user_id, username } = user;

  const tokenPayload = {
    user_id,
    username,
  };

  const tokenOptions = {
    expiresIn: '7d',
  };

  return jwt.sign(tokenPayload, process.env.JWT_SECRET, tokenOptions);
};

const protectedRoute = (req, res, next) => {
  const token = req.headers.authorization;

  if (token) {
    // jwt.verify returns the payload if token is valid or throws an error if not
    jwt.verify(token, process.env.JWT_SECRET, (err, tokenPayload) => {
      if (err) {
        res.status(401).json({ message: 'Not authorized' });
      } else {
        req.tokenPayload = tokenPayload;
        next();
      }
    });
  } else {
    res.status(400).jsom({ message: 'No credentials provided' });
  }
};

module.exports = {
  createToken,
  protectedRoute,
};
