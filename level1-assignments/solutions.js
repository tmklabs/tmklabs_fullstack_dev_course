console.log("Sum of Array Elements:");
// Write a function that takes an array of numbers as input and returns the sum of all the elements in the array.
function sumArray(numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }
    return sum;
}

const numbers = [1, 2, 3, 4, 5];
console.log(sumArray(numbers));

console.log("Factorial Calculation:");
// Implement a function that calculates the factorial of a given positive integer. Factorial of n is denoted as n! and is the product of all positive integers from 1 to n.
function factorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    }
    return n * factorial(n - 1);
}

const number = 5;
console.log(factorial(number));

console.log("Palindrome Check:");
//Create a function that checks if a given string is a palindrome (reads the same forwards and backwards).
function isPalindrome(str) {
    const cleanStr = str.toLowerCase().replace(/[^a-z0-9]/g, '');
    return cleanStr === cleanStr.split('').reverse().join('');
}
const str1 = "NAMAN";
const str2 = "hello";

console.log(str1,":",isPalindrome(str1)); // Output: true
console.log(str2,":",isPalindrome(str2)); // Output: false

console.log("FizzBuzz:");
// Write a program that prints numbers from 1 to 100. For multiples of 3, print "Fizz" instead of the number. For multiples of 5, print "Buzz". For numbers which are multiples of both 3 and 5, print "FizzBuzz".
for (let i = 1; i <= 100; i++) {

    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz");
    }

    else if (i % 3 === 0) {
        console.log("Fizz");
    }

    else if (i % 5 === 0) {
        console.log("Buzz");
    }

    else {
        console.log(i);
    }
}

console.log("Max and Min Values:");
// Implement functions to find the maximum and minimum values in an array of numbers.
function findMax(arr) {
    return Math.max(...arr);
}

function findMin(arr) {
    return Math.min(...arr);
}

const numbersArray = [3, 5, 1, 9, 2];
console.log("Max value:", findMax(numbersArray));
console.log("Min value:", findMin(numbersArray));


console.log("Reverse String:");
// Write a function to reverse a given string.
function reverseString(str) {
    return str.split('').reverse().join('');
}

const inputStr = "hello";
console.log("Reversed string:", reverseString(inputStr));

console.log("Prime Number Check:");
// Create a function that checks if a given number is a prime number (divisible only by 1 and itself).
function isPrime(num) {
    if (num <= 1) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}

const checkNumber = 17;
console.log(checkNumber, "is prime?", isPrime(checkNumber));

console.log("Even and Odd Count:");
// Write a program that takes an array of numbers as input and returns the count of even and odd numbers in the array.
function countEvenOdd(arr) {
    let evenCount = 0;
    let oddCount = 0;
    arr.forEach(num => {
        if (num % 2 === 0) {
            evenCount++;
        } else {
            oddCount++;
        }
    });
    return { even: evenCount, odd: oddCount };
}

const numbersArr = [1, 2, 3, 4, 5];
const counts = countEvenOdd(numbersArr);
console.log("Even count:", counts.even);
console.log("Odd count:", counts.odd);

console.log("Leap Year Check:");
// Implement a function that checks if a given year is a leap year. A leap year is divisible by 4 but not divisible by 100 unless it is also divisible by 400.
function isLeapYear(year) {
    return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
}

const yearToCheck = 2024;
console.log(yearToCheck, "is a leap year?", isLeapYear(yearToCheck));

console.log("Unique Elements in Array:");
// Write a function that takes an array as input and returns a new array containing only the unique elements from the input array.
function uniqueElements(arr) {
    return Array.from(new Set(arr));
}

const inputArray = [1, 2, 2, 3, 4, 4, 5];
console.log("Unique elements:", uniqueElements(inputArray));
