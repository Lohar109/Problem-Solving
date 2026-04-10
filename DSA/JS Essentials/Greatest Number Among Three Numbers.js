

// Find the Greatest Number Among Three Numbers

// Description

// Write a program that takes three integers as input and prints the greatest of the three numbers. If two or more numbers are equal and the largest, print that number.

// Examples 1:

// Sample Input:
// 3
// 7
// 5

// Expected Output:
// 7

// Examples 2:

// Sample Input:
// 10
// 20
// 5

// Expected Output:
// 10

// Input Format:

// The first line contains an integer a (First number)... The second line contains an integer b (Second number)... The third line contains an integer c (Third number).

// Output Format:

// Print the greatest number among the three. In JavaScript, return the greatest number.

// Constraints:

// -10^4 <= a, b, c >= 10^4

function findGreatest(a, b, c) {
    if (a > b && a > c) return a;
    else if (b > c) return b;
    else return c;
}

module.exports = { findGreatest };