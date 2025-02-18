var isSymmetric = function(root) {
    // Special case...
    if (!root)
        return true;
    // Return the function recursively...
    return isSame(root.left, root.right);
};
// A tree is called symmetric if the left subtree must be a mirror reflection of the right subtree...
var isSame = function (leftroot, rightroot) {
    // If both root nodes are null pointers, return true...
    // If exactly one of them is a null node, return false...
    // If root nodes haven't same value, return false...
    if ((!leftroot && rightroot) || (leftroot && !rightroot) || (leftroot && rightroot && leftroot.val !== rightroot.val))
        return false;
    // Return true if the values of root nodes are same and left as well as right subtrees are symmetric...
    if (leftroot && rightroot)
        return isSame(leftroot.left, rightroot.right) && isSame(leftroot.right, rightroot.left);
    return true;
};

var isSymmetric = root => !root || (isSame = (l, r) => !l || !r ? l === r : l.val === r.val && isSame(l.left, r.right) && isSame(l.right, r.left))(root.left, root.right);

var isSymmetric = function(root) {
    if (!root) return true; // If the tree is empty, it's symmetric

    function isSame(left, right) {
        if (!left || !right) return left === right; // If one is null, they must both be null
        if (left.val !== right.val) return false; // Values must match

        return isSame(left.left, right.right) && isSame(left.right, right.left); // Recursively check mirrored structure
    }

    return isSame(root.left, root.right);
};
