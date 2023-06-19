/**
 * 다른 사람 풀이 참고
 */
const fs = require('fs');
let input = Number(fs.readFileSync('../example.txt').toString());
let cnt = 0;
while (input >= 0) {
  if (input % 5 === 0) {
    cnt += input / 5;
    return console.log(cnt);
  }
  input = input - 3;
  cnt++;
}
console.log(-1);
