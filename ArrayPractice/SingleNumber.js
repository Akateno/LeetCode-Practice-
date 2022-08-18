//Given a non-empty array of intergers num. every element appears twice except for one. Find that single one 
// Example 1:

// Input: nums = [2,2,1]
// Output: 1
// Example 2:

// Input: nums = [4,1,2,1,2]
// Output: 4
// Example 3:

// Input: nums = [1]
// Output: 1

var singleNumber = function(nums) {
    
    const obj  = {};
     
      for (const num of nums){
         obj[num]= obj[num]+1 || 1; 
     }

      for (const key in obj){
            if (obj[key]===1){
                return key; 
             }
         }
 
     
     
 };









