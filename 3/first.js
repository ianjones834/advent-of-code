const fs = require('fs');

function isSymbol(input) {
  return Number.isInteger(Number.parseInt(input)) == false &&  input != '.';
}

function matchNumber(input) {

}

const schematic = fs.readFileSync('./test.txt', 'utf-8').split('\n').map(line => [line.split('')]);

for (let i = 0; i < schematic.length; i++) {
  for (let j = 0; j < schematic.length; j++) {
    if (isSymbol(schematic[i][j])) {

    }
  }
}