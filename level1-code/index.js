// Single threaded
const addition = (n) => {
  let sum = 0;
  while (n > 0) {
    sum = sum + n;
    n--;
  }
  return sum;
};
/* let start_time = new Date().getTime();
let result = addition(1000000);
let end_time = new Date().getTime();

console.log("resutl is", result);
console.log("time taken to finsh:", (end_time - start_time) / 1000); */

// Asynchronous

// Eg:
/* addition(100); //5sec
readFromfile(); // 10sec
addition(100); // its like waiting for 10sec for file to be read and thus wasting time for the next instruction
addition(100);
addition(100);
addition(100); */

// Solution:

let fs = require("fs");

const fileIsRead = (err, fileContent) => {
  let result = addition(parseInt(fileContent));
  console.log("file reseult is", result);
};

console.log("result 1", addition(100));
fs.readFile("./file.txt", "utf-8", fileIsRead);
console.log("hey hey");
