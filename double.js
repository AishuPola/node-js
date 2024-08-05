console.log("Hi,World");

const double = (num) => num * 2;
console.log(double(10));
const [, , num] = process.argv;
// console.log(globalThis.setTimeout(() => {}, timeout));
// console.log(globalThis); // onlu in node js
console.log(double(process.argv[2]));
