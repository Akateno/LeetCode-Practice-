var containsDuplicate = function(nums) {
   nums.sort(); 

   for(let i =0; i<nums.length; i++){
    let j = nums[i+1]
    if(i === j ){
        return true 
    }
   }
   return false; 
};