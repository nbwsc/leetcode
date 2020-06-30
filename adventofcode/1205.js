const fs = require('fs');
const input = fs.readFileSync('input/1205').toString();
const caseDiff = 'a'.charCodeAt() - 'A'.charCodeAt();

function scanStr(str) {
  // console.log(str.join(''));
  // fs.writeFileSync('output1205.4', str.join(''));
  let gflg = false;
  while (gflg === false) {
    let flg = false;
    for (let i = 0; i < str.length - 1; i++) {
      const thisChar = str[i];
      const nextChar = str[i + 1];
      if (
        Math.abs(thisChar.charCodeAt() - nextChar.charCodeAt()) === caseDiff
      ) {
        flg = true;
        str.splice(i, 2);
        // 递归不好 用while就行
        // scanStr(str);
        break;
      }
    }
    if (!flg) {
      gflg = true;
    }
  }
  console.log(str.length);
  return str.length;
}

function main() {
  // scanStr(Array.from('dabAcCaCBAcCcaDA'));
  // scanStr(Array.from(input));

  let start = 'A'.charCodeAt();
  let min = Infinity;
  const charMap = {};
  console.log(input.length);
  for (let i = 0; i < 26; i++) {
    const char = String.fromCharCode(start + i);
    const char2 = String.fromCharCode(start + i + caseDiff);
    let copy = input;
    copy = copy.replace(new RegExp(char, 'g'), '');
    copy = copy.replace(new RegExp(char2, 'g'), '');
    console.log('remove ', char, char2, copy.length);
    const len = scanStr(Array.from(copy));
    if (len < min) {
      console.log('min', char, len);
      min = len;
    }
  }
}

main();
