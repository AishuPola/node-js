const os = require("os");
const convertToGb = (num) => `${(num / 1024 / 1024 / 1024).toFixed(1)}Gb`;
console.log(convertToGb(os.freemem())); //gett in kb,ram in gb is free
// let total_mem = (os.totalmem() / 1024 / 1024 / 1024).toFixed(1);
console.log(convertToGb(os.totalmem()));
const occupiedMemory = (free, total) =>
  `${((1 - free / total) * 100).toFixed(2)}Gb`;

console.log(occupiedMemory(os.freemem(), os.totalmem()));
