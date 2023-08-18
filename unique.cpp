#include <iostream>

int main() {
    int arr[] = {2, 4, 6, 8, 2, 6, 10, 12, 14, 16, 4};
    int size = sizeof(arr) / sizeof(arr[0]);

    int uniqueArr[size]; // Assuming the maximum possible size for unique elements
    int newSize = 0; // New size for the unique array

    for (int i = 0; i < size; ++i) {
        bool isDuplicate = false;

        // Check if the current element is already in the unique array
        for (int j = 0; j < newSize; ++j) {
            if (arr[i] == uniqueArr[j]) {
                isDuplicate = true;
                break;
            }
        }

        // If the element is not a duplicate, add it to the unique array
        if (!isDuplicate) {
            uniqueArr[newSize] = arr[i];
            ++newSize;
        }
    }

    std::cout << "Original Array: ";
    for (int i = 0; i < size; ++i) {
        std::cout << arr[i] << " ";
    }

    std::cout << "\nUnique Array: ";
    for (int i = 0; i < newSize; ++i) {
        std::cout << uniqueArr[i] << " ";
    }

    return 0;
}
