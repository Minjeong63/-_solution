const fs = require('fs');
const input = fs.readFileSync('../example.txt').toString().split('\n');
const n = Number(input[0]);
const x = Number(input[2]);
const inputs = input[1]
  .split(' ')
  .map((el) => Number(el))
  .sort((a, b) => a - b);

let answer = 0;
let p1 = 0;
let p2 = n - 1;

while (p1 < p2) {
  if (inputs[p1] + inputs[p2] === x) {
    answer++;
    p1++;
    p2--;
  } else if (inputs[p1] + inputs[p2] > x) {
    p2--;
  } else {
    p1++;
  }
}
console.log(answer);
