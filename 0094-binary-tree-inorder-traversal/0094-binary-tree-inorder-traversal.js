/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function(root) {

    let result = [];
    let stack = [];
    let current = root;

    while (current !== null || stack.length > 0) {

        // Go left as much as possible
        while (current !== null) {
            stack.push(current);
            current = current.left;
        }

        // Visit node
        current = stack.pop();
        result.push(current.val);

        // Move to right subtree
        current = current.right;
    }

    return result;
};
