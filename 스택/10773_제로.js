let fs = require('fs');
let input = fs.readFileSync('example.txt').toString().split('\n');
let n = input[0];
let stack = [];

for (let i = 1; i <= n; i++) {
  if (input[i] !== '0') stack.push(Number(input[i]));
  else stack.pop();
}
console.log(stack.reduce((acc, cur) => acc + cur, 0));
