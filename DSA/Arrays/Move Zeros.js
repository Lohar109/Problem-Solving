

// Move Zeros

// Description:
// Given an array of 0's and 1's, move all the zeros to the end of the array. You can use extra space to perform this operation.

// Examples 1:

// Sample Input:
// 5
// 0 1 0 1 1

// Expected Output:
// 1 1 1 0 0

// Examples 2:

// Sample Input:
// 6
// 1 0 1 0 1 0

// Expected Output:
// 1 1 1 0 0 0

// Input Format:
// The first line contains an integer n, the number of elements.
// The second line contains n space-separated integers, representing the elements of the array.

// Output Format:
// Print the modified array, space-separated.
// For Javascript: Return the modified array.

// Constraints:
// 0 ≤ N ≤ 10^5
// The array will contain only zeros and ones.



function moveZerosToEnd(arr) {

    let j = 1;
    let t;
    for (let i = 0; i < arr.length; i++) {

        while (j < arr.length) {
            
            if (arr[i] == 0 && arr[j] == 1) {
                t = arr[i];  
                arr[i] = arr[j];
                arr[j] = t;
                break;
            }

            j++;
        }
        
        j = i + 1;
    }

    return arr;
}


// Test Cases
console.log(moveZerosToEnd([0, 1, 0, 1, 1]));  // Output: [1, 1, 1, 0, 0]
console.log(moveZerosToEnd([1, 0, 1, 0, 1, 0]));  // Output: [1, 1, 1, 0, 0, 0]