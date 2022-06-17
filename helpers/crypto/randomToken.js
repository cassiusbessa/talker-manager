const crypto = require('crypto-js');

const hashGenerator = (password) => { 
  const salt = crypto.lib.WordArray.random(128 / 8);
  const hash = crypto.PBKDF2(password, salt, { keySize: 128 / 64, iterations: 1000 });
  return hash.toString();
};

console.log(hashGenerator('123456'));
module.exports = {
  hashGenerator,
};