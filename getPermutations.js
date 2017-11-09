// a permutation generator that utilizes JavaScript sets

/**
* @param {array} nums
* @returns {set}
*/

const getPermutations = (string) => {
  if (string.length <= 1) {
    return new Set(string);
  }
  const charsExceptLast = string.slice(0, -1);
  const lastChar = string[string.length - 1];

  const charsExceptLastPermutations = getPermutations(charsExceptLast);

  const permutations = new Set();
  charsExceptLastPermutations.forEach(currentPermutation => {
    for (let i = 0; i <= charsExceptLast.length; i++) {
      const permutation = currentPermutation.slice(0, i) + lastChar + currentPermutation.slice(i);
      permutations.add(permutation);
    }
  });
  return permutations;
};