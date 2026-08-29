/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
   let n = nums.length;

   let NumWithIndex = nums.map((val,idx)=>[val,idx])
   NumWithIndex.sort((a,b)=>a[0]-b[0])
   let l = 0;
   let r = n-1;
    
while(l<r){
    let CurSum = NumWithIndex[l][0]+NumWithIndex[r][0];
    if(CurSum==target){
      return [NumWithIndex[l][1],NumWithIndex[r][1]];

    }
    else if(CurSum>target){
        r--
    }
    else {
        l++
    }
    
}
    
   
};