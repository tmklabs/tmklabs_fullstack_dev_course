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
  let result = "addition " + addition(req.body.lastnumber);
  res.send(result);
});

// Starting the server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
