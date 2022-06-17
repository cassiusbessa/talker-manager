const { hashGenerator } = require('../helpers');

const login = (req, res, _next) => {
  const { password } = req.body;

  return res.status(200).json({
    token: hashGenerator(password),
  });
};

module.exports = login;
