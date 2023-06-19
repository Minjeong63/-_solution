const fs = require("fs");
const input = fs.readFileSync("../example.txt").toString().trim().split("\n");
const spaceSize = Number(input[0]);
let space = Array.from(Array(spaceSize), () => Array());
let queue = [];
let sharkSize = 2;
let eatingFishNum = 0;
for (let i = 1; i <= spaceSize; i++) {
  for (let j = 0; j < spaceSize; j++) {
    if (input[i].split(" ")[j] === "9") {
      queue.push([i - 1, j]);
      space[i - 1].push(0);
    } else space[i - 1].push(Number(input[i][j]));
  }
}
let dist = Array.from(Array(spaceSize), () => Array(spaceSize).fill(Array(2)));
let distNum = 0;
let dx = [-1, 0, 1, 0];
let dy = [0, -1, 0, 1];
while (queue.length) {
  let [x, y] = queue.pop();
  let subQueue = [];
  for (let k = 0; k <= 3; k++) {
    let nx = x + dx[k];
    let ny = y + dy[k];
    console.log("1111");
    if (
      nx >= 0 &&
      nx < spaceSize &&
      ny >= 0 &&
      ny < spaceSize &&
      sharkSize > space[nx][ny] &&
      space[nx][ny] !== 0
    ) {
      eatingFishNum++;
      if (eatingFishNum === sharkSize) {
        sharkSize++;
        eatingFishNum = 0;
      }
      subQueue.push([nx, ny]);
      dist[nx][ny].push([1, distNum + 1]);
      distNum++;
    } else if (
      nx >= 0 &&
      nx < spaceSize &&
      ny >= 0 &&
      ny < spaceSize &&
      space[nx][ny] === 0
    ) {
      subQueue.push([nx, ny]);
      dist[nx][ny].push([0, distNum + 1]);
    } else if (
      nx >= 0 &&
      nx < spaceSize &&
      ny >= 0 &&
      ny < spaceSize &&
      sharkSize < space[nx][ny]
    ) {
      dist[nx][ny].push([-1, 0]);
    }
  }
  queue = [...queue, ...subQueue];
}
console.log(dist);

// let dx = [-1, 0, 1, 0];
// let dy = [0, -1, 0, 1];
// while (queue.length) {
//   let [x, y] = queue.pop();
//   for (let k = 0; k <= 3; k++) {
//     let nx = x + dx[k];
//     let ny = y + dy[k];
//     if (
//       nx >= 0 &&
//       nx < spaceSize &&
//       ny >= 0 &&
//       ny < spaceSize &&
//       sharkSize > space[nx][ny] &&
//       space[nx][ny] !== 0
//     ) {
//       eatingFishNum++;
//       if (eatingFishNum === sharkSize) {
//         sharkSize++;
//         eatingFishNum = 0;
//       }
//       space[nx][ny] = 0;
//     } else if (
//       nx >= 0 &&
//       nx < spaceSize &&
//       ny >= 0 &&
//       ny < spaceSize &&
//       space[nx][ny] === 0
//     ) {
//       queue.push([nx, ny]);
//     }
//   }
// }
