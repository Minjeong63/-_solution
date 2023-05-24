// 처음으로 생각 다 한 다음 구현한 문제
const fs = require("fs");
const input = fs.readFileSync("../example.txt").toString().trim().split("\n");
const [m, n, k] = input[0].split(" ").map(Number);

let square = Array.from(Array(n), () => Array(m).fill(0));
for (let i = 1; i <= k; i++) {
  let [x1, y1, x2, y2] = input[i].split(" ").map(Number);
  for (let j = x1; j < x2; j++) {
    for (let k = y1; k < y2; k++) {
      if (square[j][k] === 0) square[j][k] = 1;
    }
  }
}
let length = 0;
let result = [];
let dx = [-1, 0, 1, 0];
let dy = [0, 1, 0, -1];
for (let i = 0; i < n; i++) {
  for (let j = 0; j < m; j++) {
    let queue = [];
    let cnt = 0;
    if (square[i][j] === 0) {
      queue.push([i, j]);
      square[i][j] = 1;
      cnt++;
    }
    while (queue.length) {
      let [x, y] = queue.pop();
      for (let k = 0; k <= 3; k++) {
        let nx = x + dx[k];
        let ny = y + dy[k];
        if (nx >= 0 && nx < n && ny >= 0 && ny < m && square[nx][ny] === 0) {
          queue.push([nx, ny]);
          square[nx][ny] = 1;
          cnt++;
        }
      }
    }
    if (cnt) {
      length++;
      result.push(cnt);
    }
  }
}
console.log(length + "\n" + result.sort((a, b) => a - b).join(" "));
