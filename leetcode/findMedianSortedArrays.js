var findMedianSortedArrays = function(nums1, nums2) {
  const len = nums1.length + nums2.length;
  const isOdd = len % 2 == 1;
  const mid = Math.ceil(len / 2) - 1;
  let count = 0;
  let isEnd1 = false;
  let isEnd2 = false;
  const compareAndShift = () => {
    if(isEnd1) {
      return nums2.shift();
    }
    if(isEnd2) {
      return nums1.shift();
    }
    if(nums1.length == 0) {
      isEnd1 = true;
      return nums2.shift();
    }
    if(nums2.length == 0) {
      isEnd2 = true;
      return nums1.shift();
    }
    if(nums1[0] < nums2[0]){
      return nums1.shift();
    } else {
      return nums2.shift();
    }
  }
  while(count < mid) {
    compareAndShift();
    count ++;
  }
  if(isOdd) {
    return compareAndShift();
  } else {
    return (compareAndShift() + compareAndShift()) / 2; 
  }
};