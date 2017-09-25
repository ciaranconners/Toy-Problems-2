/**
* @param {array} array
* @param {number} k
*/

const rightRotate = (array, k) => {
  for (let i = 0; i < k; i++) {
    let toMove = array.pop();
    array.unshift(toMove);
  }
  return array;
};