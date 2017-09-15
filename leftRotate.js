const leftRotate = (array, k) => {
  for (let i = 0; i < k; i++) {
    let toMove = array.shift();
    array.push(toMove);
  }
  return array;
};