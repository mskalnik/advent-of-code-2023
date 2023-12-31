import * as fs from "node:fs";

const words: Record<string, string> = {
  one: "1",
  two: "2",
  three: "3",
  four: "4",
  five: "5",
  six: "6",
  seven: "7",
  eight: "8",
  nine: "9",
};

fs.readFile("./input/day1.txt", "utf-8", (err, data) => {
  if (err) {
    console.error(err);
    return;
  }

  const result = data.split("\n").reduce((acc, curr) => {
    const numbers: string[] = [];

    for (let i = 0; i < curr.length; i++) {
      const tmp = curr.slice(i, curr.length);

      if (!isNaN(Number(tmp[0]))) {
        numbers.push(tmp[0]);
      }

      Object.keys(words).forEach((word) => {
        if (tmp.startsWith(word)) {
          numbers.push(words[word]);
        }
      });
    }

    const digits =
      numbers.length > 1
        ? `${numbers[0]}${numbers[numbers.length - 1]}`
        : `${numbers[0]}${numbers[0]}`;

    acc += Number(digits);

    return acc;
  }, 0);

  console.log(`Final result is: ${result}`);
});
