/*
 * @lc app=leetcode.cn id=10 lang=javascript
 *
 * [10] 正则表达式匹配
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
 const getNodeList = (pattern) => {
  const nodeList = [];
  for(const char of pattern) {
    if(char == '*') {
      current.type = 'ANY';
    } else {
      current = {
        type: 'NORMAL',
        char: char == '.'?'EVERY':char 
      };
      nodeList.push(current);
    }
  }
  return nodeList;
}

const getGenerator = (nodeList) => {
  let start = {
    type: 'START',
    next: []
  };
  let currentList = [start];
  for(const node of nodeList) {
    if(node.type == 'ANY') {
      const genNode = {
        type: 'NORMAL',
        char: node.char,
        next: []
      };
      genNode.next.push(genNode);
      currentList.forEach(current => current.next.push(genNode));
      currentList.push(genNode);
    } else {
      const genNode = {
        ...node,
        next: []
      }
      currentList.forEach(current => current.next.push(genNode));
      currentList = [genNode];
    }
  }
  currentList.forEach(current => current.next.push({
    type: 'END'
  }))
  return start;
} 

const test = (str, generator) => {
  if(generator.type == 'END' || str.length == 0) {
    return generator.type == 'END' && str.length == 0;
  }
  let _str;
  if(generator.type == 'START') {
    _str = str;
  } else {
    if(generator.char !== 'EVERY' && generator.char !== str[0]) return false;
    _str = str.substring(1);
  }
  return generator.next.some(_gen => test(_str, _gen));
}

var isMatch = function(s, p) {
  const nodeList = getNodeList(p);
  const generatorStart = getGenerator(nodeList);
  return test(s, generatorStart);
};
// @lc code=end

