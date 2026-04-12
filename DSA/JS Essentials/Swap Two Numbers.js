// Swap Two Numbers

// Easy

// Fundamental Programming

// Description :
// Write a program that accepts two integers as input and swaps their values. After swapping, return the new values of the two numbers.

// Examples 1:

// Sample Input:
// 5
// 10

// Expected Output:
// 18
// 5

// Examples 2:

// Sample Input:
// 0
// 0

// Expected Output:
// 0
// 0

// Input Format:

// The first line contains an integer a. The second line contains an integer b.

// Output Format:

// Print the two numbers after swapping, each on a new line.. JavaScript: Return an array containing the two numbers after swapping.

// Constraints:

// The input integers will be within the range of -2^31 to 2^31-1.
// The program should handle both positive and negative integers


function swapNumbers(a, b) {
 
    let temp = a;
    a = b;
    b = temp;

    return [a, b];

}

// Test Cases
sum(10, 20);
sum(-10, 10);
