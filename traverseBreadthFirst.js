/**
 * Definition for Node.
 * function Node(tagName, children) {
 *     this.tagName = tagName;
 *     this.firstChild = children[0];
 *     this.children = children;
 * }
 */
/**
 * @param {Node} node A Node instance
 * @param {function} callback A callback to call for each Node in the tree
 */

const traverseBreadthFirst = (node, callback) => {
  let queue = [];
  if (node) {
    queue.push(node);
  }
  while (queue.length) {
    let current = queue.shift();
    callback(current);
    if (current.children) {
      queue = queue.concat(current.children);
    }
  }
};