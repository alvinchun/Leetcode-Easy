var inorderTraversal = function(root) {
    const res = [];

    function inorder(node) {
        if (!node) {
            return;
        }
        inorder(node.left);
        res.push(node.val);
        inorder(node.right);
    }

    inorder(root);
    return res;    
};

var inorderTraversal = function(root) {
    const res = [];
    const stack = [];

    while (root || stack.length > 0) {
        while (root) {
            stack.push(root);
            root = root.left;
        }

        root = stack.pop();
        res.push(root.val);
        root = root.right;
    }

    return res;    
};

var inorderTraversal = root => root ? [...inorderTraversal(root.left), root.val, ...inorderTraversal(root.right)] : [];
