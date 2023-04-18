const fs = require('fs');
const input = fs.readFileSync('../example.txt').toString().trim().split('\n');
const n = input[0];
let inputs = [];
for (let i = 1; i < input.length; i++) {
  inputs.push(Number(input[i]));
}

for (let j = 0; j < inputs.length; j++) {
  let index = j;
  for (let k = j + 1; k < inputs.length; k++) {
    if (inputs[index] > inputs[k]) {
      index = k;
    }
  }
  [inputs[j], inputs[index]] = [inputs[index], inputs[j]];
}
console.log(inputs.join('\n'));
