// Compound Interest Calculation

// Medium

// Math Problem

// Description:

// Accept the principal amount (P), annual interest rate(r), the number of years(t), and number of times Interest is compounded per year(n) write a program to calculate the compound Interest. The formula to calculate compound interest is: A =Px(1+r/n)^(n*t) Where: A is the amount of money accumulated after n years, including interest. P is the principal amount (the initial sum of money). r is the annual Interest rate (in decimal). t is the time the money is invested for in years. n is the number of times that interest is compounded per year. The compound interest is then calculated as CI-A-P

// Examples 1:

// Sample Input:
// 1000
// 0.5
// 10
// 4

// Expected Output:
// 110199.00

// Examples 2:

// Sample Input:
// 1500
// 0.04
// 6
// 2

// Expected Output:
// 402.36

// Input Format:

// The first line contains a double P (Principal Amount). The second line contains a double r (Annua Interest Rate in Decimal). The third line contains an integer t (Time In Years). The fourth line contains an integer n (Number of Times Interest is Compounded Per Year).

// Output Format:

// Compound Interest (Cl) rounded to 2 decimal places.

// Constraints:

// 0<P≤10^7
// 0<r≤20
// 0<t≤100
// 1 ≤ n ≤ 365



function calculateCompoundInterest(P, r, t, n) {
    let a = P * ( 1 + (r/n)) ** (t * n);
    a = a - P;

    return a.toFixed(2);
}

// Test Cases
console.log(calculateCompoundInterest(1000, 0.5, 10, 4));
console.log(calculateCompoundInterest(1500, 0.04, 6, 2));
