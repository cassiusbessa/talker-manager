const { write, read } = require('../helpers');

const editTalker = async (req, res, _next) => {
  // const { id } = req.params;
  // const allUsers = await read('talker.json');
  // const foundUser = allUsers.find((user) => user.id === Number(id));
  // const editedUser = Object.assign(foundUser, req.body);
  // const newUsers = allUsers.map((user) => (user.id === Number(id) ? editedUser : user));
  // sugestão do Anderson abaixo:
  const { id } = req.params;
  const allUsers = await read('talker.json');
  const indexToEdit = allUsers.findIndex((user) => user.id === Number(id));
  console.log(indexToEdit);
  if (indexToEdit === -1) return res.status(404).json({ message: 'Palestrante não encontrado' });
  allUsers[indexToEdit] = { ...allUsers[indexToEdit], ...req.body };
  await write('talker.json', allUsers);
  return res.status(200).json(allUsers[indexToEdit]);
};

module.exports = editTalker;
