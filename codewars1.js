// Question

// An isogram is a word that has no repeating letters, consecutive or non-consecutive. 
// Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram.
// Ignore letter case.

// Solution

function isIsogram(str) {
     str = str.toLowerCase();
    
    let charLett = {};
    
       for (let i = 0; i < str.length; i++) {
        let char = str[i];
        
        if (charLett[char]) {
            return false; // If it exists, it's not an isogram
        }
        
               charLett[char] = true;
    }
    
        return true;
}