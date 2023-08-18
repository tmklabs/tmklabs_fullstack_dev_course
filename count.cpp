#include <iostream>
using namespace std;
int main() {
  // Define the array of numbers.
  int arr[] = {1, 2, 3, 4, 5, 6, 7, 8, 9, 10};
  // Define the variables to store the count of even and odd numbers.
  int evenCount = 0;
  int oddCount = 0;
  // Iterate through the array of numbers.
  for (int i = 0; i < sizeof(arr) / sizeof(arr[0]); i++) {
    // Check if the number is even.
    if (arr[i] % 2 == 0) {
      // Increment the count of even numbers.
      evenCount++;
    } else {
      // Increment the count of odd numbers.
      oddCount++;
    }
  }
  // Print the count of even and odd numbers.
  cout << "The number of even numbers in the array is: " << evenCount << endl;
  cout << "The number of odd numbers in the array is: " << oddCount << endl;
  return 0;
}
