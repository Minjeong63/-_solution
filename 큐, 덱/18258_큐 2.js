const fs = require("fs");
const input = fs.readFileSync("../example.txt").toString().trim().split("\n");

let answer = [];
let queue = [];
for (let i = 1; i < input.length; i++) {
  switch (input[i]) {
    case "pop":
      if (queue.length === 0) answer.push(-1);
      else {
        answer.push(queue[0]);
        queue = queue.slice(1);
      }
      break;
    case "size":
      answer.push(queue.length);
      break;
    case "empty":
      if (queue.length === 0) answer.push(1);
      else answer.push(0);
      break;
    case "front":
      if (queue.length === 0) answer.push(-1);
      else answer.push(queue[0]);
      break;
    case "back":
      if (queue.length === 0) answer.push(-1);
      else answer.push(queue[queue.length - 1]);
      break;
    default:
      queue.push(input[i].split(" ")[1]);
      break;
  }
}
console.log(answer.join("\n"));
