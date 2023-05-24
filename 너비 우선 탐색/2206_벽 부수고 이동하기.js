// 다른 사람 풀이와 아이디어 참고
const fs = require("fs");
const input = fs.readFileSync("../example.txt").toString().trim().split("\n");
const [n, m] = input[0].split(" ").map(Number);
let inputs = [];
for (let i = 1; i <= n; i++) {
  inputs.push(input[i].split("").map(Number));
}

let dx = [-1, 0, 1, 0];
let dy = [0, 1, 0, -1];
const ch = Array.from(new Array(n + 1), () =>
  Array.from({ length: m + 1 }, () => Array(2).fill(0))
);

let queue = [];
queue.push([0, 0, 0]);
ch[0][0][0] = 1;

while (queue.length) {
  let queueLength = queue.length;
  let subQueue = [];
  for (let j = 0; j < queueLength; j++) {
    let [x, y, isBreak] = queue.pop();
    if (x === n - 1 && y === m - 1) {
      return console.log(ch[x][y][isBreak]);
    }
    for (let i = 0; i <= 3; i++) {
      let nx = x + dx[i];
      let ny = y + dy[i];
      if (nx >= 0 && nx < n && ny >= 0 && ny < m) {
        if (inputs[nx][ny] === 0 && ch[nx][ny][isBreak] === 0) {
          ch[nx][ny][isBreak] = ch[x][y][isBreak] + 1;
          subQueue.push([nx, ny, isBreak]);
        } else if (inputs[nx][ny] === 1 && isBreak === 0) {
          ch[nx][ny][isBreak + 1] = ch[x][y][isBreak] + 1;
          subQueue.push([nx, ny, isBreak + 1]);
        }
      }
    }
  }
  queue = [...queue, ...subQueue];
}
console.log(-1);
