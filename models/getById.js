const fs = require('../helpers');

const getById = async (id) => {
  const users = await fs.read('talker.json');
  const foundUser = users.find((user) => user.id === Number(id));
  return foundUser;
};

module.exports = getById;