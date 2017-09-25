// Given a ransom string and a magazine string, return a boolean which indicates whether the ransom string can be made up using words from the magazine string. Case sensitive, a word can't be used twice, and part of a word can't be used.

/**
* @param {string} magazine
* @param {string} ransom
*/

function ransomChecker(magazine, ransom) {
      let magazineWords = {}, ransomWords = {};
      for (let x of magazine) {
        if (x in magazineWords) {
          magazineWords[x]++;
        } else {
          magazineWords[x] = 1;
        }
      }
      for (let x of ransom) {
        if (x in ransomWords) {
          ransomWords[x]++;
        } else {
          ransomWords[x] = 1;
        }
      }
      for (let x of Object.keys(ransomWords)) {
        if (ransomWords[x] > magazineWords[x]) {
          console.log('No');
          return;
        }
      }
      console.log('Yes');
}