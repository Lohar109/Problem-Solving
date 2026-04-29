

// Right Triangle - Number Pattern

// Description:
// Write a program that takes an integer n as input and prints a right triangle number pattern with n rows. Each row should start from 1 and print the next integers incrementally until the row number is reached.

// Examples 1:

// Sample Input:
// 5

// Expected Output:
// 1
// 1 2
// 1 2 3
// 1 2 3 4
// 1 2 3 4 5

// Examples 2:

// Sample Input:
// 3

// Expected Output:
// 1
// 1 2
// 1 2 3

// Input Format:
// The input consists of a single integer n, the number of rows.

// Output Format:
// Print a right triangle number pattern of n rows.
// For javascript use process.stdout.write() method to print in same line.

// Constraints:
// 1 ≤ n ≤ 100


function printRightTriangleNumbers(n) {
    
    for (let i = 1; i <= n; i++) {

        for (let j = 1; j <= i; j++) {

            process.stdout.write(j + " ");
        }
        console.log();
    } 
}

printRightTriangleNumbers(5);