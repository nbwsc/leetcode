/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
  var specialSet = {
    IV: 4,
    IX: 9,
    XL: 40,
    XC: 90,
    CD: 400,
    CM: 900,
  };
  var set = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };
  var num = 0;
  while (s != '') {
    if (specialSet[s.slice(0, 2)]) {
      num += specialSet[s.slice(0, 2)];
      s = s.slice(2);
    } else {
      num += set[s[0]];
      s = s.slice(1);
    }
  }
  return num;
};

console.log(romanToInt('IX'));
