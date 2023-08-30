// js - js engine - v8 runtime env - browsers

// dahl -> nodejs -> runtime env -> system

/*  I have 2 apples in my green box

greenbox = 2
uses_logged_in_or_not = true
userLoggedInOrNot = true
userloggedinornot = true  */

// prime number program
/* 
var name = "Vikas";
var percentage = 90.4;
var grade = "A";
var telugu = 90;
var hindi = 86;
var total_marks = 650;

var name = "Atishay";
var percentage = 91.3;
var grade = "A";
var telugu = 94;
var hindi = 86;
var total_marks = 660;

// tool - array -> datastrucutre
var student1 = ["Vikas", 90, 90, 85, "A", 650];
var student2 = ["Atishay", 90, "B", 3434];

var student1 = {
  name: "Vikas",
  telug: 30,
  hindi: 50,
};

console.log(student1); */

// loosly typed language

// scope - block scope
// function - let and var
// for

// let and const
// const PI = 3.14;
// let r = 2;
// PI = 3;
// console.log("area of circle is", PI * r * r);

// function implementation
/* function addtion(a, b) {
    // a,b are actual parameter
    return a + b;
  } */

// function call
/* let result = addtion(2, 4); // 2 and 4 formal parameters
console.log(
  `addition is ${result} and subtraction is ${result - 2} and division is ${
    result / 2
  }`
); */

// function expression
/* const addition = function (a, b) {
  return a + b;
};
let result = addition(2, 4); // 2 and 4 actual parameters
console.log("addition is", result); */

// arrow function -> react,react native .....
// let addition = (a, b) => {
//    return a + b;
// }

// const function_name = (formal parameter) => {
//     lines of code
// }

// let result = addition(2, 4); // 2 and 4 formal parameters
// console.log("addition is", result);

// callback function -> function as a parameter to the other function

// variable as a function argument
const addition = (a, b) => {
  return a + b;
};

let x = 3;
let y = 32;
console.log("addition is", addition(x, y));

// array as a function arguumnet

const printFirstFlatDetails = (flat_numbers) => {
  console.log("first flat is", flat_numbers[0]);
};

let flats = [101, 102, 103];
printFirstFlatDetails(flats);

// object as a function argument

const changeUserName = (userDetails, newUsername) => {
  userDetails.username = newUsername;
};
let user = {
  username: "thisisvikas21",
  password: "shimla",
};

console.log("before updating", user);
changeUserName(user, "vikki");
console.log("after updating", user);

// function as a function argument -> Callback function or first class functions

const wishUser = (name, final_update) => {
  console.log(`Welcome ${name} to the TMK Space`);
  console.log(
    final_update === 0 ? "You are allowed to use" : "you are not allowed to use"
  );
};

const verifyAge = (age, name, callBack) => {
  let result = age >= 18 ? 0 : 1;
  wishUser(name, result);
};

verifyAge(15, "Vikas", wishUser);
