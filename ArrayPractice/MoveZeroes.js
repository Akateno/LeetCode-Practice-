// Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.

// Note that you must do this in-place without making a copy of the array.

 

// Example 1:

// Input: nums = [0,1,0,3,12]
// Output: [1,3,12,0,0]
// Example 2:

// Input: nums = [0]
// Output: [0]
var moveZeroes = function(nums) {
    let index=0; 
    
    for (let i=0; i<nums.length; i++){  //we are basically setting the index for all nonzero numbers starting at index=0
        if(nums[i] !== 0){
            nums[index]=nums[i]
            index++
        }
    }
    for (let i=index; i<nums.length; i++){  //at this point were going to fill the rest of the array with zeros since we already accounted for all non-zero numbers 
                                            //by doing nums[i]=0
        nums[i]=0
    }
    
};
//move all the zeroes out to the end 



