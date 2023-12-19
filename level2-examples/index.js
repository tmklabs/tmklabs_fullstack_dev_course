const express = require("express");
const app = express();

const middleware = (req, res, next) => {
  console.log("from inside middleware" + req.headers.lastnumber);
  next();
};

//register the middleware
app.use(middleware);
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
  console.log("headers are", req.headers);
  let result = "addition idds " + addition(req.headers.lastnumber);
  res.send(result);
});

// Starting the server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
