/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    
    let match = null
    // O(n)^2
    for (let i=0;i<nums.length;i++){
        match = nums.indexOf(target-nums[i])
        if (match > - 1 && match !== i){
            return [i,match]
        }
    }
   
    
    
    
};