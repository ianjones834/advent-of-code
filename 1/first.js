const fs = require('fs');

let res = fs.readFileSync('./data.txt', 'utf-8').split('\n').map(line => {
  const rev = line.split('').reverse().join('');
  const first = line.charAt(line.search(/[0-9]/));
  const second = rev.charAt(rev.search(/[0-9]/));

  return Number.parseInt(first + second);
}).reduce((pre, cur) => pre + cur);

console.log(res);