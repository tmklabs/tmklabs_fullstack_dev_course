/* 
CHAINED METHOD CALL
let sentence = " Hello, World! ";

// Chained method calls
let trimmedAndLowered = sentence.trim().toLowerCase();

console.log(trimmedAndLowered); // Output: "hello, world!"

*/

const express = require("express");
const bodyParser = require("body-parser");
const app = express();
// explaining body to pass values
const middleware = (req, res, next) => {
  console.log("from inside middleware");
  next();
};

//register the middleware
app.use(middleware);
app.use(bodyParser.json()); // extracts the body before passing it the handler
const port = 3000;

let sum = 0;
const addition = (number) => {
  for (let i = 1; i < number; i++) {
    sum = sum + i;
  }
  return sum;
};

// taking value from headers
app.post("/multipleparams", (req, res) => {
  console.log("body is", req.body);
  let lastnumber = req.body.lastnumber;
  if (lastnumber < 100) {
    let result = "addition " + addition(lastnumber);
    res.send(result);
  } else {
    res.status(411).send("number is > 100");
  }
});

// Starting the server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
