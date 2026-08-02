/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */
var shuffle = function(nums, n) {
    let ans = [];
    for(let i =0;i<n;i++){
        x = nums[i]
        y = nums[n+i]
        ans.push(x,y)
    }return ans
};