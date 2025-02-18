// Time complexity: O(n)
// Space complexity: O(n)
var containsDuplicate = function(nums) {
    const s = new Set(nums); return s.size !== nums.length
};

var containsDuplicate = nums => new Set(nums).size !== nums.length;

var containsDuplicate = function(nums) {
    let seen = new Set();
    
    for (let num of nums) {
        if (seen.has(num)) return true; // Found a duplicate
        seen.add(num);
    }
    
    return false; // No duplicates found
};
