

// Print an X-Shape Pattern

// Description:
// Given a positive integer N (where N is an odd number), print an X-shaped pattern with N rows.

// Examples 1:

// Sample Input:
// 3

// Expected Output:
// * *
//  *
// * *

// Examples 2:

// Sample Input:
// 5

// Expected Output:
// *   *
//  * *
//   *
//  * *
// *   *

// Input Format:
// The input consists of a single positive odd integer N, the number of rows.

// Output Format:
// Print an X-shaped pattern with N rows.
// For javascript use process.stdout.write() method to print in same line.

// Constraints:
// 1 ≤ N ≤ 51 (N must be odd)


function printXShapePattern(n) {
    
    for (let i = 1; i <= n; i++) {

        for (let j = 1; j <= n; j++) {
            if (i == j) process.stdout.write("*");
            else if (i+j == n+1) process.stdout.write("*");
            else process.stdout.write(" ");
        }
        console.log();
    }
}


printXShapePattern(5);