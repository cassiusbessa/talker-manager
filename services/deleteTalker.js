const { write, read } = require('../helpers');

const deleteTalker = async (req, res, _next) => {
  const { id } = req.params;
  const allUsers = await read('talker.json');
  const removedUser = allUsers.filter((user) => user.id !== Number(id));
  await write('talker.json', removedUser);
  return res.status(204).send();
};

module.exports = deleteTalker;
