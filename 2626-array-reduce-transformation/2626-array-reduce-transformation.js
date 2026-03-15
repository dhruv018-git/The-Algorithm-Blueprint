/**
 * @param {number[]} nums
 * @param {Function} fn
 * @param {number} init
 * @return {number}
 */
var reduce = function(nums, fn, init) {
    let val = init;
    
    // Array ke har element par loop chalayenge
    for (let i = 0; i < nums.length; i++) {
        // Purani 'val' aur current element ko function mein pass karke 'val' update karenge
        val = fn(val, nums[i]);
    }
    
    return val;
};