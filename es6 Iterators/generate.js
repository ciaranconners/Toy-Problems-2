 module.exports = function generate(isEven) {
  // return an Iterator for even numbers if isEven is true
  // or, return an Iterator for odd numbers if isEven is false
  // If `.next(swap)` receives `true`, swap between even <-> odd
  if (isEven) {

    return {
      done: false,
      next: function() {
        let i = 2;
        return {
          done: false,
          value: i += 2
        };
      }
    };
  } else {

  }
};