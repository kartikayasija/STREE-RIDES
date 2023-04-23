const jwt = require("jsonwebtoken");


exports.auth = (req, res, next) => {
  try {
    const token = req.get('Authorization').split('Bearer ')[1];
    jwt.verify(token, process.env.SECRET, (err, user) => {
      if (err) {
        res.status(401).json({
          message: 'Token is not valid',
          error: err,
        });
      } else {
        req.user = user;
        next();
      }
    });
  } catch (err) {
    res.status(401).json({
      message: 'Token is missing or invalid',
      error: err,
    });
  }
};
