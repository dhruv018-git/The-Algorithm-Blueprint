/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
    let s = new Set()
    let ans = new Set();
    for(let i =0;i<nums1.length;i++){
        s.add(nums1[i]);
    }

    for(let j = 0;j<nums2.length;j++){
        if(s.has(nums2[j])){
            ans.add(nums2[j])
        }
    }
    return [...ans]

};