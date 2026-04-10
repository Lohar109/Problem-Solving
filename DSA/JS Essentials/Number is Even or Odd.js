

// Check if a Number is Even or Odd

// Conditional Statement

// Description

// Write a program that takes an integer as input and checks whether the number is even or odd. If the number is even, return "Even". If the number is odd, return "Odd".

// Examples 1:

// Sample Input:
// 4

// Expected Output:
// Even

// Examples 2:

// Sample Input:
// 7

// Expected Output:
// Odd

// Input Format:

// The input consists of a single integer n.

// Output Format:

// Print "Even" if the number is even. Print "Odd" if the number is odd. In JavaScript, return the result instead of printing.

// Constraints:

// The input will be an integer.

// -10^4<=n<= 10^4


function checkEvenOrOdd(num) {
    if (num % 2 == 0) return 'Even';
    else return 'Odd';
    
}

module.exports = { checkEvenOrOdd };