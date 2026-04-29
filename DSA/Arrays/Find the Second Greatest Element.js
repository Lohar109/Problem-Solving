

// Find the Second Greatest Element

// Description:
// Write a program to find the second greatest element in an array.

// Examples 1:

// Sample Input:
// 6
// 2 96 69 77 145 20

// Expected Output:
// Second greatest element = 96

// Examples 2:

// Sample Input:
// 5
// 10 23 45 67 89

// Expected Output:
// Second greatest element = 67

// Input Format:
// The first line contains an integer n, the number of elements.
// The second line contains n space-separated integers, representing the elements of the array.

// Output Format:
// Print "Second greatest element = X", where X is the second greatest number.
// For Javascript: Returns the second greatest element.

// Constraints:
// 2 ≤ N ≤ 10^3
// -2^31 ≤ arr[i] < 2^31
// Second greatest element always exists.


function findSecondGreatestElement(arr) {
    
    let max = arr[0];
    let sec = -1/0;

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            sec = max;
            max = arr[i];
        }

        else if (arr[i] > sec && arr[i] != max) {
            sec = arr[i];
        }
    }

    return sec;
}

// Example usage:
const arr = [2, 96, 69, 77, 145, 20];
const secondGreatest = findSecondGreatestElement(arr);
console.log(`Second greatest element = ${secondGreatest}`);  // Output: Second greatest element = 96