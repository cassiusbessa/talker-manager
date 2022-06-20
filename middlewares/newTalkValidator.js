const talkerSchema = require('../schemas/talkerSchema');

const newTalkerValidator = (req, res, next) => {
  const { error } = talkerSchema.validate(req.body);
  if (!error) return next();
  return res.status(400).json({ message: error.message });
};

module.exports = newTalkerValidator;
