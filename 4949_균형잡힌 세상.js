let fs = require('fs');
let input = fs.readFileSync('example.txt').toString().split('\n');
let stack = [];
for (let i = 0; i < input.length - 2; i++) {
  stack = [];
  for (let j = 0; j < input[i].length; j++) {
    let x = input[i][j];

    if (x === '(' || x === '[') {
      stack.push(x);
    } else if (x === ')') {
      if (stack.length === 0) {
        console.log('no');
        break;
      } else if (stack[stack.length - 1] !== '(') {
        console.log('no');
        break;
      } else stack.pop();
    } else if (x === ']') {
      if (stack.length === 0) {
        console.log('no');
        break;
      } else if (stack[stack.length - 1] !== '[') {
        console.log('no');
        break;
      } else stack.pop();
    }
    if (j === input[i].length - 1 && stack.length !== 0) {
      console.log('no');
      break;
    } else if (j === input[i].length - 1 && stack.length === 0) {
      console.log('yes');
      break;
    }
  }
}
