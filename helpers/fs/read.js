const fs = require('fs/promises');

const read = async (file) => {
  try {
    const data = await fs.readFile(file, { encoding: 'utf8' });
    return JSON.parse(data);    
  } catch (err) {
    console.log(err.message);
  }
};

module.exports = read;