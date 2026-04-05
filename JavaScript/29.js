

//  Sort an array of numbers in ascending order

function sortArray(arr) {
  return arr.sort((a, b) => a - b);
}

// Example usage:
const numbers = [5, 2, 9, 1, 5, 6];
const sortedNumbers = sortArray(numbers);
console.log(sortedNumbers); // Output: [1, 2, 5, 5, 6, 9]