function isPalindrome(str) {
    // Convert the string to lowercase and remove all non-alphanumeric characters
    const cleanStr = str.toLowerCase().replace(/[^a-zA-Z0-9]/g, "");
    // Check if the clean string is empty or has only one character
    if (cleanStr.length <= 1) {
      return true;
    }
    // Compare the clean string with its reverse
    return cleanStr === cleanStr.split("").reverse().join("");
  }
  // Test the function
  const str1 = "racecar";
  const str2 = "madam";
  const str3 = "hello";
  console.log(isPalindrome(str1)); // Output: true
  console.log(isPalindrome(str2)); // Output: true
  console.log(isPalindrome(str3)); // Output: false
  