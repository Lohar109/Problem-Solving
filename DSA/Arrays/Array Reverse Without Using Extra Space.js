

// Array Reverse Without Using Extra Space

// Description:
// Write a program that reverses the elements of an integer array in-place, without using extra space. The function should modify the array directly without creating a new array.

// Examples 1:

// Sample Input:
// 5
// 1 2 3 4 5

// Expected Output:
// 5 4 3 2 1

// Examples 2:

// Sample Input:
// 3
// 7 8 9

// Expected Output:
// 9 8 7

// Input Format:
// The first line contains an integer n, the number of elements.
// The second line contains n space-separated integers, representing the elements of the array.

// Output Format:
// Do not return or print anything; modify the original array in place.

// Constraints:
// 1 ≤ n ≤ 10^5
// -10^9 ≤ arr[i] ≤ 10^9
// The solution should not use any extra space other than constant space.


function reverseArrayInPlace(arr) {
    let i = 0;
    let j = arr.length - 1;
    let t;
    while (i < j) {
        if (i < j) {
            t = arr[i];
            arr[i] = arr[j];
            arr[j] = t;
        }
        
        i++;
        j--;
    }

    return arr;
}

// Example usage:
const arr1 = [1, 2, 3, 4, 5];
console.log(reverseArrayInPlace(arr1)); // Output: [5, 4, 3, 2, 1]