// 다른 사람 아이디어 참고
const fs = require("fs");
const input = fs.readFileSync("../example.txt").toString().trim().split("\n");
const [n, m] = input[0].split(" ").map(Number);
let shark = [];
for (let i = 1; i <= n; i++) {
  shark.push(input[i].split(" ").map(Number));
}

let queue = [];
let dx = [-1, -1, 0, 1, 1, 1, 0, -1];
let dy = [0, 1, 1, 1, 0, -1, -1, -1];
let dist = 1;
for (let i = 0; i < n; i++) {
  for (let j = 0; j < m; j++) {
    if (shark[i][j] === 1) {
      queue.push([i, j]);
    }
    while (queue.length) {
      let queueLength = queue.length;
      let subQueue = [];
      for (let l = 0; l < queueLength; l++) {
        let [x, y] = queue.pop();
        for (let k = 0; k < 8; k++) {
          let nx = x + dx[k];
          let ny = y + dy[k];
          if (nx >= 0 && nx < n && ny >= 0 && ny < m && shark[nx][ny] === 0) {
            shark[nx][ny] = dist + 1;
            subQueue.push([nx, ny]);
          } else if (
            nx >= 0 &&
            nx < n &&
            ny >= 0 &&
            ny < m &&
            shark[nx][ny] > dist + 1
          ) {
            shark[nx][ny] = dist + 1;
            subQueue.push([nx, ny]);
          }
        }
      }
      dist++;
      queue = [...queue, ...subQueue];
    }
    dist = 1;
  }
}
let answer = 0;
for (let i = 0; i < n; i++) {
  for (let j = 0; j < m; j++) {
    answer = Math.max(shark[i][j], answer);
  }
}
console.log(answer - 1);
