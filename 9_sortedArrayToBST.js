var sortedArrayToBST = function(nums) {
    // Call the function recursively...
	return ConvToBST(nums, 0, nums.length - 1);
}
// Create a function which will convert any particular range of given nums array...
// & return its corresponding BST root node....
var ConvToBST = function(nums, beg, end) {
    // If beg > end, return NULL, as we receive a wrong range...
	if (beg > end)
		return null;
    // set the middle node...
	var mid = Math.ceil((beg + end) / 2);
    // Initialise root node with value same as nums[mid]...
	var root = new TreeNode(nums[mid]);
    // Assign left subtrees as the same function called on left subranges...
	root.left = ConvToBST(nums, beg, mid - 1);
    // Assign right subtrees as the same function called on right subranges...
	root.right = ConvToBST(nums, mid + 1, end);
    // Return the root node...
	return root;
};

var ConvToBST = (nums, beg, end) => 
    beg > end ? null : new TreeNode(nums[(beg + end) >> 1], ConvToBST(nums, beg, (beg + end) >> 1 - 1), ConvToBST(nums, (beg + end) >> 1 + 1, end));

var ConvToBST = function(nums, beg, end) {
    if (beg > end) return null; // Base case: invalid range

    let mid = Math.floor((beg + end) / 2); // Find the middle element
    let root = new TreeNode(nums[mid]); // Create a new TreeNode
    
    root.left = ConvToBST(nums, beg, mid - 1); // Recursively build left subtree
    root.right = ConvToBST(nums, mid + 1, end); // Recursively build right subtree

    return root; // Return root of the BST
};
