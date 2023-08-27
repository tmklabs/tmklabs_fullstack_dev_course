function sumOfArrayElements(array) {
    // Initialize a variable to store the sum
    let sum = 0;
    // Iterate over the array, adding each element to the sum
    for (let i = 0; i < array.length; i++) {
      sum += array[i];
    }
    // Return the sum
    return sum;
  }
  // Test the function
  const array = [1, 2, 3, 4, 5];
  const sum = sumOfArrayElements(array);
  console.log(sum); // Output: 15
  