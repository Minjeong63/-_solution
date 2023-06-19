// 반례 n === k
const fs = require("fs");
const input = fs.readFileSync("../example.txt").toString().trim();
const [n, k] = [Number(input.split(" ")[0]), Number(input.split(" ")[1])];

let level = 0;
let queue = [];
let ch = Array.from({ length: 100000 + 1 }, () => 0);
if (n === k) return console.log(0);
for (let x of [n + 1, n - 1, 2 * n]) {
  queue.push(x);
  ch[x] = 1;
}
while (queue.length) {
  let length = queue.length;
  level++;
  let subQueue = [];
  for (let i = 0; i < length; i++) {
    let v = queue.shift();
    if (v === k) return console.log(level);
    else {
      for (let y of [v + 1, v - 1, 2 * v]) {
        if (ch[y] === 0 && y >= 0 && y <= 100000) {
          subQueue.push(y);
          ch[y] = 1;
        }
      }
    }
  }
  queue.push(...subQueue);
}
