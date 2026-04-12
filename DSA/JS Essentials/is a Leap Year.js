

// Check if a Year is a Leap Year

// Description:

// Write a program that takes an integer representing a year as input and checks whether it is a leap year. A year is considered a leap year if it satisfies either of the following conditions: 1. It is divisible by 4 but not divisible by 100, or 2. It is divisible by 400... If the year is a leap year, print "Leap Year"... Otherwise, print "Not a Leap Year".

// Examples 1:

// Sample Input:
// 2020

// Expected Output:
// Leap Year

// Examples 2:

// Sampla Input:
// 1900

// Expected Output:
// Not a Leap Year

// Input Format:

// The input consists of a single integer year.

// Output Format:

// Print "Leap Year" if the given year is a leap year. Print "Not a Leap Year" otherwise. In JavaScript, return the result instead of printing.

// Constraints:

// 1-year <-10^4


function isLeapYear(year) {
    if (year % 400 == 0 || year % 4 == 0 && year % 100 != 0) return 'Leap Year';
    else return 'Not a Leap Year';
    
}

// Test Cases
console.log(isLeapYear(2020));
console.log(isLeapYear(1900));
console.log(isLeapYear(2000));
console.log(isLeapYear(2021));
