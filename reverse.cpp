#include <iostream>
#include <string>
using namespace std;
string reverseString(string str) {
  int n = str.length();
  for (int i = 0; i < n / 2; i++) {
    char temp = str[i];
    str[i] = str[n - i - 1];
    str[n - i - 1] = temp;
  }
  return str;
}
int main() {
  string str = "Hello World";
  cout << "Original string: " << str << endl;
  cout << "Reversed string: " << reverseString(str) << endl;
  return 0;
}
