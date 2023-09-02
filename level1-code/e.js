const express = require("express");
const app = express();
const port = 3000;

let vikas = {
  monday: "cornflakes",
  tuesday: "oats",
};
app.get("/", (req, res) => {
  res.send(vikas);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
