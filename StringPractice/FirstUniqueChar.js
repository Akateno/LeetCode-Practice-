// Given a string s, find the first non-repeating character in it and return its index. If it does not exist, return -1.

 

// Example 1:

// Input: s = "leetcode"
// Output: 0
// Example 2:

// Input: s = "loveleetcode"
// Output: 2
// Example 3:

// Input: s = "aabb"
// Output: -1

var firstUniqChar = function(s) {

    const obj={};
    
//fill out the obj we created
for ( let i=0; i<s.length; i++){
    const char = s[i]
    obj[char] = obj[char]+1 || 1
}

//go through the hash and see who has a value of 1 and return the index number it was at. 
for (let i = 0; i<s.length; i++)
{
    const char = s[i]
    if(obj[char]===1){
        return i
    }
}

return -1; 




};

