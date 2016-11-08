var postorderTraversal = function(root) {
    var stack = root ?  [root] : [];
    var result = [];
    var node;
    while (stack.length > 0) {
        node = stack.pop();
        result.push(node.val);
        if (node.left) stack.push(node.left);
        if (node.right) stack.push(node.right);
    }
    result.reverse();
    return result;
};