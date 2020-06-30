const fs = require('fs');
const input = fs.readFileSync('./input/1203').toString();

const matrix = [];
const size = 2000;

function initMatrix() {
  for (let i = 0; i < size; i++) {
    matrix[i] = [];
    for (let j = 0; j < size; j++) {
      matrix[i][j] = '.';
    }
  }
}

function addClaim(claimStr) {
  const m = claimStr.split(' ');
  if (!m[2]) return;
  const id = m[0].slice(1);
  const pos = m[2].split(',').map(m => +m.replace(':', ''));
  const claimSize = m[3].split('x').map(m => +m);
  let overlapped = false;
  for (let i = pos[0]; i < claimSize[0] + pos[0]; i++) {
    for (let j = pos[1]; j < claimSize[1] + pos[1]; j++) {
      if (matrix[j][i] === '#') {
        overlapped = true;
      }
      matrix[j][i] = matrix[j][i] === '.' ? id : '#';
    }
  }
  if (!overlapped) {
    console.log('unoverlapped', id);
  }
}

function logMatrix() {
  let count = 0;
  for (let i = 0; i < size; i++) {
    // console.log(matrix[i].join('\t'));
    // console.log('\n');
    for (let j = 0; j < size; j++) {
      if (matrix[i][j] === '#') {
        count++;
      }
    }
  }
  console.log(count);
}

function main() {
  initMatrix();
  // addClaim('#1 @ 1,3: 4x4');
  // addClaim('#2 @ 3,1: 4x4');
  // addClaim('#3 @ 5,5: 2x2');
  const cliamArr = input.split('\n');
  console.log(cliamArr.slice(0, 2));
  for (const claim of cliamArr) {
    addClaim(claim);
  }
  console.log('=====');
  for (const claim of cliamArr) {
    addClaim(claim);
  }
  logMatrix();
  // for(const siz)
}
main();
