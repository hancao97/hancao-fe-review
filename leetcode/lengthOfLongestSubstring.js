var lengthOfLongestSubstring = function(s) {
  const charMap = new Map();
  let len = 0;
  let currentLen = 0;
  let index = 0; 
  let repeatPoint = 0;
  for(const char of s) {
    if(charMap.has(char)) {
      repeatPoint = Math.max(charMap.get(char), repeatPoint);
      currentLen = index - repeatPoint;
    } else {
      currentLen ++;
    }
    if(currentLen > len) {
      len = currentLen;
    }
    charMap.set(char, index);
    index++;
  }
  return len;
};