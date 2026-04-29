

// Find the Greatest Element and Its Index

// Description:
// Write a program to find the greatest element in an array and print its value along with its index. The index should be zero-based.

// Examples 1:

// Sample Input:
// 6
// 2 96 69 77 145 20

// Expected Output:
// Max element = 145 found at index 4

// Examples 2:

// Sample Input:
// 5
// 10 23 45 67 89

// Expected Output:
// Max element = 89 found at index 4

// Input Format:
// The first line contains an integer n, the number of elements.
// The second line contains n space-separated integers, representing the elements of the array.

// Output Format:
// Print "Max element = X found at index Y", where X is the maximum value and Y is the zero-based index of X.
// For Javascript: Returns an array [maxElement, maxElementIndex].

// Constraints:
// 1 ≤ N ≤ 10^4
// -2^31 ≤ arr[i] < 2^31


function findGreatestElementAndIndex(arr) {
    
    let max = arr[0];
    let index= 0;

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
            index = i;
        }
    }

    return [max, index];
    
}

// Example usage:
const arr = [2, 96, 69, 77, 145, 20];
const result = findGreatestElementAndIndex(arr);
console.log(`Max element = ${result[0]} found at index ${result[1]}`);  // Output: Max element = 145 found at index 4