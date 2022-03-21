var convert = function(s, numRows) {
  if (numRows === 1) return s;
  const rows = new Array(numRows).fill("");
  const period = 2 * numRows - 2;
  for(let i = 0; i < s.length; i++) {
      rows[Math.min(i % period, period - i % period)] += s[i];
  }
  return rows.join("");
};