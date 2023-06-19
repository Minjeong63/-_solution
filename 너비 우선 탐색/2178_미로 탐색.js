const fs = require("fs");
let input = fs.readFileSync("../example.txt").toString().split("\n");
const [n, m] = input[0].split(" ").map((el) => Number(el));
let inputs = [];
for (let i = 1; i <= n; i++) {
  inputs.push(input[i].split("").map((el) => Number(el)));
}

let dx = [-1, 0, 1, 0];
let dy = [0, 1, 0, -1];
let ch = Array.from(Array(n), () => Array(m).fill(0));
let queue = [];
ch[0][0] = 1;
queue.push([0, 0]);

let L = 0;
while (queue.length) {
  L++;
  let len = queue.length;
  for (let i = 0; i < len; i++) {
    let [x, y] = queue.shift();
    for (let k = 0; k <= 3; k++) {
      let nx = x + dx[k];
      let ny = y + dy[k];
      if (nx === n - 1 && ny === m - 1) {
        L++;
        return console.log(L);
      }
      if (
        nx >= 0 &&
        nx < n &&
        ny >= 0 &&
        ny < m &&
        (inputs[nx][ny] === 1) & (ch[nx][ny] === 0)
      ) {
        ch[nx][ny] = 1;
        queue.push([nx, ny]);
      }
    }
  }
}
console.log(L);
