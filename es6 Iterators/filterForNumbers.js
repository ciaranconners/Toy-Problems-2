 module.exports = function filterForNumbers(iterable) {
  let result = [];
  for (let x of iterable) {
    if (typeof x === 'number') {
      result.push(x);
    }
  }
  return result;
};