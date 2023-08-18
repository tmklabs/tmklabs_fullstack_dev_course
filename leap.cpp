#include <iostream>
using namespace std;
bool isLeapYear(int year) {
  // Check if the year is divisible by 4.
  if (year % 4 != 0) {
    return false;
  }
  // Check if the year is divisible by 100.
  if (year % 100 != 0) {
    return true;
  }
  // Check if the year is divisible by 400.
  if (year % 400 != 0) {
    return false;
  }
  return true;
}
int main() {
  // Define the year to check.
  int year = 2000;
  // Check if the year is a leap year.
  if (isLeapYear(year)) {
    cout << year << " is a leap year." << endl;
  } else {
    cout << year << " is not a leap year." << endl;
  }
  return 0;
}
