const fs = require('fs');

const res = fs.readFileSync('./data.txt', 'utf-8').split('\n').map(card => card.split(':')[1])
  .map(numbers => {
    const nums = numbers.split('|');
    console.log(nums);

    const wins = new Set(nums[0].split(' ').map(n => Number.parseInt(n.trim())).filter(n => Number.isNaN(n) === false));
    const num = new Set(nums[1].split(' ').map(n => Number.parseInt(n.trim())).filter(n => Number.isNaN(n) === false));

    console.log(wins)

    let count = 0;

    for (const n of num.values()) {
      if (wins.has(n)) {
        count++;
        console.log(count);
      }
    }

    return count === 0 ? 0 : Math.pow(2, count - 1);
  }).reduce((prev, cur) => prev + cur);

console.log(res);