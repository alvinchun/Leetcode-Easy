var maxDepth = function(root) {
    if (!root) {
        return 0;
    }

    const queue = [];
    queue.push(root);
    let depth = 0;

    while (queue.length > 0) {
        depth++;

        const levelSize = queue.length;
        for (let i = 0; i < levelSize; i++) {
            const node = queue.shift();
            if (node.left) {
                queue.push(node.left);
            }
            if (node.right) {
                queue.push(node.right);
            }
        }
    }

    return depth;    
};

var maxDepth = root => {
    let depth = 0, queue = root ? [root] : [];
    while (queue.length) {
        queue = queue.flatMap(node => [node.left, node.right].filter(Boolean));
        depth++;
    }
    return depth;
};
