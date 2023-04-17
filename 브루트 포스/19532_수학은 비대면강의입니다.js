const { Certificate } = require('crypto');
let fs = require('fs');
let input = fs.readFileSync('../example.txt').toString().split(' ');
input.map((el) => Number(el));
[a, b, c, d, e, f] = input;

let answer = [0, 0];
if (a * e !== b * d) {
  answer[0] += (c * e - b * f) / (a * e - b * d);
  answer[1] += (c * d - a * f) / (b * d - a * e);
}
console.log(answer[0] + ' ' + answer[1]);
