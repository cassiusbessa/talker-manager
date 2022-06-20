const fs = require('../helpers');

const getAll = async () => {
  const users = await fs.read('talker.json');
  return users;
};

module.exports = getAll;