var twoSum = function(nums, target) {
  const _nums = nums.map((num, index) => ({
    index,
    num
  })).sort((a, b) => a.num - b.num);
  let left = 0;
  let right = _nums.length - 1;
  while(left < right) {
    const sum = _nums[left].num + _nums[right].num;
    if(sum > target) {
      right --;
    } else if(sum < target) {
      left ++;
    } else {
      return [_nums[left].index, _nums[right].index];
    }
  }
  return [];
};