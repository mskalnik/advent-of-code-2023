const fs = require("node:fs");
const path = require("node:path");

fs.readFile(path.resolve(__dirname, "input.txt"), "utf-8", (err, data) => {
  if (err) {
    console.error(err);
    return;
  }

  const result = data.split("\n").reduce((acc, curr) => {
    const numbers = [];

    Array.from(curr).forEach((it) => {
      if (!isNaN(it)) {
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
