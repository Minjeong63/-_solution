const fs = require("fs");
const input = fs.readFileSync("../example.txt").toString().trim().split("\n");
const nArr = input[1].split(" ");
nArr.sort((a, b) => Number(a) - Number(b));
const mArr = input[3].split(" ");

let answer = [];
for (let i = 0; i < mArr.length; i++) {
  let lt = 0;
  let rt = nArr.length - 1;
  while (lt <= rt) {
    let mid = parseInt((lt + rt) / 2);
    if (mArr[i] === nArr[mid]) {
      answer.push("1");
      break;
    } else if (Number(mArr[i]) > Number(nArr[mid])) lt = mid + 1;
    else rt = mid - 1;
  }
  if (answer.length !== i + 1) answer.push("0");
}
console.log(answer.join("\n"));
