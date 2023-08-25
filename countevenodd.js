function countEvenOddNumbers(numbersArray) {
    let evenCount = 0;
    let oddCount = 0;
  
    for (const number of numbersArray) {
      if (number % 2 === 0) {
        evenCount++;
      } else {
        oddCount++;
      }
    }
  
    return { even: evenCount, odd: oddCount };
  }
  
  const numbers = [2, 5, 8, 9, 12, 15, 16];
  const result = countEvenOddNumbers(numbers);
  
  console.log("Even count:", result.even);
  console.log("Odd count:", result.odd);
  