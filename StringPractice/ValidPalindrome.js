// A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

// Given a string s, return true if it is a palindrome, or false otherwise.

 

// Example 1:

// Input: s = "A man, a plan, a canal: Panama"
// Output: true
// Explanation: "amanaplanacanalpanama" is a palindrome.
// Example 2:

// Input: s = "race a car"
// Output: false
// Explanation: "raceacar" is not a palindrome.
// Example 3:

// Input: s = " "
// Output: true
// Explanation: s is an empty string "" after removing non-alphanumeric characters.
// Since an empty string reads the same forward and backward, it is a palindrome


//platn: 
// 1. create regex to replace special chars with ""
// 2. create left index variable to keep track of the left pointer 
// 3. create rightindex variable to keep track of the right pointer 
// 4. create while loop until the poknters equal to each other. 
//     create condition to see if the values of pointers dont equal to eachother, wich returns false 
//     increment leftindex 
//     decrement rightindex 
// 6. return 


var isPalindrome = function(s) {
    

//replaced all special symbols using .replace, everything thats not a-z0-9 and its g=global i=lowerandUpper case replaced with empty string 
s=s.replace(/[^a-z0-9]/gi,"")

//set both our indexes 
let leftIndex=0; 
let rightIndex=s.length-1; 

//loop through and see if the index at the right is equal to index on the left, if they are not return false 
//if they  are true well increment left index and decrement righ tindex 
//once they are all true well return true since it is a palindrome 
while(leftIndex<rightIndex){
    if(s[leftIndex].toLowerCase() !== s[rightIndex].toLowerCase()){
        return false; 
    }
    leftIndex++; 
    rightIndex--; 
}
return true; 
    
};