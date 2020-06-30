const rMap = {};
let sum = 0;
function listIt(a) {
  rMap[sum] = true;
  const arr = a.split('\n');
  for (const s of arr) {
    sum += +s;
    if (rMap[sum]) {
      console.log('hi', sum);
      return sum;
    } else {
      rMap[sum] = true;
    }
  }
  listIt(a);
}
