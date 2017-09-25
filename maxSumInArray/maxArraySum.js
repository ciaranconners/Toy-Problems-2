/**
 * @param {number[]} nums
 * @return {number}
 */

const maxArraySum = (nums) => {
  let maxSum = nums[0];
  let result = nums.slice();
  for (let i = 1; i < result.length; i++) {
    let current = result[i];
    if (current > maxSum) {
      maxSum = current;
    } else if ((current + maxSum) > maxSum) {
      maxSum = current + maxSum;
    } else if ((current + maxSum) < maxSum) {
      result.splice(i, 1);
    }
  }
  return result.reduce((a, v) => a + v);
};