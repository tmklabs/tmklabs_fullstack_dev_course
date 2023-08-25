function isLeapYear(year) {
    if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
      return true;
    } else {
      return false;
    }
  }
  
  // Test cases
  console.log(isLeapYear(2000)); // true
  console.log(isLeapYear(2020)); // true
  console.log(isLeapYear(1900)); // false
  console.log(isLeapYear(2023)); // false
  