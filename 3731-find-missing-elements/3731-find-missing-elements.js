/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findMissingElements = function(nums) {

    let set = new Set();
    for(let i =0;i<nums.length;i++){
        set.add(nums[i]);
    }
    let mini = Math.min(...nums);
    let max = Math.max(...nums);
    let ans = [];
    for(let i = mini;i<=max;i++){
        if(set.has(i)){

        }else{
            ans.push(i)
        }
    }return ans

};