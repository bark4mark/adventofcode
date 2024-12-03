import fs from "fs";
const safe = (line: string) => {
  let isSafe = true;
  const levels = line.split(" ").map((element) => Number(element));
  let currentLevel = 1;
  let isIncreasing;
  while (currentLevel < levels.length) {
    const difference = levels[currentLevel] - levels[currentLevel - 1];
    if (isIncreasing === undefined) {
      isIncreasing = difference > 0;
    }
    if (isIncreasing === true && difference < 0) {
      isSafe = false;
    }

    if (isIncreasing === false && difference > 0) {
      isSafe = false;
    }

    if (Math.abs(difference) > 3 || Math.abs(difference) === 0) {
      isSafe = false;
    }
    currentLevel++;
  }
  return isSafe;
};

const input = fs.readFileSync("input.txt", "utf8");

const lines = input.split("\n");

const safeCount = lines.filter(line => {
  let isSafe = safe(line);
  if (!isSafe) {
    const levels = line.split(" ");
    for(let i = 0; i < levels.length; i++) {
      const withRemoved = levels.map((element, index) => {
        if (index === i) {
          return undefined;
        }
        return element;
      }).filter(element => element !== undefined);
      isSafe = safe(withRemoved.join(" "));
      if (isSafe) {
        break;
      }
    }
  }
  return isSafe;
}).length;
console.log(safeCount);
// 520
