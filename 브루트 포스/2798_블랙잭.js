let fs = require("fs");
let input = fs.readFileSync("example.txt").toString().split("\n");
let n = input[0].split(" ")[0];
let m = input[0].split(" ")[1];
let inputs = input[1].split(" ");

let sum = Number.MIN_SAFE_INTEGER;
for (let i = 0; i < inputs.length - 2; i++) {
  for (let j = i + 1; j < inputs.length - 1; j++) {
    for (let k = j + 1; k < inputs.length; k++) {
      if (
        Number(inputs[i]) + Number(inputs[j]) + Number(inputs[k]) > sum &&
        Number(inputs[i]) + Number(inputs[j]) + Number(inputs[k]) <= m
      ) {
        sum = Math.max(
          sum,
          Number(inputs[i]) + Number(inputs[j]) + Number(inputs[k])
        );
      }
    }
  }
}
console.log(sum);
