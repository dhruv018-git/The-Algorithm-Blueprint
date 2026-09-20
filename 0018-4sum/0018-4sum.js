/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function(nums, target) {
      let n = nums.length;
  let ans = [];
  nums.sort()
  for(let i=0;i<n-3;i++){
    if(i>0 && nums[i]==nums[i-1])continue;
    for(let j = i+1;j<n-2;j++){
      if(j != i+1 && nums[j]==nums[j-1])continue;
      let l =  j+1;
      let r = n-1
      while(l<r){
        let sum  = nums[i]+nums[j]+nums[l]+nums[r];
        if(sum==target){
          ans.push([nums[i],nums[j],nums[l],nums[r]])
          l++;
          r--
         while(l<r && nums[l]==nums[l-1])l++;
         while(l<r && nums[r]==nums[r+1])r++;
          
        }
        else if(sum>target){
          r--;
        }else{
          l++
        }
      }
    }
  }
  return ans

};