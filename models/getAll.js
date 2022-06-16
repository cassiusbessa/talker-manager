const fs = require('../helpers');

const getAll = async () => {
  const users = await fs.read();
  return users;
};

module.exports = getAll;