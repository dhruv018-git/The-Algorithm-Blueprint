/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
    let i = 0; let j = 0;
    let ans = [];
    nums1.sort((a,b)=>a-b);
    nums2.sort((a,b)=>a-b);
   while (i < nums1.length && j < nums2.length){
     
     if(nums1[i]<nums2[j]){
        i++;
     }
     else if(nums1[i]>nums2[j]){
        j++
     }
     else{
      ans.push(nums1[i])
       i++;
       j++;

     while(i < nums1.length && nums1[i] == nums1[i-1]) i++;
     while(j < nums2.length && nums2[j] == nums2[j-1]) j++;
     }
     


   }
   return ans;
};