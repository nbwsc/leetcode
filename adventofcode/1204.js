const fs = require('fs');
const input = fs.readFileSync('./input/1204').toString();

let lastGuardID = '';
let lastSleepState = false;
let now;
let guardSleepMap = {};
let lastSleepMinute = '';
const guardMaxSleepMap = {};

function toCompare(str) {
  return +str
    .slice(1, 17)
    .split(/\D/)
    .join('');
}

function parseObj(str) {
  const date = str.slice(6, 11);
  let min = +str.slice(15, 17);
  let hour = +str.slice(12, 14);
  const id = str.includes('shift') ? str.slice(26, -13) : '';
  let state = str.includes('shift') ? 'shift' : '';
  if (str.includes('asleep')) {
    state = 'asleep';
  } else if (str.includes('wakes')) {
    state = 'wake';
  }
  return {
    date,
    hour,
    min,
    id,
    state
  };
}

function getFormatLog() {
  const rows = input
    .split('\n')
    .filter(o => o.length > 5)
    .sort((a, b) => {
      return toCompare(a) - toCompare(b);
    })
    .map(str => parseObj(str));

  return rows;
}

// function

function main() {
  const rows = getFormatLog();
  fs.writeFileSync('output1204.json', JSON.stringify(rows));
  lastGuardID = rows[0].id;
  lastSleepState = '';
  rows.forEach((row, index) => {
    // if (row.id && rows[index - 1] && rows[index - 1].state === 'wake') {
    //   console.log(rows[index - 1]);
    //   console.log(row);
    // }
    let id = row.id ? row.id : lastGuardID;
    lastGuardID = id;

    if (row.state === 'asleep') {
      lastSleepMinute = row.min;
    } else if (row.state === 'wake') {
      const sleepTime = row.min - lastSleepMinute - 1;
      // console.log(id, sleepTime);
      if (!guardSleepMap[id]) {
        guardSleepMap[id] = sleepTime + 1;
      } else {
        guardSleepMap[id] += sleepTime + 1;
      }
      guardMaxSleepMap[id] = Math.max(guardMaxSleepMap[id] || 0, sleepTime);
      if (id === '3299' && sleepTime === 53) {
        console.log(rows[index - 3]);
        console.log(rows[index - 2]);
        console.log(rows[index - 1]);
        console.log(row);
        console.log(rows[index + 1]);
        console.log(rows[index + 2]);
      }
    }
    lastSleepState = row.state === 'asleep';
  });

  let max = 0;
  for (const id in guardSleepMap) {
    if (guardSleepMap[id] > max) {
      max = guardSleepMap[id];
      console.log(id, guardMaxSleepMap[id]);
    }
  }
  console.log(guardSleepMap);
  console.log(guardMaxSleepMap);
}

main();
