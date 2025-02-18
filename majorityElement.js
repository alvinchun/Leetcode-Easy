/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    const hash = {};
    let res = 0;
    let majority = 0;

    for (let n of nums) {
        hash[n] = 1 + (hash[n] || 0);
        if (hash[n] > majority) {
            res = n;
            majority = hash[n];
        }
    }

    return res;    
};

var majorityElement = nums => nums.reduce(([res, count], n) => [count ? (n === res ? res : (count - 1 ? res : n)) : n, count + (n === res ? 1 : -1)], [0, 0])[0];

var majorityElement = function(nums) {
    let countMap = {}, majorityCount = 0, result = 0;

    for (let num of nums) {
        countMap[num] = (countMap[num] || 0) + 1; // Count occurrences
        if (countMap[num] > majorityCount) { 
            majorityCount = countMap[num];
            result = num;
        }
    }

    return result; // Return the number that appears more than ⌊n/2⌋ times
};
