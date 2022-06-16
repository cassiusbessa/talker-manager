const { read, write } = require('./fs');
const { hashGenerator } = require('./crypto/randomToken');

module.exports = {
  read,
  write,
  hashGenerator,
};