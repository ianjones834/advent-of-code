const fs = require('fs');

function digitValue(input) {
  if (Number.isInteger(Number.parseInt(input))) {
    return input;
  }
  else {
    return wordToNum[input];
  }
}

const wordToNum = {
  one: '1',
  two: '2',
  three: '3',
  four: '4',
  five: '5',
  six: '6',
  seven: '7',
  eight: '8',
  nine: '9',
}

const regEx = /[1-9]|one|two|three|four|five|six|seven|eight|nine/g

let res = fs.readFileSync('./data.txt', 'utf-8').split('\n').map(line => {
  const matches = line.trim().matchAll(regEx);
  let matchArr = [];

  for (const match of matches) {
    matchArr.push(match[0].trim());
  }

  let first = digitValue(matchArr[0]);
  let second = digitValue(matchArr[matchArr.length - 1]);

  return Number.parseInt(first + second);
}).reduce((pre, cur) => pre + cur);

console.log(res);