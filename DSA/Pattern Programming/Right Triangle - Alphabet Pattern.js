

// Right Triangle - Alphabet Pattern

// Description:
// Write a program that takes an integer n as input and prints a right triangle alphabet pattern with n rows. Each row should start from 'A' and incrementally print the next letters of the alphabet until the row number is reached.

// Examples 1:

// Sample Input:
// 5

// Expected Output:
// A
// A B
// A B C
// A B C D
// A B C D E

// Examples 2:

// Sample Input:
// 3

// Expected Output:
// A
// A B
// A B C

// Input Format:
// The input consists of a single integer n, the number of rows.

// Output Format:
// Print a right triangle alphabet pattern of n rows.
// For javascript use process.stdout.write() method to print in same line.

// Constraints:
// 1 ≤ n ≤ 26


function printRightTriangleAlphabets(n) {
    
    for (let i = 1; i <= n; i++) {

        for (let j = 65; j <= 64+i; j++) {
            process.stdout.write(String.fromCharCode(j) + ' ');
        }
        console.log();
    }
}

printRightTriangleAlphabets(5);