const fs = require('fs');
const str = fs.readFileSync('input/1202').toString();

const samp = 'bababc';
function isStrContN(str, n) {
  const appearMap = {};
  for (const s of str) {
    appearMap[s] = appearMap[s] > -1 ? appearMap[s] + 1 : 1;
  }
  for (const m in appearMap) {
    if (appearMap[m] === n) {
      return true;
    }
  }
  return false;
}

function getSameWords(a, b) {
  let res = '';
  for (let i = 0; i < Math.min(a.length, b.length); i++) {
    if (a[i] === b[i]) {
      res += a[i];
    }
  }
  return res;
}

function getMostSameWord(a, arr) {
  let longestS = '';
  for (const b of arr) {
    if (a === b) {
      continue;
    }
    const m = getSameWords(a, b);
    if (m.length > longestS.length) {
      longestS = m;
    }
  }
  return longestS;
}

function main() {
  const arr = str.split('\n');
  let n2 = 0;
  let n3 = 0;
  arr.forEach(s => {
    if (isStrContN(s, 2)) {
      n2++;
    }
    if (isStrContN(s, 3)) {
      n3++;
    }
  });
  console.log(n2, n3, n2 * n3);
}

function main2() {
  const arr = str.split('\n');
  for (const s of arr) {
    const correctS = getMostSameWord(s, arr);
    console.log(s, correctS, correctS.length);
  }
}

main2();
// console.log(isStrContN(samp, 2));
// console.log(getMostSameWord('aaab', ['aa', 'ab', 'aaa']));
