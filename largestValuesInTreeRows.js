// You have a binary tree t. Your task is to find the largest value in each row of this tree. In a tree, a row is a set of nodes that have equal depth. For example, a row with depth 0 is a tree root, a row with depth 1 is composed of the root's children, etc.

// Return an array in which the first element is the largest value in the row with depth 0, the second element is the largest value in the row with depth 1, the third element is the largest element in the row with depth 2, etc.

function largestValuesInTreeRows(t) {
  let result = [];
  if (t) {
    let queue = [t];
    while (queue.length > 0) {
      let node = queue.shift();
      result.push(node.value);
      if (node.left && node.right) {
        if (node.left.value > node.right.value) {
          queue.push(node.left);
        } else {
          queue.push(node.right);
        }
      } else if (node.left) {
        queue.push(node.left);
      } else if (node.right) {
        queue.push(node.right);
      }
    }
  }
  return result;
}

largestValuesInTreeRows(t);
