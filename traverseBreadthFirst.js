/**
 * Definition for Node.
 * function Node(tagName, children) {
 *     this.tagName = tagName;
 *     this.firstChild = children[0];
 *     this.children = children;
 * }
 */
/**
 * @param {Node} node
 * @param {function} callback
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