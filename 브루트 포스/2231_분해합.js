const fs = require('fs');
const input = fs.readFileSync('../example.txt').toString();

let answer = [];
for (let i = 1; i < Number(input); i++) {
  let sum = 0;
  for (let j = 1; j <= String(i).length; j++) {
    sum += Number(String(i)[j - 1]);
  }
  if (Number(input) - i - sum === 0) answer.push(i);
}
if (answer.length !== 0) console.log(answer[0]);
else console.log(0);
