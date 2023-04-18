const fs = require('fs');
const input = fs.readFileSync('../example.txt').toString().trim().split('\n');
const n = input[0].split(' ')[0];
const k = input[0].split(' ')[1];
const inputs = input[1].split(' ').sort((a, b) => Number(b) - Number(a));
console.log(inputs[k - 1]);
