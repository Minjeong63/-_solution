// 다른 사람 풀이와 아이디어 참고
const fs = require("fs");
const input = fs.readFileSync("../example.txt").toString().trim().split("\n");
const [n, m, k] = input[0].split(" ").map(Number);
let inputs = [];
for (let i = 1; i <= n; i++) {
  inputs.push(input[i].split("").map(Number));
}
// x, y 좌표를 방문할 때 isVisited만큼 벽을 부수고 방문했는지에 대한 여부
let visited = Array.from(Array(n + 1), () =>
  Array.from(Array(m + 1), () => Array(k + 1).fill(0))
);
let dx = [-1, 0, 1, 0];
let dy = [0, 1, 0, -1];
let queue = [];
queue.push([0, 0, 1, 0]);
visited[0][0][0] = 1;

while (queue.length) {
  let queueLength = queue.length;
  let subQueue = [];
  for (let i = 0; i < queueLength; i++) {
    let [x, y, dist, isVisited] = queue.pop();
    if (x === n - 1 && y === m - 1) return console.log(dist);
    for (let j = 0; j <= 3; j++) {
      let nx = x + dx[j];
      let ny = y + dy[j];
      if (nx >= 0 && nx < n && ny >= 0 && ny < m) {
        if (visited[nx][ny][isVisited] === 0) {
          if (inputs[nx][ny] === 0) {
            visited[nx][ny][isVisited] = 1;
            subQueue.push([nx, ny, dist + 1, isVisited]);
          } else if (inputs[nx][ny] === 1) {
            if (isVisited < k) {
              visited[nx][ny][isVisited] = 1;
              subQueue.push([nx, ny, dist + 1, isVisited + 1]);
            }
          }
        }
      }
    }
  }
  queue = [...queue, ...subQueue];
}
console.log(-1);
