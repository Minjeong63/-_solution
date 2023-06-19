const fs = require("fs");
const input = fs.readFileSync("../example.txt").toString().trim().split("\n");
const [m, n, h] = input[0].split(" ").map(Number);
let tomato = Array.from(Array(h), () => Array());
for (let j = 0; j < h; j++) {
  for (let i = 1 + j * n; i <= n + j * n; i++) {
    tomato[j].push(input[i].split(" ").map(Number));
  }
}

let answer = 0;
let queue = [];
for (let i = 0; i < h; i++) {
  for (let j = 0; j < n; j++) {
    for (let k = 0; k < m; k++) {
      if (tomato[i][j][k] === 1) queue.push([i, j, k]);
    }
  }
}
let dx = [-1, 0, 1, 0];
let dy = [0, 1, 0, -1];
let dz = [1, -1];

while (queue.length !== 0) {
  let queueLength = queue.length;
  let subQueue = [];
  for (let i = 0; i < queueLength; i++) {
    let [z, x, y] = queue.pop();
    for (let k = 0; k <= 3; k++) {
      let nx = x + dx[k];
      let ny = y + dy[k];
      if (nx >= 0 && nx < n && ny >= 0 && ny < m && tomato[z][nx][ny] === 0) {
        tomato[z][nx][ny] = 1;
        subQueue.push([z, nx, ny]);
      }
    }
    for (let l = 0; l < 3; l++) {
      let nz = z + dz[l];
      if (nz >= 0 && nz < h && tomato[nz][x][y] === 0) {
        tomato[nz][x][y] = 1;
        subQueue.push([nz, x, y]);
      }
    }
  }
  queue = [...queue, ...subQueue];
  if (queue.length !== 0) answer++;
}
for (let i = 0; i < h; i++) {
  for (let j = 0; j < n; j++) {
    for (let k = 0; k < m; k++) {
      if (tomato[i][j][k] === 0) return console.log(-1);
    }
  }
}
console.log(answer);
