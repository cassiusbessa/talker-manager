const { hashGenerator } = require('../helpers');

const login = (req, res, _next) => {
  const { password } = req.body;
  // return res.status(200).set('Content-Type', 'application/json').json({
  //   hash,
  // });
  // return res.set('token', hashGenerator(password));
  return res.status(200).json({
    token: hashGenerator(password),
  });
  // return res.status(200).json('Content-Type', 'application/json').json({
  //   token: hashGenerator(password),
  // });
};

module.exports = login;
