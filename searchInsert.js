/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
  for (var i = 0; nums[i] <= target; i++) {
    if (nums[i] === target) {
        return i;
    }
  }
  return i;
};
