const maxSubArray = require('./maxSubArray.js');

console.log(maxSubArray);

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */

const maxPathSum = function(root) {
    let result = [];
    if (root === null) {
        return result;
    } else {
        result.push(root.val);
        if (root.left) {
            result = result.concat(maxPathSum(root.left));
        }
        if (root.right) {
            result = result.concat(maxPathSum(root.right));
        }
    }
    return maxSubArray(result);
};

let t = {
    "value": 4,
    "left": {
        "value": 1,
        "left": {
            "value": -2,
            "left": null,
            "right": {
                "value": 3,
                "left": null,
                "right": null
            }
        },
        "right": null
    },
    "right": {
        "value": 3,
        "left": {
            "value": 1,
            "left": null,
            "right": null
        },
        "right": {
            "value": 2,
            "left": {
                "value": -2,
                "left": null,
                "right": null
            },
            "right": {
                "value": -3,
                "left": null,
                "right": null
            }
        }
    }
};

console.log(maxPathSum(t));