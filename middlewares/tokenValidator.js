const { read } = require('../helpers');

const tokenValidator = async (req, res, next) => {
  const users = await read('users.json');
  const token = req.headers.authorization;
  console.log(token);
  if (!token) return res.status(401).json({ message: 'Token não encontrado' }); 
  const match = users.some((user) => user.token === req.headers.authorization);
  if (match) return next();
  return res.status(401).json({ message: 'Token inválido' });
};

module.exports = tokenValidator;
