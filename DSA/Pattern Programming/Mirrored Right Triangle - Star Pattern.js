

// Mirrored Right Triangle - Star Pattern

// Description:
// Write a program that takes an integer input n and prints a mirrored right triangle star pattern with n rows. The pattern should be right-aligned, where the stars appear at the right side of the output, and spaces fill the remaining left side of each row.

// Examples 1:

// Sample Input:
// 5

// Expected Output:
//         *
//       * *
//     * * *
//   * * * *
// * * * * *

// Examples 2:

// Sample Input:
// 3

// Expected Output:
//     *
//   * *
// * * *

// Input Format:
// The input consists of a single integer n, the number of rows.

// Output Format:
// Print a mirrored right triangle star pattern of n rows.
// For javascript use process.stdout.write() method to print in same line.

// Constraints:
// 1 ≤ n ≤ 100
// The input n is a positive integer.


function printMirroredRightTriangle(n) {
    
    for (let i = 1; i <= n; i++) {

        for (let j = 1; j <= n - i; j++) {
            process.stdout.write("  ");
        }

        for (let j = 1; j <= i; j++) {
            process.stdout.write("* ");
        }

        console.log();
    }
}


printMirroredRightTriangle(5);