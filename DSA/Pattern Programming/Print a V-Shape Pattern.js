

// Print a V-Shape Pattern

// Description:
// Given a positive integer N (minimum value 3), print a V-shaped pattern with N rows. The first and last characters in each row are stars (*).

// Examples 1:

// Sample Input:
// 5

// Expected Output:
// *       *
//  *     *
//   *   *
//    * *
//     *

// Examples 2:

// Sample Input:
// 3

// Expected Output:
// *   *
//  * *
//   *

// Input Format:
// The input consists of a single integer N (number of rows).

// Output Format:
// Print a V-shaped pattern with N rows.
// For javascript use process.stdout.write() method to print in same line.

// Constraints:
// 3 ≤ N ≤ 50


function printVShapePattern(n) {
    
    for (let i = 1; i <= n; i++) {

        for (let j = 1; j <= i; j++) {
            if (i == j) process.stdout.write("*");
            else process.stdout.write(" ");
        }

        for (let j = 1; j <= n-1; j++) {
            if (i+j == n) process.stdout.write(' *');
            else process.stdout.write("  ");
        }

        console.log();
    }
    
}


printVShapePattern(5);