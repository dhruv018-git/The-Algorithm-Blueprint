/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    let n = nums.length;

   for(let i=0;i<n;i++){
    let num = nums[i];
    let count = 0;
    for(let j =0;j<n;j++){
        if(nums[j]==num){
            count++
        }
        
        }if(count==1){
            return num;
      
    }
   }
};