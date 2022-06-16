const fs = require('fs/promises');

const write = async (data) => {
  try {
    await fs.writeFile('talker.json', JSON.stringify(data));
  } catch (err) {
    console.log(err);
  }
};

module.exports = write;