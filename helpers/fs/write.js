const fs = require('fs/promises');

const write = async (file, data) => {
  try {
    await fs.writeFile(file, JSON.stringify(data));
  } catch (err) {
    console.log(err);
  }
};

module.exports = write;