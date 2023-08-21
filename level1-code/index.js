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

/* let fs = require("fs");

const fileIsRead = (err, fileContent) => {
  let result = addition(parseInt(fileContent));
  console.log("file reseult is", result);
};

console.log("result 1", addition(100));
fs.readFile("./file.txt", "utf-8", fileIsRead);
console.log("hey hey");
 */

const fs = require("fs").promises;

// Function to perform addition synchronously
function addition(n) {
  let sum = 0;
  while (n > 0) {
    sum = sum + n;
    n--;
  }
  return sum;
}

// Function to read a file using Promises
function readFileWithPromise(filePath) {
  return fs.readFile(filePath, "utf-8");
}

// Usage of Promises
console.log("Result 1", addition(100));

readFileWithPromise("./file.txt")
  .then((fileContent) => {
    const result = addition(parseInt(fileContent));
    console.log("File result is", result);
  })
  .catch((error) => {
    console.error("Error:", error);
  });

console.log("Hey hey");

/* 
const fs = require("fs").promises;

// Function to read a file using a Promise
function readFileAsync(filePath) {
  return fs.readFile(filePath, "utf-8");
}

// Function to write to a file using a Promise
function writeFileAsync(filePath, data) {
  return fs.writeFile(filePath, data);
}

console.log("result 1", addition(100));
readFileAsync("./file.txt")
  .then((fileContent) => {
    let result = addition(parseInt(fileContent));
    console.log("file result is", result);
    return result;
  })
  .then((result) => {
    console.log("Result written to result.txt");
    return writeFileAsync("./result.txt", result.toString());
  })
  .then(() => {
    return readFileAsync("./result.txt");
  })
  .then((readContent) => {
    console.log("Read result:", readContent);
  })
  .catch((error) => {
    console.error("Error:", error);
  });

console.log("hey hey");
 */
// file.txt contains: 5
