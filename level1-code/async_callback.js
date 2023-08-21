/* console.log("Staff waiting for the order");


const serveCallback = () => {
  console.log("Pizza Served");
};

const preparePizza = () => {
  console.log(`Preparing ${pizza} Pizza...`);
};
const newOrderPizza = (serveCallback) => {
  setTimeout(preparePizza, 3000);
  serveCallback();
};
console.log("Hello Sir, How are you?");
console.log("Please scan the qr to order");
console.log("Order recieved");
console.log("Pizza oven ON");

newOrderPizza("Margherita", serveCallback);
 */

// SAME EXAMPLE WITH ANONYMOUS FUNCTION
/* console.log("Staff waiting for the order");


const serveCallback = () => {
  console.log("Pizza Served");
};

const newOrderPizza = (serveCallback) => {
  setTimeout(() => {
    console.log(`Preparing ${pizza} Pizza...`);
  }, 3000);
  serveCallback();
};

console.log("Hello Sir, How are you?");
console.log("Please scan the qr to order");
console.log("Order recieved");
console.log("Pizza oven ON");
newOrderPizza("Margherita", serveCallback);
 */
console.log("Staff waiting for the order");

const serveCallback = () => {
  console.log("Pizza Served");
};

const newOrderPizza = (pizza, serveCallback) => {
  console.log(`Preparing ${pizza} Pizza...`);

  setTimeout(() => {
    serveCallback();
  }, 3000);
};

console.log("Please scan the qr to order");
console.log("Order recieved");
console.log("Pizza oven ON");

newOrderPizza("Margherita", serveCallback);
console.log("Hello Sir, How are you?");

/* let fs = require("fs");

const fileIsRead = (err, fileContent) => {
  let result = addition(parseInt(fileContent));
  console.log("file reseult is", result);
};

console.log("result 1", addition(100));
fs.readFile("./file.txt", "utf-8", fileIsRead);
console.log("hey hey");

 */
// However, nested callbacks can lead to callback hell,
// making code hard to read and maintain.

// Here's how this example demonstrates callback hell:

/* let fs = require("fs");

const fileIsRead = (err, fileContent) => {
  if (err) {
    console.error("Error reading file:", err);
    return;
  }

  let result = addition(parseInt(fileContent));
  console.log("file result is", result);

  // Nested callback to write the result to another file
  fs.writeFile("./result.txt", result.toString(), (writeErr) => {
    if (writeErr) {
      console.error("Error writing result:", writeErr);
      return;
    }
    console.log("Result written to result.txt");

    // Nested callback to read the written file
    fs.readFile("./result.txt", "utf-8", (readErr, readContent) => {
      if (readErr) {
        console.error("Error reading result:", readErr);
        return;
      }
      console.log("Read result:", readContent);
    });
  });
};

console.log("result 1", addition(100));

// Nested callback to read another file
fs.readFile("./file.txt", "utf-8", fileIsRead);

console.log("hey hey"); */
