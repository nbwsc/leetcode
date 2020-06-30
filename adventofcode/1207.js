const fs = require('fs');
const input = fs
  .readFileSync('input/1207')
  .toString()
  .trim();

function main() {
  const rs = parseInput(`Step C must be finished before step A can begin.
  Step C must be finished before step F can begin.
  Step A must be finished before step B can begin.
  Step A must be finished before step D can begin.
  Step B must be finished before step E can begin.
  Step D must be finished before step E can begin.
  Step F must be finished before step E can begin.`);
  // const rs = parseInput(input);
  const charSet = new Set();
  const n1Arr = [];
  const n2Arr = [];
  const target = [];
  const orderMap = {};
  rs.forEach((r, i) => {
    // n1Arr.push(r.n1);
    // n2Arr.push(r.n2);
    // charSet.add(r.n1);
    // charSet.add(r.n2);
    // const i1 = target.indexOf(r.n1);
    // const i2 = target.indexOf(r.n2);
    if (i1 < 0 && i2 < 0) {
      target.push(r.n1, r.n2);
    } else if (i1 >= 0 && i2 < 0) {
      target.push(r.n2);
      target = [
        ...target.slice(0, i1),
        r.n1,
        ...target.slice(i1 + 1).sort((a, b) => a.charCodeAt() - b.charCodeAt()),
      ];
    } else if (i2 >= 0 && i1 < 0) {
      target.unshift(r.n1);
      target = [
        ...target.slice(0, i2).sort((a, b) => a.charCodeAt() - b.charCodeAt()),
        r.n2,
        ...target.slice(i2 + 1),
      ];
    } else if (i1 >= 0 && i2 >= 0 && i1 > i2) {
    }
  });
  // find the first element
  const firstElement = 'C';
  // n1Arr.forEach(n1 => {
  //   if (!n2Arr.includes(n1)) {
  //     console.log(n1);
  //   }
  // });

  const chars = Array.from(charSet);
  console.log(chars);
  // for(const row in )
}

function findNext(thisChar, rows) {
  const r = [];
  rows.forEach(row => {
    if (row.n2 === thisChar) {
      r.push(rows.n1);
    }
  });
  return n1;
}

function switchToBefore(n, arr) {
  if (n < 1) {
    return;
  }
  const temp = arr[n - 1];
  arr[n - 1] = arr[n];
  arr[n] = temp;
}

function parseInput(input) {
  const rows = input.split('\n').map(m => m.trim());
  // const r = rows[0];
  // console.log(rows[1], rows[1][5], rows[1][36]);
  return rows.map(row => ({
    n1: row[5],
    n2: row[36],
  }));
}

main();
