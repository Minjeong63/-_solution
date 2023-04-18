const fs = require('fs');
const input = fs.readFileSync('../example.txt').toString().trim().split('\n');
let sum = input.reduce((a, b) => a + Number(b), 0);
input.sort((a, b) => Number(a) - Number(b));
console.log(sum / input.length + '\n' + input[Math.floor(input.length / 2)]);
