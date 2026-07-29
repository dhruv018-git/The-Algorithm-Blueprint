/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let n = nums.length
    let ans =[]
    for(let i = 0;i<n;i++){
        for(let j=i+1;j<n;j++){
            
            if(nums[i]+nums[j]==target){
                ans.push(i,j)
            }
        }
    }return ans
};