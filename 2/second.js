const fs = require('fs');

const res = fs.readFileSync('./data.txt', 'utf-8').split('\n')
  .map(game => {
    let maxNum = {
      red: 1,
      green: 1,
      blue: 1,
    }

    game.split(':')[1].trim().split(';').map(round =>
    round.split(',').map(pick => {
      let info = pick.trim().split(' ');

      if (Number.parseInt(info[0]) > maxNum[info[1]]) {
        maxNum[info[1]] = Number.parseInt(info[0]);
      }
    }));

    console.log(maxNum);

    return maxNum.red * maxNum.green * maxNum.blue;
  }).reduce((prev, cur) => prev + cur);

console.log(res);

