/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
  if (strs.length < 2) return '';
  console.log(strs.length, strs[0].length, strs[1]);
  let commonStr = findInTwoStr(strs[0], strs[1]);
  for (let i = 2; i < strs.length; i++) {
    commonStr = findInTwoStr(commonStr, strs[i]);
  }
  return commonStr;
};

function findInTwoStr(str1, str2) {
  console.log(str1, str2);
  for (let i = 0; i < str1.length; i++) {
    if (str1[i] !== str2[i]) {
      console.log(str1.slice(0, i));
      return str1.slice(0, i);
    }
  }
}
console.log(longestCommonPrefix(['', '', '']));
