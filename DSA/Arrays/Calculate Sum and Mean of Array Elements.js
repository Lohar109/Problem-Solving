

// Calculate Sum and Mean of Array Elements

// Description:
// Write a program that accepts an integer n from the user, creates an array of size n, takes n integer inputs to fill the array, and then calculate and return the sum and mean of the array elements.

// Examples 1:

// Sample Input:
// 5
// 1 2 3 4 5

// Expected Output:
// Sum: 15
// Mean: 3.0

// Examples 2:

// Sample Input:
// 4
// 10 20 30 40

// Expected Output:
// Sum: 100
// Mean: 25.0

// Input Format:
// The first line contains an integer n, the number of elements.
// The second line contains n space-separated integers, representing the elements of the array.

// Output Format:
// Print the sum of the array elements and mean of the array elements as a floating-point number till one decimal place.
// For Java: use printf("%.1f", mean)
// For Javascript: Returns an array [sum, mean] in the required format, rounded to 1 decimal places.

// Constraints:
// 1 ≤ n ≤ 10^6
// -2^31 ≤ arr[i] < 2^31


function calculateSumAndMean(arr, n) {
    
    let sum = 0;

    for (let i = 0; i < n; i++) {
        sum = sum + arr[i];
    }

    return [sum, (sum/n).toFixed(1)];
}

// Example usage:
const n = 5;
const arr = [1, 2, 3, 4, 5];
const result = calculateSumAndMean(arr, n);
console.log(`Sum: ${result[0]}`);
console.log(`Mean: ${result[1]}`);  // Output: Sum: 15, Mean: 3.0