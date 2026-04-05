

//  Copy an array using spread operator and compare references.

const originalArray = [1, 2, 3, 4, 5];
const copiedArray = [...originalArray];

console.log("Original Array:", originalArray);
console.log("Copied Array:", copiedArray);

// Compare references
console.log("Are the arrays the same reference?", originalArray === copiedArray);