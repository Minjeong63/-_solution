let fs = require("fs");
let input = fs.readFileSync("../example.txt").toString().split("\n");
let n = Number(input[0].split(" ")[0]);
let m = Number(input[0].split(" ")[1]);
let v = Number(input[0].split(" ")[2]);
let dfs = [];

let dfsGraph = Array.from(Array(n + 1), () => Array(n + 1).fill(0));
let bfsGraph = Array.from(Array(n + 1), () => Array(n + 1).fill(0));
for (let i = 1; i <= m; i++) {
  let x = Number(input[i].split(" ")[0]);
  let y = Number(input[i].split(" ")[1]);
  dfsGraph[x][y] = 1;
  dfsGraph[y][x] = 1;
  bfsGraph[x][y] = 1;
  bfsGraph[y][x] = 1;
}
let chDfs = Array.from({ length: n + 1 }, () => 0);

function DFS(v) {
  for (let i = 1; i <= n; i++) {
    if (chDfs[i] === 0 && dfsGraph[v][i] === 1) {
      chDfs[i] = 1;
      dfs.push(i);
      DFS(i);
    }
  }
}
chDfs[v] = 1;
dfs.push(v);
DFS(v);
console.log(dfs.join(" "));

let chBfs = Array.from({ length: n + 1 }, () => 0);
let queue = [];
let bfs = "";
bfs += v + " ";
queue.push(v);
chBfs[v] = 1;
while (queue.length) {
  let v = queue.shift();
  for (let i = 0; i <= n; i++) {
    if (bfsGraph[v][i] === 1 && chBfs[i] === 0) {
      bfs += i + " ";
      chBfs[i] = 1;
      bfsGraph[v][i] = 0;
      queue.push(i);
    }
  }
}
console.log(bfs);
