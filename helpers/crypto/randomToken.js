const crypto = require('crypto-js');

const salt = crypto.lib.WordArray.random(128 / 8);

// const hash = crypto.PBKDF2('123456', salt, { keySize: 128 / 64, iterations: 1000 });

const hashGenerator = (password) => { 
  const hash = crypto.PBKDF2(password, salt, { keySize: 128 / 64, iterations: 1000 });
  return hash.toString();
};

module.exports = {
  hashGenerator,
};