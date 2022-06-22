const getAll = require('./getAll');
const getById = require('./getById');
const login = require('./login');
const newTalker = require('./newTalker');
const editTalker = require('./editTalker');
const deleteTalker = require('./deleteTalker');
const searchByName = require('./searchByName');

module.exports = {
  getAll,  
  getById,
  login,
  newTalker,
  editTalker,
  deleteTalker,
  searchByName,
};
