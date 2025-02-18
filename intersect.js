/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
    nums1.sort((a, b) => a - b);
    nums2.sort((a, b) => a - b);
    
    let i = 0, j = 0;
    const result = [];
    
    while (i < nums1.length && j < nums2.length) {
        if (nums1[i] < nums2[j]) {
            i++;
        } else if (nums1[i] > nums2[j]) {
            j++;
        } else {
            result.push(nums1[i]);
            i++;
            j++;
        }
    }
    
    return result;
};

var intersect = (nums1, nums2) => {
    nums1.sort((a, b) => a - b), nums2.sort((a, b) => a - b);
    let i = 0, j = 0, res = [];
    while (i < nums1.length && j < nums2.length) 
        nums1[i] < nums2[j] ? i++ : nums1[i] > nums2[j] ? j++ : res.push(nums1[i++], j++);
    return res;
};

var intersect = function(nums1, nums2) {
    nums1.sort((a, b) => a - b);
    nums2.sort((a, b) => a - b);
    
    let i = 0, j = 0, result = [];
    
    while (i < nums1.length && j < nums2.length) {
        if (nums1[i] < nums2[j]) {
            i++; // Move pointer in nums1
        } else if (nums1[i] > nums2[j]) {
            j++; // Move pointer in nums2
        } else {
            result.push(nums1[i]); // Found intersection, add to result
            i++; 
            j++;
        }
    }
    
    return result;
};
