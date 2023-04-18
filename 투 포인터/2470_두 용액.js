/**
 * X
 */
const fs = require('fs');
const input = fs.readFileSync('../example.txt').toString().split('\n');
const n = Number(input[0]);
const inputs = input[1]
  .split(' ')
  .map((el) => Number(el))
  .sort((a, b) => a - b);

let answer = [];
let min = Number.MAX_SAFE_INTEGER;
let p2 = n - 1;

for (let p1 = 0; p1 < n - 1; p1++) {
  while (p1 < p2) {
    if (Math.abs(inputs[p1] + inputs[p2]) < min) {
      min = Math.abs(inputs[p1] + inputs[p2]);
      if (answer.length !== 0) {
        answer.pop();
        answer.pop();
      }
      answer.push(inputs[p1]);
      answer.push(inputs[p2]);
    }
    p2--;
  }
  p2 = n - 1;
}
console.log(answer[0] + ' ' + answer[1]);
