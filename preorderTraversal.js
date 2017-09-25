/**
* @param {object} t
* @param {object} currentNode
*/

function preOrder(t, currentNode = t) {
  let result = [];
  if (currentNode) {
    result.push(currentNode.value);
    if (currentNode.children) {
      for (let i = 0; i < currentNode.children.length; i++) {
        let current = currentNode.children[i];
        result = result.concat(preOrderDFS(current));
      }
    }
  }
  return result;
}
