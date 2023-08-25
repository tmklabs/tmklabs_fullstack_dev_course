function getUniqueElements(inputArray) {
    const uniqueArray = [];
  
    for (const element of inputArray) {
      if (!uniqueArray.includes(element)) {
        uniqueArray.push(element);
      }
    }
  
    return uniqueArray;
  }
  
  const inputArray = [1, 2, 3, 4, 1, 2, 5, 6, 3];
  const uniqueElements = getUniqueElements(inputArray);
  
  console.log(uniqueElements); // [1, 2, 3, 4, 5, 6]
  