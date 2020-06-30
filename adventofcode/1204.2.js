const fs = require('fs');
const moment = require('moment');
const input = fs.readFileSync('./input/1204').toString();

function day4() {
  const answerInput = input;
  const inputRows = answerInput.split('\n');

  inputRows.sort(function(a, b) {
    return (
      new Date(a.match(/[0-9]{4}.[0-9]{2}.[0-9]{2}.[0-9]{2}.[0-9]{2}/g)) -
      new Date(b.match(/[0-9]{4}.[0-9]{2}.[0-9]{2}.[0-9]{2}.[0-9]{2}/g))
    );
  });

  const guards = [];

  for (let i = 0; i < inputRows.length; i++) {
    const matchedString = inputRows[i].match(/#[0-9]+/g);

    if (matchedString !== null && matchedString !== '') {
      const guardID = parseInt(matchedString[0].split('#')[1]);

      if (
        !isNaN(guardID) &&
        guards.findIndex(item => item.id === guardID) < 0
      ) {
        guards.push({
          id: guardID,
          sleepMins: new Array(60).fill(0),
          totalMins: 0,
          bestMinute: 0,
          bestMinuteValue: 0,
        });
      }
    }
  }

  for (let i = 0; i < inputRows.length; i++) {
    const shiftStart = inputRows[i].match(/#[0-9]+ begins shift/g);
    const guardInWork = shiftStart[0].match(/[0-9]+/g);

    if (shiftStart !== null && shiftStart !== '') {
      let shiftInProgress = true;
      let inSleep = false;
      let sleepStartMinute = 0;
      let sleepEndMinute = 0;

      while (shiftInProgress) {
        i++;
        if (inputRows[i] !== undefined) {
          const checkForShiftEnd = inputRows[i].match(/#[0-9]+ begins shift/g);

          if (checkForShiftEnd !== null && checkForShiftEnd !== '') {
            shiftInProgress = false;
            i--;
          }

          if (!inSleep) {
            const sleepStart = inputRows[i].match(/:[0-9]{2}/g);

            if (sleepStart !== null && sleepStart !== '') {
              sleepStartMinute = parseInt(sleepStart[0].split(':')[1]);
            }
            inSleep = true;
          } else {
            const sleepEnd = inputRows[i].match(/:[0-9]{2}/g);

            if (sleepEnd !== null && sleepEnd !== '') {
              sleepEndMinute = parseInt(sleepEnd[0].split(':')[1]);
            }

            const guardIndex = guards.findIndex(
              item => item.id === parseInt(guardInWork)
            );
            for (let j = sleepStartMinute; j < sleepEndMinute; j++) {
              if (guards[guardIndex].sleepMins[j] === null) {
                guards[guardIndex].sleepMins[j] = 1;
              } else {
                guards[guardIndex].sleepMins[j] =
                  guards[guardIndex].sleepMins[j] + 1;
              }
            }
            inSleep = false;
          }
        } else {
          shiftInProgress = false;
        }
      }
    }
  }

  for (let i = 0; i < guards.length; i++) {
    let totalMins = 0;
    let bestMinute = 0;
    let bestMinuteValue = 0;

    for (let j = 0; j < guards[i].sleepMins.length; j++) {
      totalMins = totalMins + guards[i].sleepMins[j];
      if (guards[i].sleepMins[j] > bestMinuteValue) {
        bestMinute = j;
        bestMinuteValue = guards[i].sleepMins[j];
      }
    }
    guards[i].bestMinute = bestMinute;
    guards[i].bestMinuteValue = bestMinuteValue;
    guards[i].totalMins = totalMins;
  }

  guards.sort(function(a, b) {
    return b.bestMinuteValue - a.bestMinuteValue;
  });

  // for part one
  // guards.sort(function (a, b) {
  //     return b.bestMinuteValue - a.bestMinuteValue;
  // });

  console.log(
    guards[0].id,
    guards[0].bestMinute,
    guards[0].id * guards[0].bestMinute
  );
}
day4();
