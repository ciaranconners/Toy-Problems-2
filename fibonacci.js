/**
* @param {number} n
* @returns {number}
*/

const iterativeFib =(n) => {
  if (n === 0) {
      return 0;
  }
  if (n === 1) {
    return 1;
  }
  let nextLast = 1;
  let secondLast = 0;
  for (let i = 2; i <= n; i++) {
    const currentFibonnaci = nextLast + secondLast;
    secondLast = nextLast;
    nextLast = currentFibonnaci;
  }
  return nextLast;
};

/**
* @param {number} n
* @returns {number}
*/

const recursiveFib = (n) => {
  if (n === 0) {
    return 0;
  }
  if (n === 1) {
    return 1;
  }
  return recursiveFib(n - 1) + recursiveFib(n - 2);
};