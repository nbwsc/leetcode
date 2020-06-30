const fs = require('fs');
const input = fs
  .readFileSync('input/1206')
  .toString()
  .trim();
// const input = `1, 1
// 1, 6
// 8, 3
// 3, 4
// 5, 5
// 8, 9`;

function getDist(x, y, point) {
  return Math.abs(x - point[0]) + Math.abs(y - point[1]);
}

const points = input.split('\n').map(row => row.split(', ').map(s => +s));

let minX = Infinity;
let minY = Infinity;
let maxX = -Infinity;
let maxY = -Infinity;

for (const p of points) {
  if (p[0] < minX) {
    minX = p[0];
  }
  if (p[0] > maxX) {
    maxX = p[0];
  }
  if (p[1] < minY) {
    minY = p[1];
  }
  if (p[1] > maxY) {
    maxY = p[1];
  }
}
const map = [];
const limit = 10000;
let part2count = 0;
for (let i = minX - 10; i < maxX + 10; i++) {
  map[i] = [];
  for (let j = minY - 10; j < maxY + 10; j++) {
    // getDist();
    let minDist = Infinity;
    let secondDist = Infinity;
    let tag;
    let distSum = 0;
    for (const p of points) {
      const dist = getDist(i, j, p);
      distSum += dist;
      if (dist < minDist) {
        tag = p.join();
        secondDist = minDist;
        minDist = dist;
      } else if (dist < secondDist) {
        secondDist = dist;
      }
    }
    if (distSum < limit) {
      part2count++;
    }
    map[i][j] = minDist === secondDist ? '.' : tag;
  }
}

fs.writeFileSync('output1206.2', JSON.stringify(map));

const borderPoints = new Set();
map[minX - 10].forEach(t => borderPoints.add(t));
map[maxX + 9].forEach(t => borderPoints.add(t));
map.forEach(col => {
  borderPoints.add(col[minY]);
  borderPoints.add(col[maxY + 9]);
});

const areaMap = {};
for (let i = minX - 10; i < maxX + 10; i++) {
  for (let j = minY - 10; j < maxY + 10; j++) {
    t = map[i][j];
    if (!borderPoints.has(t)) {
      areaMap[t] = areaMap[t] ? areaMap[t] + 1 : 1;
    }
  }
}
console.log(
  Object.keys(areaMap)
    .sort((a, b) => {
      return areaMap[a] - areaMap[b];
    })
    .map(m => areaMap[m])
);
// console.log(map);
console.log('part 2 ', part2count);
