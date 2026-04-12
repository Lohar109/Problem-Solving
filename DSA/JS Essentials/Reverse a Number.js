

// Reverse a Number

// Description:

// Write a program that accepts a positive integer n as input and return the reverse of the number.

// Examples 1:

// Sample Input:

// 1234

// Expected Output:

// 4321

// Examples 2:

// Sample Input:

// 1005

// Expected Output:5001

// Input Format:

// The input consists of a single positive integer r

// Output Format:

// Print the reverse of n. For Javascript: Return the reverse of n.

// Constraints:

// 1< n<=10^5

function reverseNumber(n) {
    
    rev = 0;
    while (n != 0) {
        rev = (rev * 10) + (n % 10);
        n = Math.floor(n / 10);
    }

    return rev;
}

// Test Cases
console.log(reverseNumber(1234));
console.log(reverseNumber(1005));
