

// Print Day Name from Day Number

// Description

// Write a program that takes a day number (between 1 and 7) as input and prints the corresponding day name. The mapping is as follows: 1: Monday 2: Tuesday 3: Wednesday 4: Thursday 5: Friday 6: Saturday 7: Sunday If the input number is not between 1 and 7, print "Invalid day number".

// Examples 1:

// Sample Input:
// 3

// Expected Output:
// Wednesday

// Examples 2:

// Sample Input:
// 7

// Expected Output:
// Sunday

// Constraints:

// The input will be an integer

// The input number can range from-100 to 100.


function printDayName(day) {

    switch (day) {
        case 1: {
            return 'Monday';
            break;
        }
        case 2: {
            return 'Tuesday';
            break;
        }
        case 3: {
            return 'Wednesday';
            break;
        }
        case 4: {
            return 'Thursday';
            break;
        }
        case 5: {
            return 'Friday';
            break;
        }
        case 6: {
            return 'Saturday';
            break;
        }
        case 7: {
            return 'Sunday';
            break;
        }
        default: {
            return 'Invalid day number';
        }

    }
}

// Test Cases
console.log(printDayName(3));
console.log(printDayName(7));
console.log(printDayName(0));
console.log(printDayName(8));
