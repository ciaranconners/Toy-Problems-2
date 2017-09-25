/**
 * @param {number[]} nums
 * @return {number}
 */

const removeArrayDuplicates  = function(nums) {
  let seen = {}, result = [];
  for (let i = 0; i < nums.length; i++) {
    let current = nums[i];
    if (!(current in seen)) {
      result.push(current);
    }
    seen[current] = i;
  }
  return result;
};

