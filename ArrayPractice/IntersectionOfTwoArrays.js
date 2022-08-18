// Given two integer arrays nums1 and nums2, return an array of their intersection. 
// Each element in the result must appear as many times as it shows in both arrays and you may return the result in any order.

// Example 1:

// Input: nums1 = [1,2,2,1], nums2 = [2,2]
// Output: [2,2]
// Example 2:

// Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
// Output: [4,9]
// Explanation: [9,4] is also accepted.

var intersect = function(nums1, nums2) {
    
//make a hashmap of the first arry of num 

let obj={}
let result=[]

for ( let i of nums1){  //made sure that the value in the array exists in the obj otherwise we assign it a value of 1 or +1 
    if(!obj[i]){
        obj[i]=1
    }else{
        obj[i]++
    }
}

//loop through the secon array of nums and see if the hashmap has a count of the value 

for(let j of nums2){                //if the value of nums 2 is greater than 0, then we push it to the new array and decrement the value so we know 
                                    //how many times it appeared in the first array
    if(obj[j] > 0){
        result.push(j)
        obj[j]--
    }
}

return result 

};


