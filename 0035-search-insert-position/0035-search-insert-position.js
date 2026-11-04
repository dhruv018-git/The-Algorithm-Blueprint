/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    let low = 0;
    let high = nums.length - 1;

    while (low <= high) {
        let mid = Math.floor(low + (high - low) / 2);

        if (nums[mid] === target) {
            return mid; // Target mil gaya
        } else if (nums[mid] < target) {
            low = mid + 1; // Target right half mein hai
        } else {
            high = mid - 1; // Target left half mein hai
        }
    }

    return low;
};