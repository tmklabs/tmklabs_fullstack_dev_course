const express = require("express");

const app = express();
const port = 3333;

function showData(req, res, error, data) {
  if (error) {
    res.status(500).json({ error: "Error fetching data with callback" });
  } else {
    res.json(data);
  }
}

// Endpoint that fetches data from a fictional API using callback
app.get("/data-callback", (req, res) => {
  fetchDataWithCallback(
    "https://jsonplaceholder.typicode.com/posts/1",
    (error, data) => {
      showData(req, res, error, data);
    }
  );
});

// Function to fetch data with a callback
function fetchDataWithCallback(url, callback) {
  fetch(url)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json();
    })
    .then((data) => {
      callback(null, data);
    })
    .catch((error) => {
      callback(error, null);
    });
}

// Endpoint that fetches data from a fictional API using Promises
app.get("/data-promise", (req, res) => {
  fetchDataWithPromise("https://jsonplaceholder.typicode.com/posts/1")
    .then((data) => {
      res.json(data);
    })
    .catch((error) => {
      res.status(500).json({ error: error });
    });

  console.log("api request ogin gon ...");
});

// Function to fetch data with a Promise
function fetchDataWithPromise(url) {
  return fetch(url).then((response) => {
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return response.json();
  });
}

// Start the Express server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
