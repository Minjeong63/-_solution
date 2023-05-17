const fs = require("fs");
const input = fs.readFileSync("../example.txt").toString().trim().split("\n");
const computer = Number(input[0]);

let graph = Array.from(Array(computer + 1), () => Array(computer + 1).fill(0));
for (let i = 2; i < input.length; i++) {
  let index = input[i].split(" ");
  let [x, y] = [Number(index[0]), Number(index[1])];
  graph[x][y] = 1;
  graph[y][x] = 1;
}

let answer = 0;
let ch = Array.from({ length: computer + 1 }, () => 0);
let queue = [];
queue.push(1);
ch[1] = 1;

while (queue.length) {
  let v = queue.shift();
  for (let j = 0; j < computer + 1; j++) {
    if (graph[v][j] === 1 && ch[j] === 0) {
      ch[j] = 1;
      queue.push(j);
      answer++;
      console.log(v, j);
    }
  }
}
console.log(answer);
