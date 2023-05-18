// queue.shift() 때문에 시간초과 발생
const fs = require("fs");
const input = fs.readFileSync("../example.txt").toString().trim().split("\n");
const m = input[0].split(" ")[1];
const n = input[0].split(" ")[0];
let inputs = [];
let unripe = [];
for (let i = 1; i <= m; i++) {
  inputs.push(input[i].split(" ").map((el) => Number(el)));
  unripe.push(...input[i].split(" "));
}
let answer = 0;
let dx = [-1, 0, 1, 0];
let dy = [0, 1, 0, -1];
let queue = [];
for (let i = 0; i < m; i++) {
  for (let j = 0; j < n; j++) {
    if (inputs[i][j] === 1) {
      queue.push([i, j]);
    }
  }
}
if (queue.length !== m * n) {
  while (queue.length) {
    let len = queue.length;
    let pushQueue = [];
    for (let l = 0; l < len; l++) {
      let [x, y] = queue.pop();
      for (let k = 0; k <= 3; k++) {
        let nx = x + dx[k];
        let ny = y + dy[k];
        if (nx >= 0 && nx < m && ny >= 0 && ny < n && inputs[nx][ny] === 0) {
          inputs[nx][ny] = 1;
          pushQueue.push([nx, ny]);
        }
      }
    }
    queue.push(...pushQueue);
    if (queue.length !== 0) answer++;
  }
}

for (let i = 0; i < m; i++) {
  if (inputs[i].includes(0)) answer = -1;
}
console.log(answer);
