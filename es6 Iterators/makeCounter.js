/**
* @param {object} someObj
*/

module.exports = function makeCounter (someObj, maxNum) {
  let i = 1;
  someObj.next = function () {
    let done = i > maxNum, value;
    if (!done) {
      value = i;
      i++;
    }
    return {
      done: done,
      value: value
    };
  };
};
