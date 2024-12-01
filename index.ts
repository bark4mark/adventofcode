import fs from "fs";

const input = fs.readFileSync("input.txt", "utf-8");

const lines = input.split("\n");

const first: number[] = [];
const second: number[] = [];

for (const line of lines) {
  const [a, b] = line.split("   ");
  first.push(Number(a));
  second.push(Number(b));
}

const sorter = (a: number, b: number) => a - b;

first.sort(sorter);
second.sort(sorter);

const distances = first.map((a, i) => Math.abs(a - second[i])).reduce((a, b) => a + b);
// 3246517