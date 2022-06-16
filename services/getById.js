const models = require('../models');

const getById = async (req, res) => {
  const { id } = req.params;
  const users = await models.getAll();
  const foundUser = users.find((user) => user.id === Number(id));
  if (!foundUser) {
    return res.status(404).json({ message: 'Pessoa palestrante não encontrada' });
}
  return res.status(200).json(foundUser);
};

module.exports = getById;