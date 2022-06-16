const { hashGenerator } = require('../helpers');

const login = (req, res, _next) => {
  const { email, password } = req.body;
  console.log(email, password);
  const hash = hashGenerator(password);
  return hash;
};
