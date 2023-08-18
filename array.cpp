#include <iostream>
using namespace std;
int sumArray(int arr[], int n) {
  int sum = 0;
  for (int i = 0; i < n; i++) {
    sum += arr[i];
  }
  return sum;
}
int main() {
  int arr[] = {1, 2, 3, 4, 5};
  int n = sizeof(arr) / sizeof(arr[0]);
  int sum = sumArray(arr, n);
  cout << "The sum of the elements in the array is: " << sum << endl;
  return 0;
}
