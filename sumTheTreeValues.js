// a method to sum the values contained in a binary tree

function sumTheTreeValues(root){
  let toSum = [];
  if (root) {
    toSum.push(root.value);
  }
  if (root.left) {
    toSum = toSum.concat(sumTheTreeValues(root.left));
  }
  if (root.right) {
    toSum = toSum.concat(sumTheTreeValues(root.right));
  }
  return toSum.reduce((a, v) => a + v);
}
