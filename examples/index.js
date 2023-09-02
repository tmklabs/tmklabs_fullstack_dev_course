let fs = require("fs");
function add2(a) {
  return a + 2;
}

function fileIsRead() {
  console.log("file is read");
}
// let value = parseInt(prompt("Enter your value"));
let value = fs.readFile("./data.txt", "utf-8", fileIsRead);

console.log("lalalalalalalalalal");
let result = add2(parseInt(value));
// console.log("addtion of " + value + " and " + 2 + "is" + result);
console.log(`addition of ${value} and 2 is ${result}`);


it will 100

20
21
22

start_time

end_time


end_time - start_time
