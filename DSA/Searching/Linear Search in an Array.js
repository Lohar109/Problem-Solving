

// Linear Search in an Array

// Description:
// Write a program that performs a linear search to find a target value in an integer array. If the target is found, return its index (zero-based). If the target is not present, return -1.

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
// 7 8 9 10
// 6 8
// 1 4 5 8 9 12

// Expected Output:
// -1
// 3

// Input Format:
// The first line contains an integer T representing the number of test cases.
// For each test case:
// The first line contains two integers N and M where N = size of the array and M = target value.
// The second line contains N space-separated integers, representing the elements of the array.

// Output Format:
// Return the index of M in the array if found.
// Otherwise, return -1 if the target is not present.

// Constraints:
// 3 ≤ T ≤ 50
// 1 ≤ N ≤ 10^5
// -2^31 ≤ m < 2^31
// -2^31 ≤ arr[i] < 2^31


function linearSearch(arr, target) {
    
    for (let i = 0; i < arr.length; i++) {

        if (arr[i] == target) return i;
    }

    return -1;
    
}

// Test Cases
console.log(linearSearch([1, 2, 3, 4, 5], 3));  // Output: 2
console.log(linearSearch([7, 8, 9, 10], 6));  // Output: -1
console.log(linearSearch([1, 4, 5, 8, 9, 12], 8));  // Output: 3