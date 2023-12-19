// within the machine access
/* let sum = 0;
const addition = (number) => {
  for (let i = 1; i < number; i++) {
    sum = sum + i;
  }
  return sum;
};

let result = addition(100);
console.log("answer is", result);
 */

// give access to others
/* 
install express
setup a express http server
*/

/* const express = require("express");
const app = express();
const port = 3000;

let sum = 0;
const addition = (number) => {
  for (let i = 1; i < number; i++) {
    sum = sum + i;
  }
  return sum;
};

// Defining a route on the app
app.get("/", (req, res) => {
  let result = "addition is " + addition(100);
  res.send(result);
});

// Starting the server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
 */

// query paramas

const express = require("express");
const app = express();
const port = 3000;

let sum = 0;
const addition = (number) => {
  for (let i = 1; i < number; i++) {
    sum = sum + i;
  }
  return sum;
};

// Defining a route on the app
// app.get("/", (req, res) => {
//   let result = "addition is " + addition(req.query.lastNumber);
//   res.send(result);
// });

// app.get("/multipleparams", (req, res) => {
//   let result =
//     "addition is " +
//     addition(req.query.lastNumber) +
//     "seond param is" +
//     req.query.a +
//     "third param is" +
//     req.query.b;
//   res.send(result);
// });

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
