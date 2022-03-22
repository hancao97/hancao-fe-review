// www.baidu.com

// com.baidu.www

const urlReverse = (url) => {
  let res = '';
  let current = '';
  for(const char of url) {
    if(char === '.') {
      res = char + current + res;
      current = '';
    }else {
      current = current + char;
    }
  }
  return current + res;
}

console.log(urlReverse('www.baidu.com'));