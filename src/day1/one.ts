import * as fs from "node:fs";

fs.readFile("./input/day1.txt", "utf-8", (err, data) => {
  if (err) {
    console.error(err);
    return;
  }

  const result = data.split("\n").reduce((acc, curr) => {
    const numbers: string[] = [];

    Array.from(curr).forEach((it) => {
      if (!isNaN(Number(it))) {
        numbers.push(it);
      }
    });

    const digits =
      numbers.length > 1
        ? `${numbers[0]}${numbers[numbers.length - 1]}`
        : `${numbers[0]}${numbers[0]}`;

    acc += Number(digits);

    return acc;
  }, 0);

  console.log(`Final result is: ${result}`);
});
