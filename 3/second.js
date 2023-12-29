const fs = require('fs');

function getNumber(numList, index) {
  for (const num of numList) {
    if (num[1] <= index && index <= num[2]) {
      return num;
    }
  }

  return [-1];
}

function numEqual(num, number) {
  if (num[0] == 0) {
    return;
  }

  return num[1] === number[1] && num[2] === number[2];
}

function contains(list, item) {
  for (const i of list) {
    if (numEqual(i, item)) {
      return true;
    }
  }

  return false;
}

const numRegex = /[0-9]+/gi
const symRegex = /[^.^0-9^\n]/gi

const schematic = fs.readFileSync('./data.txt', 'utf-8');

const numMatches = schematic.matchAll(numRegex);
const symMatches = schematic.matchAll(symRegex);

let numList = [];
const symList = [];

for (const match of numMatches) numList.push([Number.parseInt(match[0]), match.index, match.index + match[0].length - 1]);
for (const match of symMatches) symList.push(match.index);

const lineLength = schematic.indexOf('\n') + 1;

let res = 0;

for (const sym of symList) {
  const index = sym
  const newList = [];

  let directions = [-lineLength, 0, lineLength];

  for (const direction of directions) {
    for (let i = -1; i < 2; i++) {
      const num = getNumber(numList, index + direction + i);

      if (num[0] === -1) continue;
      if (contains(newList, num)) continue;

      newList.push(num);


    }
  }

  if (newList.length !== 2) continue;

  console.log(newList);
  console.log(res);

  res += newList[0][0] * newList[1][0];
}

console.log(res);