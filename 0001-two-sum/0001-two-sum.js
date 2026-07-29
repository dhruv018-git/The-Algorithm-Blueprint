/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let n = nums.length
   let numswithindex = nums.map((val,idx)=>[val,idx]);
   numswithindex.sort((a,b)=>a[0]-b[0])
   let left=0;
   let right=n-1
   
   while(left<right){
    let sum = numswithindex[left][0]+numswithindex[right][0];
    if(sum==target){
        return [numswithindex[left][1],numswithindex[right][1]]
    }else if(sum<target){
        left++
    }else{
        right--
    }

    
    
    
   }
};