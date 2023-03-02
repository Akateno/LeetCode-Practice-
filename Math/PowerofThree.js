// Given an integer n, return true if it is a power of three. Otherwise, return false.

// An integer n is a power of three, if there exists an integer x such that n == 3x.

 

// Example 1:

// Input: n = 27
// Output: true
// Explanation: 27 = 33
// Example 2:

// Input: n = 0
// Output: false
// Explanation: There is no x where 3x = 0.
// Example 3:

// Input: n = -1
// Output: false
// Explanation: There is no x where 3x = (-1).
n=5
function power(){

//true if n is a power of 3 

//ex if n=8 it would be true 2^3 = 8 
for(let i=1; i<=n; i++){
    if(i^3 === n){
        console.log(i^3)
        return console.log(true)
    }
}
return console.log(false)
}
power(n)