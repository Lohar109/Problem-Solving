

// Check if a Number is Automorphic

// Description:

// A number is called an Automorphic number if its square ends with the number itself. For example: 25 is Automorphic because: 25^2 = 625. The last two digits are 25 (which matches the number itself). Write a program that accepts a positive integer n and checks whether it is an Automorphic number. If n is an Automorphic number, print "Yes". Otherwise, print "No".

// Examples 1:

// Sample Input:

// A

// 5

// Expected Output:

// Yes

// Examples 2:

// Sample Input:

// 7

// Expected Output:

// No

// Input Format:

// The input consists of a single positive integer n.

// Output Format:

// Print "Yes" if n is an Automorphic number otherwise print "No".

// For Javascript: Return the result instead of printing.

// Constraints:

// 1<=n<=10^3


function isAutomorphic(n) {
    
    let a = n * n;
    let rev = 0;

    while (a != 0) {

        if (rev === 0) rev = rev + (a % 10);
        else rev = rev + ((a % 10) * 10);
        if (rev === n) return 'Yes';
        a = Math.floor(a / 10);
    }

    return 'No';
}

module.exports = { isAutomorphic };