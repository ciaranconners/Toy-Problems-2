/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
const inorderTraversal = (root) => {
    let result = [];
    if (!root) {
        return result;
    }
    if (root.left) {
        result = result.concat(inorderTraversal(root.left));
    }
    result.push(root.val);
    if (root.right) {
        result = result.concat(inorderTraversal(root.right));
    }
    return result;
};