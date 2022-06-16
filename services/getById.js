const models = require('../models');

const getById = async (req, res) => {
  const { id } = req.params;
  const foundUser = await models.getById(id);
  if (!foundUser) {
    return res.status(404).json({ message: 'Pessoa palestrante não encontrada' });
}
  return res.status(200).json(foundUser);
};

module.exports = getById;