import fs from 'fs';
const input = fs.readFileSync('input.txt', 'utf-8');
const reg = /mul(\(\d*,\d*\))/g;
let result = 0;
for (const line of input.split('\n')) {
  const match = line.match(reg);
  if (match) {
    for (let i = 0; i < match.length; i++) {
      const subMatch = match[i].match(/\((\d*),(\d*)\)/);
      if (subMatch) {
        const first = parseInt(subMatch[1]);
        const second = parseInt(subMatch[2]);
        result += first * second;
      }
    }
  }
}
console.log(result);