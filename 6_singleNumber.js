var singleNumber = function(nums) {
    // Initialize the unique number...
    let uniqNum = 0;
    // TRaverse all elements through the loop...
    for (let idx = 0; idx < nums.length; idx++) {
        // Concept of XOR...
        uniqNum = uniqNum ^ nums[idx];
    } return uniqNum;       // Return the unique number...
};

var singleNumber = nums => nums.reduce((a, b) => a ^ b, 0);

var singleNumber = function(nums) {
    let countMap = new Map();

    for (let num of nums) {
        countMap.set(num, (countMap.get(num) || 0) + 1);
    }

    for (let [key, value] of countMap) {
        if (value === 1) return key;
    }
};
