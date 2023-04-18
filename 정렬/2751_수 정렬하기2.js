const fs = require('fs');
const input = fs.readFileSync('../example.txt').toString().trim().split('\n');
let inputs = [];
for (let i = 1; i < input.length; i++) {
  inputs.push(input[i]);
}
inputs.sort((a, b) => Number(a) - Number(b));
console.log(inputs.join('\n'));
