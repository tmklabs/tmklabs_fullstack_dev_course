function findMaxValue(numbersArray) {
    if (numbersArray.length == 0) {
      return undefined; // Return undefined for empty arrays
    }
  
    let maxValue = numbersArray[0];
    for (let i = 1; i < numbersArray.length; i++) {
      if (numbersArray[i] > maxValue) {
        maxValue = numbersArray[i];
      }
    }
  
    return maxValue;
  }
  
  function findMinValue(numbersArray) {
    if (numbersArray.length == 0) {
      return undefined; // Return undefined for empty arrays
    }
  
    let minValue = numbersArray[0];
    for (let i = 1; i < numbersArray.length; i++) {
      if (numbersArray[i] < minValue) {
        minValue = numbersArray[i];
      }
    }
  
    return minValue;
  }
  
  const numbers = [5, 2, 8, 1, 9, 3];
  console.log("Maximum value:", findMaxValue(numbers)); // 9
  console.log("Minimum value:", findMinValue(numbers)); // 1
  