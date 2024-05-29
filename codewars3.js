// Question
// In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.

// Examples
// highAndLow("1 2 3 4 5");  // return "5 1"
// highAndLow("1 2 -3 4 5"); // return "5 -3"
// highAndLow("1 9 3 4 -5"); // return "9 -5"

// Solution

//Converting the input string into an array of numbers by splittng it
//Changing each element of the array from a string to an integer.
//using Math.max() and Math.min() functions to find the highest and lowest numbers in the array.
//Combining the maximum and Minimum values into a string

function highAndLow(numbers) {
    // 1. Split the string into an array of numbers
    const numArray = numbers.split(" ").map(Number);
  
    // 2. Find the highest and lowest numbers
    const highest = Math.max(...numArray);
    const lowest = Math.min(...numArray);
  
    // 3. Return the highest and lowest numbers as a string
    return `${highest} ${lowest}`;
  }
  
  
  console.log(highAndLow("1 2 3 4 5"));  // Output: "5 1"
  console.log(highAndLow("1 2 -3 4 5")); // Output: "5 -3"
  console.log(highAndLow("1 9 3 4 -5")); // Output: "9 -5"