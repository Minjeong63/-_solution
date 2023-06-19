/**
 * 다른 풀이 참고
 */
const fs = require('fs');
const input = Number(fs.readFileSync('../example.txt').toString());
let dy = Array.from({ length: input + 1 }, () => 0);
dy[2] = 1;
dy[3] = 1;
for (let i = 4; i <= input; i++) {
  dy[i] = dy[i - 1] + 1;
  if (i % 2 === 0) {
    dy[i] = Math.min(dy[i / 2] + 1, dy[i]);
  }
  if (i % 3 === 0) {
    dy[i] = Math.min(dy[i / 3] + 1, dy[i]);
  }
}
console.log(dy[input]);
