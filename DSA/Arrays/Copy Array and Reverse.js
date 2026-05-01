

// Description:
// You are given an array of size n. Your task is to create a new array that contains the same elements but in reverse order. Finally, print the reversed array.

// Examples 1:

// Sample Input:
// 5
// 1 2 3 4 5

// Expected Output:
// 5 4 3 2 1

// Examples 2:

// Sample Input:
// 4
// 9 8 7 6

// Expected Output:
// 6 7 8 9

// Input Format:
// The first line contains an integer n, the number of elements.
// The second line contains n space-separated integers, representing the elements of the array.

// Output Format:
// Print the reversed array, space-separated.
// For Javascript: Returns a reversed array.

// Constraints:
// 1 ≤ n ≤ 1000
// -2^31 ≤ arr[i] < 2^31


function copyAndReverseArray(arr) {

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
const arr = [1, 2, 3, 4, 5];
const reversedArr = copyAndReverseArray(arr);
console.log(reversedArr.join(' '));  // Output: 5 4 3 2 1