function isPrime(number) {
    if (number <= 1) {
      return false;
    }
  
    // Check divisibility from 2 up to the square root of the number
    for (let i = 2; i <= Math.sqrt(number); i++) {
      if (number % i === 0) {
        return false;
      }
    }
  
    return true;
  }
  
  // Test cases
  console.log(isPrime(2));   // true
  console.log(isPrime(7));   // true
  console.log(isPrime(14));  // false
  console.log(isPrime(29));  // true
  