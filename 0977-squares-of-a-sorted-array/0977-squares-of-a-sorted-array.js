var sortedSquares = function(nums) {
    let res = new Array(nums.length);

    let i = 0;
    let j = nums.length - 1;
    let k = nums.length - 1;

    while (i <= j) {

        let left = nums[i] * nums[i];
        let right = nums[j] * nums[j];

        if (left <= right) {
            res[k] = right;
            j--;
        } else {
            res[k] = left;
            i++;
        }

        k--;
    }

    return res;
};