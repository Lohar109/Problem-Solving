

// Greet the User

// Fundamental Programming

// Description:
// Write a program that accepts a user's name and age as input and then prints a greeting message in the following format: "Hello Shery you are 12 years old."

// Examples 1:

// Sample Input:
// Shery 12

// Expected Output: Hello Shery you are 12 years old.

// Examples 2:

// Sample Input:
// Alice 1

// Expected Output: Hello Alice you are 1 years old.

// Constraints:
// The name input will be a non-empty string with a maximum length of 100 characters.
// The age input will be a non-negative integer between 0 and 120.


function greet(name, age) {

    console.log(`Hello ${name} you are ${age} years old.`);
}

module.exports = { greet };