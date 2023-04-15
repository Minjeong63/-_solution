let fs = require('fs');
let input = fs.readFileSync('example.txt').toString().split('\n');
let n = input[0];
let stack = [];
for (let i = 1; i <= n; i++) {
  stack = [];
  for (let j = 0; j < input[i].length; j++) {
    if (input[i][j] === '(') stack.push(input[i][j]);
    else {
      if (stack.length === 0) {
        console.log('NO');
        break;
      } else stack.pop();
    }
    if (j === input[i].length - 1) {
      if (stack.length !== 0) console.log('NO');
      else console.log('YES');
    }
  }
}
