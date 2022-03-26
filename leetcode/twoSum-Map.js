var twoSum = function (nums, target) {
  let map = new Map();
  for (let i = 0; i < nums.length; i++) {
    if (map.has(nums[i])) {
      if (2 * nums[i] === target) {
        return [map.get(nums[i]), i];
      }
    } else {
      if (map.has(target - nums[i])) {
        return [map.get(target - nums[i]), i];
      } else {
        map.set(nums[i], i);
      }
    }
  }
};