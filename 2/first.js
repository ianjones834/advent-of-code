const fs = require('fs');

const maxColor = {
  red: 12,
  green: 13,
  blue: 14,
}

const validGames = fs.readFileSync('./data.txt', 'utf-8').split('\n')
  .map(game => game.split(':')[1].trim().split(';').map(round =>
    round.split(',').map(pick => {
      let info = pick.trim().split(' ');
      return info[0] <= maxColor[info[1]];
    }).reduce((prev, cur) => prev && cur)).reduce((prev, cur) => prev && cur));

let res = 0;

for (let i = 0; i < validGames.length; i++) {
  if (validGames[i]) {
    res += i + 1;
  }
}

console.log(res);