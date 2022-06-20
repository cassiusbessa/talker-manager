const { hashGenerator, read, write } = require('../helpers');

const login = async (req, res, _next) => {
  const { email, password } = req.body;
  const users = await read('users.json');
  console.log(users);
  const token = hashGenerator(password);
  users.push({ email, token });
  write('users.json', users);
  return res.status(200).json({
    token,
  });
};

module.exports = login;
