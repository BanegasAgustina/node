const { getFreeMemory, createLargeArray } = require('./process');

console.clear();

console.log("Espacio libre de memoria inicial:", getFreeMemory(), "bytes");

const largeArray = createLargeArray();

console.log("Espacio libre de memoria despues del proceso", getFreeMemory(), "bytes");
