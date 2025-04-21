const numbers = [1, 2, 3];
console.log(...numbers); // 1 2 3

function sum(...args) {
  return args.reduce((total, num) => total + num, 0);
}
console.log(sum(1, 2, 3)); // 6
