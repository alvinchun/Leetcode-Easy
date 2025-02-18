var twoSum = function(nums, target) {
    const pairIdx = {};

    for (let i = 0; i < nums.length; i++) {
        const num = nums[i];
        if (target - num in pairIdx) {
            return [i, pairIdx[target - num]];
        }
        pairIdx[num] = i;
    }    
};

var twoSum = (nums, target) => nums.reduce((pairIdx, num, i) => pairIdx[target - num] !== undefined ? [i, pairIdx[target - num]] : (pairIdx[num] = i, pairIdx), {});

var twoSum = function(nums, target) {
    const pairIdx = {};

    for (let i = 0; i < nums.length; i++) {
        const num = nums[i];
        if (pairIdx[target - num] !== undefined) {
            return [i, pairIdx[target - num]]; // Found a pair, return indices
        }
        pairIdx[num] = i; // Store index of the current number
    }
};
