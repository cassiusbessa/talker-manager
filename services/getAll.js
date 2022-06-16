const models = require('../models');

const getAll = async (_req, res) => {
  const users = await models.getAll();

  if (users.length === 0) {
  return res.status(200).json(users);
}
  return res.status(200).json(users);
};

module.exports = getAll;