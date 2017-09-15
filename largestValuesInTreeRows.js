// You have a binary tree t. Your task is to find the largest value in each row of this tree. In a tree, a row is a set of nodes that have equal depth. For example, a row with depth 0 is a tree root, a row with depth 1 is composed of the root's children, etc.

// Return an array in which the first element is the largest value in the row with depth 0, the second element is the largest value in the row with depth 1, the third element is the largest element in the row with depth 2, etc.

// Definition for binary tree:
// function Tree(x) {
//   this.value = x;
//   this.left = null;
//   this.right = null;
// }

function largestValuesInTreeRows(t) {
  let temp = [], levelMaxes = {}, result = [], level = 1;
  if (t) {
    let queue = [t, null];
    while (queue.length > 0) {
      let node = queue.shift();
       if(node === null){
              level++;
              queue.push(null);
              if(queue[0] === null) {
                break;
              }
          }
      node.level = level;
      temp.push(node);
      if (node.left) {
        queue.push(node.left);
      }
      if (node.right) {
        queue.push(node.right);
      }
    }
  }
  for (let i = 0; i < temp.length; i++) {
    let currentLevel = temp[i].level;
    let currentValue =temp[i].value;
    if (currentLevel in levelMaxes) {
      if (levelMaxes[currentLevel] < currentValue) {
        levelMaxes[currentLevel] = currentValue;
      }
    } else {
      levelMaxes[currentLevel] = currentValue;
    }
  }
  for (let x of Object.keys(levelMaxes)) {
    result.push(levelMaxes[x]);
  }
  return result;
}


// function largestValuesInTreeRows(t) {
//     let ret = [];

//     const rec = (n, d) => {
//         if(n === null) return;

//         if(ret[d] === undefined) {
//             ret[d] = Number.MIN_SAFE_INTEGER;
//         }

//         ret[d] = Math.max(ret[d], n.value);

//         rec(n.left, d+1);
//         rec(n.right, d+1);
//     };

//     rec(t, 0);

//     return ret;
// }

