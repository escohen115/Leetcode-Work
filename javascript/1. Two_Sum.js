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

    // let nums2 = [...nums]
    // nums2.sort((a,b)=>a-b)
    // for(let i=0;i<nums2.length;i++){
    //     let j = i + 1
    //     while(j < nums2.length){
    //         if(nums2[i]+nums2[j]=== target){
    //             console.log(nums)
    //             return [nums.indexOf(nums2[i]),nums.indexOf(nums2[j])]
    //         }    
    //         if(nums2[i] + nums2[j] > target){
    //             break
    //         }
    //         else{
    //             j++
    //         }
    //     }   
    // }    
}
    
    