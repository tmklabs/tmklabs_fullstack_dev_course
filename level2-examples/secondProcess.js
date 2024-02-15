const callbackFn = (result) => {
  console.log("result is", result.status);
  result.json().then((jsonBody) => console.log(jsonBody));
};

fetch("http://localhost:3000/multipleparams?lastnumber=20", {
  method: "GET",
}).then(callbackFn);
