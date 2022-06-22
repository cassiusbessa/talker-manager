const { read } = require('../helpers');

const searchByName = async (req, res, next) => {
  console.log(req.query);
  if (!req.query.q) return next();
  const talkers = await read('talker.json');
  const results = talkers.filter((talker) => talker.name.toLowerCase()
    .includes(req.query.q.toLowerCase()));
  return res.status(200).json(results);
};

module.exports = searchByName;