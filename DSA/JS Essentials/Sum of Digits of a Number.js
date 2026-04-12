

// Sum of Digits of a Number

// Description:

// Write a program that takes an integer n as input and computes the sum of its digits. The input number is always positive.

// Examples 1:

// Sample Input:

// 936

// Expected Output:

// 18

// Examples 2:

// Sample Input:

// 1234

// Expected Output:10

// Input Format:

// The input consists of a single integer n.

// Output Format:

// Print the sum of digits of n. For JavaScript: Return the sum of digits of n instead of print.

// Constraints:

// 1<n<=10^8


function sumOfDigits(n) {
    
    let sum = 0;

    while (n != 0) {
        sum = sum + (n % 10);
        n = Math.floor(n / 10);
    }

    return sum;
}

// Test Cases
console.log(sumOfDigits(936));
console.log(sumOfDigits(1234));
console.log(sumOfDigits(100000000));
