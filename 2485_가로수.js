let fs = require('fs');
let input = fs.readFileSync('example.txt').toString().split('\n');
let count = input[0];
let numbers = [];
let answer = 0

for (let i = 1; i < input.length; i++) {
    numbers.push(Number(input[i]));
  }

let diff = []
for (let i=0; i<count-1; i++) {
    diff.push(numbers[i+1]-numbers[i]);
}

function gcd(a, b) {
    if (a === 0 || b === 0) return Math.max(a, b)
    if (a > b)
    return gcd(b, a%b)
    else if(a < b) return gcd(a, b%a)
    else return a
}

let gcdValue = Number.MAX_SAFE_INTEGER
for (let k=0; k<count-2; k++) {
    gcdValue = Math.min(gcd(diff[k], diff[k+1]), gcdValue)
}

for (let j=0; j<diff.length; j++) {
    answer += diff[j] / gcdValue - 1
}
console.log(answer)

