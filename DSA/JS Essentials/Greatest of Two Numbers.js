

// Find the Greatest of Two Numbers

// Conditional Statements

// Description

// Accept two numbers and write a program to find and return the greatest of the two numbers.

// Examples 1:

// Sample Input:
// 5
// 10

// Expected Output:
// 10

// Examples 2:

// Sample Input:
// -3
// -7

// Expected Output:
// -3

// Input Format

// The first line contains an integer a (First number).. The second line contains an integer b (Second number).

// Output Format

// Print the greatest of the two numbers. For Javascript: Return the greatest of the two numbers.

// Constraints

// -10000<= a, b <= 10000.

// a and b both are always be different or can be same


function findGreatest(a, b) {
    if (a > b) return a;
    else return b;
    
}

// Test Cases
console.log(findGreatest(5, 10));
console.log(findGreatest(-3, -7));
