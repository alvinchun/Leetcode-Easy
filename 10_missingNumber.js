var missingNumber = function(nums) {
    const n = nums.length;
    const Tsum = (n * (n + 1)) / 2;
    const actualSum = nums.reduce((acc, num) => acc + num, 0);
    return Tsum - actualSum;
};

var missingNumber = function(nums) {
    nums.sort((a, b) => a - b);
    const n = nums.length;
    
    // Case 1
    if (nums[0] !== 0) return 0;
    
    // Case 2
    if (nums[n - 1] !== n) return n;
    
    // Case 3
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] !== i) return i;
    }
    
    return 0;
};

var missingNumber = nums => (nums.length * (nums.length + 1)) / 2 - nums.reduce((a, b) => a + b, 0);

var missingNumber = function(nums) {
    let n = nums.length;
    let expectedSum = (n * (n + 1)) / 2; // Sum of first n natural numbers
    let actualSum = 0;
    
    for (let num of nums) {
        actualSum += num; // Sum all numbers in the array
    }
    
    return expectedSum - actualSum; // The missing number
};


