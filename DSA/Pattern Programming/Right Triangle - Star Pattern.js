

// Right Triangle - Star Pattern

// Description:
// Write a program that takes an integer n as input and prints a right triangle star pattern with n rows. Each row should contain stars (*) with spaces between them. The number of stars increases as you move from the first row to the nth row.

// Examples 1:

// Sample Input:
// 5

// Expected Output:
// *
// * *
// * * *
// * * * *
// * * * * *

// Examples 2:

// Sample Input:
// 3

// Expected Output:
// *
// * *
// * * *

// Input Format:
// The input consists of a single integer n, the number of rows.

// Output Format:
// Print a right triangle star pattern of n rows.
// For javascript use process.stdout.write() method to print in same line.

// Constraints:
// 1 ≤ n ≤ 100


function printRightTriangle(n) {
    
    for  (let i = 1; i <= n; i++) {

        for (let j = 1; j <= i; j++) {
            process.stdout.write("* ");
        }
        console.log();
    }
}


printRightTriangle(5);