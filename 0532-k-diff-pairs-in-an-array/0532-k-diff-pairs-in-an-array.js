/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findPairs = function(nums, k) {
    if (k < 0) return 0;

    nums.sort((a, b) => a - b);

    let l = 0;
    let r = 1;
    let count = 0;

    while (l < nums.length && r < nums.length) {

        if (l === r) {
            r++;
            continue;
        }

        let diff = nums[r] - nums[l];

        if (diff < k) {
            r++;
        }
        else if (diff > k) {
            l++;
        }
        else {
            count++;

            let leftVal = nums[l];
            let rightVal = nums[r];

            while (l < nums.length && nums[l] === leftVal) {
                l++;
            }

            while (r < nums.length && nums[r] === rightVal) {
                r++;
            }
        }
    }

    return count;
};