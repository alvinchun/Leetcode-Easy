var moveZeroes = function(nums) {
    let left = 0;

    for (let right = 0; right < nums.length; right++) {
        if (nums[right] !== 0) {
            [nums[right], nums[left]] = [nums[left], nums[right]];
            left++;
        }
    }

    return nums;    
};

var moveZeroes = nums => {
    let left = 0;
    nums.forEach((n, right) => n && ([nums[left], nums[right]] = [nums[right], nums[left]], left++));
};

var moveZeroes = function(nums) {
    let left = 0;

    for (let right = 0; right < nums.length; right++) {
        if (nums[right] !== 0) {
            // Swap non-zero element with the leftmost zero
            [nums[left], nums[right]] = [nums[right], nums[left]];
            left++; // Move the left pointer
        }
    }
};
