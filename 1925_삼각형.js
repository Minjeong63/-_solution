let fs = require('fs');
let input = fs.readFileSync('example.txt').toString().split('\n');
let inputs = [];
for (let x of input) {
  inputs.push([x.split(' ')[0], x.split(' ')[1]]);
}

let lengths = [];
let inclinations = [];
for (let i = 0; i < inputs.length - 1; i++) {
  for (j = i + 1; j < inputs.length; j++) {
    lengths.push(
      Math.sqrt(Math.pow(inputs[i][0] - inputs[j][0], 2) + Math.pow(inputs[i][1] - inputs[j][1], 2))
    );
    inclinations.push((inputs[i][1] - inputs[j][1]) / (inputs[i][0] - inputs[j][0]));
  }
}
lengths.sort((a, b) => a - b);

if (inclinations[0] === inclinations[1] && inclinations[1] === inclinations[2]) console.log('X');
else if (lengths[0] === lengths[1] && lengths[1] === lengths[2]) console.log('JungTriangle');
else if (lengths[0] === lengths[1]) {
  if (Math.pow(lengths[2], 2) === 2 * Math.pow(lengths[0], 2)) console.log('Jikkak2Triangle');
  else if (Math.pow(lengths[2], 2) > 2 * Math.pow(lengths[0], 2)) console.log('Dunkak2Triangle');
  else console.log('Yeahkak2Triangle');
} else if (lengths[1] === lengths[2]) console.log('Yeahkak2Triangle');
else {
  if (Math.pow(lengths[2], 2) > Math.pow(lengths[0], 2) + Math.pow(lengths[1], 2))
    console.log('DunkakTriangle');
  else if (Math.pow(lengths[2], 2) === Math.pow(lengths[0], 2) + Math.pow(lengths[1], 2))
    console.log('JikkakTriangle');
  else console.log('YeahkakTriangle');
}
