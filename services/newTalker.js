const { read, write } = require('../helpers');

const newTalker = async (req, res, _next) => {
  const talkers = await read('talker.json');
  req.body.id = talkers.length + 1;
  talkers.push(req.body);
  await write('talker.json', talkers);
  return res.status(201).json(req.body);
};

module.exports = newTalker;
