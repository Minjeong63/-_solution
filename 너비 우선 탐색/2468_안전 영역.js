const fs = require("fs");
const input = fs.readFileSync("../example.txt").toString().trim().split("\n");
const n = Number(input[0]);
let inputs = [];
for (let i = 1; i <= n; i++) {
  inputs.push(input[i].split(" ").map(Number));
}
let answer = 1;
let dx = [-1, 0, 1, 0];
let dy = [0, 1, 0, -1];

for (let i = 1; i <= 100; i++) {
  let ch = Array.from(Array(n), () => Array(n).fill(0));
  let queue = [];
  let count = 0;

  for (let j = 0; j < n; j++) {
    for (let k = 0; k < n; k++) {
      if (inputs[j][k] > i && ch[j][k] === 0) {
        queue.push([j, k]);
        ch[j][k] = 1;
        count++;
      }
      while (queue.length) {
        let [x, y] = queue.pop();

        for (let l = 0; l <= 3; l++) {
          let nx = x + dx[l];
          let ny = y + dy[l];
          if (
            nx >= 0 &&
            nx < n &&
            ny >= 0 &&
            ny < n &&
            inputs[nx][ny] > i &&
            ch[nx][ny] === 0
          ) {
            queue.push([nx, ny]);
            ch[nx][ny] = 1;
          }
        }
      }
    }
  }
  answer = Math.max(count, answer);
}
console.log(answer);
