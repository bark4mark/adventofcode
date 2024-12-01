import fs from "fs";

const input = fs.readFileSync("input.txt", "utf-8");

const lines = input.split("\n");

const first: number[] = [];
const second: number[] = [];

const numberOfAppearances = (i: number, list: number[]): number => {
  let total = 0;
  for (const j of list) {
    if (j === i) {
      total++;
    }
  }
  return total;
}

for (const line of lines) {
  const [a, b] = line.split("   ");
  first.push(Number(a));
  second.push(Number(b));
}

let totalSimilarity = 0;
for(const i of first) {
  const appearances = numberOfAppearances(i, second);
  const similarityScore = i * appearances;
  totalSimilarity += similarityScore;
}

// 29379307