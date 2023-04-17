let fs = require('fs');
let input = fs.readFileSync('example.txt').toString().split('\n');
let n = input[0];
let stack = [];
let answer = '';

for (let i = 1; i <= n; i++) {
  if (input[i].includes('push')) stack.push(input[i].split(' ')[1]);

  switch (input[i]) {
    case 'pop':
      if (stack.length !== 0) answer += `${stack.pop()}\n`;
      else answer += `-1\n`;
      break;
    case 'size':
      answer += `${stack.length}\n`;
      break;
    case 'empty':
      if (stack.length === 0) answer += `1\n`;
      else answer += `0\n`;
      break;
    case 'top':
      if (stack.length !== 0) answer += `${stack[stack.length - 1]}\n`;
      else answer += `-1\n`;
      break;
  }
}
console.log(answer);
