// Note: Try to solve this task without using recursion, since this is what you'll be asked to do during an interview.

// Given a binary tree of integers t, return its node values in the following format:

// The first element should be the value of the tree root;
// The next elements should be the values of the nodes at height 1 (i.e. the root children), ordered from the leftmost to the rightmost one;
// The elements after that should be the values of the nodes at height 2 (i.e. the children of the nodes at height 1) ordered in the same way;
// Etc.
// Example

// For

// t = {
//     "value": 1,
//     "left": {
//         "value": 2,
//         "left": null,
//         "right": {
//             "value": 3,
//             "left": null,
//             "right": null
//         }
//     },
//     "right": {
//         "value": 4,
//         "left": {
//             "value": 5,
//             "left": null,
//             "right": null
//         },
//         "right": null
//     }
// }
// the output should be
// traverseTree(t) = [1, 2, 4, 3, 5].

// This t looks like this:

//      1
//    /   \
//   2     4
//    \   /
//     3 5
// Input/Output

// [time limit] 4000ms (js)
// [input] tree.integer t

// Guaranteed constraints:
// 0 ≤ tree size ≤ 104.

// [output] array.integer

// An array that contains the values at t's nodes, ordered as described above.

// function traverseTree(t, root) {
//   let nodes = [];
//   if (t) {
//     nodes.push(t);
//     if (t.left) {
//       result.push(t.left);
//     }
//     if (root.right) {
//       result.push(t.right);
//     }
//     result = result.concat(traverseTree(t.left.left));
//   }
//   return result;
// }

// let t = {
//     "value": 1,
//     "left": {
//         "value": 2,
//         "left": null,
//         "right": {
//             "value": 3,
//             "left": null,
//             "right": null
//         }
//     },
//     "right": {
//         "value": 4,
//         "left": {
//             "value": 5,
//             "left": null,
//             "right": null
//         },
//         "right": null
//     }
// };

// traverseTree(t);

// // function traverseTree(t, root) {
// //   let result = [];
// //   if (t) {
// //     root = root || t;
// //     if (root.value) {
// //       result.push(root.value);
// //     }
// //     if (root.left) {
// //       result = result.concat(traverseTree(t, root.left));
// //     }
// //     if (root.right) {
// //       result = result.concat(traverseTree(t, root.right));
// //     }
// //   }
// //   return result;
// // }

// function traverse(t) {
//   let result = [];
//   let finalResult = [];
//   if (t) {
//     result.push(t.value);
//     if (t.left) {
//       result.push(t.left.value);
//     }
//     if (t.right) {
//       result.push(t.right.value);
//     }
//     result = result.concat(traverse(t.left));
//   }
//   return result;
// }

// let t = {
//     "value": 1,
//     "left": {
//         "value": 2,
//         "left": null,
//         "right": {
//             "value": 3,
//             "left": null,
//             "right": null
//         }
//     },
//     "right": {
//         "value": 4,
//         "left": {
//             "value": 5,
//             "left": null,
//             "right": null
//         },
//         "right": null
//     }
// };

// traverse(t);

// function traverse(t) {
//   if (t) {
//     let result = [t.value];
//     function recursor(t) {
//       let subresult = [];
//       if (t) {
//         if (t.left) {
//           subresult.push(t.left.value);
//         }
//         if (t.right) {
//           subresult.push(t.right.value);
//         }
//         subresult = subresult.concat(recursor(t.left)).concat(recursor(t.right));
//       }
//       return subresult;
//     }
//     return result.concat(recursor(t));
//   }
//   return [];
// }

// FINAL FUNCTION:

function traverseTree(t) {
  let result = [];
  if (t) {
    let queue = [t];
    while (queue.length > 0) {
      let node = queue.shift();
      result.push(node.value);
      if (node.left) {
        queue.push(node.left);
      }
      if (node.right) {
        queue.push(node.right);
      }
    }
  }
  return result;
}