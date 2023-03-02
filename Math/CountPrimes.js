// Given an integer n, return the number of prime numbers that are strictly less than n.

// Example 1:

// Input: n = 10
// Output: 4
// Explanation: There are 4 prime numbers less than 10, they are 2, 3, 5, 7.
// Example 2:

// Input: n = 0
// Output: 0
// Example 3:

// Input: n = 1
// Output: 0
let n=10
function primes(){
//for loop going from 1-i
//if i 
let nums = [...Array(n).keys()]

for(let i=2; i*i<n; i++){
    if(nums[i] !== 1){
        for(let j=i*i; j<n; j+=i){
            nums[j]=1
        }
    }
}

let primeNums=[]

for(let i=0; i<nums.length; i++){
    if(nums[i]>1){
        primeNums.push(nums[i])
    }
}
return console.log(primeNums.length);
}
primes(n);