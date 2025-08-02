const sumArray = (...args) => args.map(arr => arr.reduce((sum, num) => sum + num, 0));
console.log(sumArray([1, 2], [6, 7, 8], [12, 8]));