

// Check if User is a Valid Voter

// Description:

// Write a program that takes a user's age and name as input and checks whether the user is a valid voter. A user is considered a valid voter if their age is 18 or older. If the user is 18 or older, return: <Name> is a valid voter. If the user is younger than 18, return: <Nalhe> is not a valid voter.

// Examples 1:

// Sample Input:
// 20
// Alice

// Expected Output:
// Alice is a valid voter.

// Examples 2:

// Sample Input:
// 16 
// Bob

// Expected Output:
// Bob is not a valid voter.

// Input Format:

// The first line contains an integer age (User's age). (User's name).

// The second line contains a string name

// Output Format:

// Print whether the user is a valid voter or not, in the format: <Name> is a valid voter or <Name> is not a valid voter. In JavaScript, return the result instead of printing.

// Constraints:

// 1<-age <= 10^2


function checkVoterEligibility(name, age) {
    if (age > 17) return `${name} is a valid voter.`;
    else return `${name} is not a valid voter.`;
    
}

// Test Cases
console.log(checkVoterEligibility('Alice', 20));
console.log(checkVoterEligibility('Bob', 16));
console.log(checkVoterEligibility('Charlie', 18));
