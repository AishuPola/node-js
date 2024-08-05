const sum = (a, b) => +a + +b;
const [, , a, b] = process.argv;
console.log(sum(process.argv[2], process.argv[3]));
