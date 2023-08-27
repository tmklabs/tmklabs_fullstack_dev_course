function factorial(n) {
    // Check if the input is a positive integer
    if (n < 0 || !Number.isInteger(n)) {
      throw new Error("Invalid input: must be a positive integer");
    }
    // Initialize a variable to store the factorial
    let factorial = 1;
    // Iterate over the numbers from 1 to n, multiplying the factorial by each number
    for (let i = 1; i <= n; i++) {
      factorial *= i;
    }
    // Return the factorial
    return factorial;
  }
  // Test the function
  const n = 5;
  const result = factorial(n);
  console.log(result); // Output: 120
  