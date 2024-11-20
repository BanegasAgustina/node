const os = require('os');

function getFreeMemory() {
  return os.freemem();
}

function createLargeArray() {
  const array = [];
  for (let i = 0; i < 1000000; i++) {
    array.push(i);
  }
  return array;
}

module.exports = { getFreeMemory, createLargeArray };
