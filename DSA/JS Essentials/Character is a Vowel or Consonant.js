

// Check if a Character is a Vowel or Consonant

// Easy

// Control Flow Statement

// Description

// Write a program that takes a single English alphabet character as input and checks whether it is a vowel or a consonant. If the character is one of a, e, i, o, u (in either uppercase or lowercase), print "Vowel". Otherwise, print "Consonant". If the input is not a valid English alphabet letter, print "Invalid input".

// Examples 1:

// Sample Input:
// a

// Expected Output:
// Vowel

// Examples 2:

// Sample Input:
// B

// Expected Output:
// Consonant

// Constraints:

// The input will be a single character.

// The input can be either uppercase or lowercase.

// The input can also include non-alphabet characters.


function checkChar(ch) {
  
  switch (ch) {
    case 'a':
    case 'A': {
      return 'Vowel';
      break;
    }
    case 'e':
    case 'E': {
      return 'Vowel';
      break;
    }
    case 'i':
    case 'I': {
      return 'Vowel';
      break;
    }
    case 'o':
    case 'O': {
      return 'Vowel';
      break;
    }
    case 'u':
    case 'U': {
      return 'Vowel';
      break;
    }
    case 'b':
    case 'B':
    case 'c':
    case 'C':
    case 'd':
    case 'D':
    case 'f':
    case 'F':
    case 'g':
    case 'G':
    case 'h':
    case 'H':
    case 'j':
    case 'J':
    case 'k':
    case 'K':
    case 'l':
    case 'L':
    case 'm':
    case 'M':
    case 'n':
    case 'N':
    case 'p':
    case 'P':
    case 'q':
    case 'Q':
    case 'r':
    case 'R':
    case 's':
    case 'S':
    case 't':
    case 'T':
    case 'v':
    case 'V':
    case 'w':
    case 'W':
    case 'x':
    case 'X':
    case 'y':
    case 'Y':
    case 'z':
    case 'Z': {
      return 'Consonant'
    }

    default: {
      return 'Invalid input';
    }
  }
}

// Test Cases
console.log(checkChar('a'));
console.log(checkChar('B'));
console.log(checkChar('1'));
