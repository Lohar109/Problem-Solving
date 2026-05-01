

// Binary Search in an Array

// Description:
// Write a program that performs a binary search to find a target value in a sorted integer array. If the target is found, return its index (zero-based). If the target is not present, return -1.

// Examples 1:

// Sample Input:
// 1
// 5 3
// 1 2 3 4 5

// Expected Output:
// 2

// Examples 2:

// Sample Input:
// 2
// 4 6
// 1 3 5 7
// 5 8
// 1 2 4 8 9 12

// Expected Output:
// -1
// 3

// Input Format:
// The first line contains an integer T representing the number of test cases.
// For each test case:
// The first line contains two integers N and M where N = size of the array and M = target value.
// The second line contains N space-separated sorted integers, representing the elements of the array.

// Output Format:
// Return the index of M in the array if found.
// Otherwise, return -1 if the target is not present.

// Constraints:
// 1 ≤ T ≤ 50
// 1 ≤ N ≤ 10^5
// -2^31 ≤ m < 2^31
// -2^31 ≤ arr[i] < 2^31
// The array will always be sorted in ascending order.



function BinarySearch(arr, target) {
    
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);

        if (arr[mid] == target) {
            return mid;
        } else if (arr[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    return -1;
}


// Example usage:

const testCases =  [1, 3, 5, 7];
console.log(BinarySearch(testCases, 6)); // Output: -1

const teseCases2 = [1, 2, 4, 8, 9];
console.log(BinarySearch(teseCases2, 8)); // Output: 3