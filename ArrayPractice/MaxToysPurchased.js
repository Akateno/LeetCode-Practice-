// Give an array consisting of the cost of toys. Given an integer K depicting the amount of m oney available to purchase toys. 
// Write a program to find the maximum number of toys one can buy with the amount K. 

// Examples:  

// Input:  N = 10, K =  50
//         cost = { 1, 12, 5, 111, 200, 1000, 10, 9, 12, 15 }
// Output: 6
// Explanation: Toys with amount 1, 5, 9, 10, 12, and 12 
// can be purchased resulting in a total amount of 49. Hence,
// maximum number of toys is 6.

// Input: N = 7, K = 50
//        cost = { 1, 12, 5, 111, 200, 1000, 10 }
// Output: 4

// The idea to solve this problem is to first sort the cost array in ascending order. This will arrange the toys in increasing order of cost. Now iterate over the cost array and keep calculating the sum of costs until the sum is less than or equal to K. Finally, return the number of toys used to calculate the sum which is just less than or equals to K.

let toys = [1, 12, 5, 111, 200, 1000, 10, 9, 12, 15]
const k = 50
function selltoys(){
    let count =0; //keep trakc of number of toys 
    let sum =0; //keep track of our total

    toys.sort(); 

    for(let i=0; i<toys.length; i++){
        if(sum + toys[i]<k){
            sum = sum + toys[i]
            count++
        }
    }
    return count 
}

selltoys(toys, k)