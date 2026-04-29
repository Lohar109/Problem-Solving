

// Inverted Right Triangle - Star Pattern

// Description:
// Write a program that takes an integer input n and prints an inverted right triangle star pattern with n rows. The first row should have n stars, and each subsequent row should have one less star than the previous row.

// Examples 1:
// Sample Input:
// 5

// Expected Output:
// * * * * *
// * * * *
// * * *
// * *
// *

// Examples 2:

// Sample Input:
// 3

// Expected Output:
// * * *
// * *
// *

// Input Format:
// The input consists of a single integer n, the number of rows.

// Output Format:
// Print an inverted right triangle star pattern of n rows.
// For javascript use process.stdout.write() method to print in same line.

// Constraints:
// 1 ≤ n ≤ 100
// The input n is a positive integer.


function printInvertedRightTriangle(n) {
    
    for (let i = n; i >= 1; i--) {

        for (let j = i; j >= 1; j--) {

            process.stdout.write('* ');
        }
        console.log();
    }
}


printInvertedRightTriangle(5);