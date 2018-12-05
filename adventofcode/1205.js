const fs = require('fs');
const input = fs.readFileSync('output1205.3').toString();
const caseDiff = 'a'.charCodeAt() - 'A'.charCodeAt();
function scanStr(str) {
  console.log(str.join(''));
  // fs.writeFileSync('output1205.4', str.join(''));
  let flg = false;
  for (let i = 0; i < str.length - 1; i++) {
    const thisChar = str[i];
    const nextChar = str[i + 1];
    if (Math.abs(thisChar.charCodeAt() - nextChar.charCodeAt()) === caseDiff) {
      flg = true;
      str.splice(i, 2);
      // 递归不好 用while就行
      scanStr(str);
      break;
    }
  }
  if (!flg) {
    console.log(str.length);
  }
}

function main() {
  // scanStr(Array.from('dabAcCaCBAcCcaDA'));
  scanStr(Array.from(input));
}

main();
