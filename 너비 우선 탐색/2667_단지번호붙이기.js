const fs = require("fs");
const input = fs.readFileSync("../example.txt").toString().trim().split("\n");
const n = Number(input[0]);
let inputs = [];
for (let i = 1; i <= n; i++) {
  inputs.push(input[i].split("").map((el) => Number(el)));
}

let dx = [-1, 0, 1, 0];
let dy = [0, 1, 0, -1];
let totalCount = [];
let queue = [];
for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    if (inputs[i][j] === 1) {
      let count = 0;
      count++;
      queue.push([i, j]);
      inputs[i][j] = 0;

      while (queue.length) {
        let [x, y] = queue.shift();
        for (let k = 0; k <= 3; k++) {
          let nx = x + dx[k];
          let ny = y + dy[k];
          if (nx >= 0 && nx < n && ny >= 0 && ny < n && inputs[nx][ny] === 1) {
            count++;
            queue.push([nx, ny]);
            inputs[nx][ny] = 0;
          }
        }
      }
      totalCount.push(count);
    }
  }
}
console.log(
  totalCount.length + "\n" + totalCount.sort((a, b) => a - b).join("\n")
);
