

// Array Left Rotation by 1

// Description:
// Write a program that performs a left rotation by one position in an array of size n. The first element moves to the last position. All other elements shift one position to the left. The program should modify the array in place and print the updated array.

// Examples 1:

// Sample Input:
// 5
// 1 2 3 4 5

// Expected Output:
// 2 3 4 5 1

// Examples 2:

// Sample Input:
// 4
// 9 8 7 6

// Expected Output:
// 8 7 6 9

// Input Format:
// The first line contains an integer n, the number of elements.
// The second line contains n space-separated integers, representing the elements of the array.

// Output Format:
// Print the rotated array, space-separated.
// For Javascript: Return the modified original array.

// Constraints:
// 1 ≤ N ≤ 10^3
// -2^31 ≤ arr[i] < 2^31



function leftRotateByOne(arr) {
    
    let t = arr[0];

    for (let i =1; i < arr.length; i++) {
        arr[i-1] = arr[i];
    }

    arr[arr.length - 1] = t;

    return arr;
    
}

// Test Cases
console.log(leftRotateByOne([1, 2, 3, 4, 5]));  // Output: [2, 3, 4, 5, 1]