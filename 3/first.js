const fs = require('fs');

function getNumber(numList, index) {
  for (const num of numList) {
    if (num[1] <= index && index <= num[2]) {
      return num;
    }
  }

  return [0];
}

function numNotEqual(num, number) {
  if (num[0] == 0) {
    return;
  }

  if (num[1] == number[1] && num[2] == number[2]) {
    return false;
  }

  return true;
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

  let directions = [-lineLength, 0, lineLength];

  for (const direction of directions) {
    for (let i = -1; i < 2; i++) {
      const num = getNumber(numList, index + direction + i);
      console.log(num);

      res += num[0];

      console.log(num, res, index + direction + i);

      numList = numList.filter(n => numNotEqual(n, num));
    }
  }
}

console.log(res);