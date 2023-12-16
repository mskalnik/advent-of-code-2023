import * as fs from "node:fs";

enum Color {
  Red = "red",
  Green = "green",
  Blue = "blue",
}

enum Max {
  Red = 12,
  Green = 13,
  Blue = 14,
}

type Result = {
  [Color.Red]: number;
  [Color.Green]: number;
  [Color.Blue]: number;
};

type Game = {
  id: number;
  results: Result[];
};

const getNumber = (input: string): number => {
  const result = input.match(/\d+/);
  return result ? Number(result[0]) : 0;
};

const getResults = (input: string[]): Result[] => {
  return input.flatMap((curr) =>
    curr.split(",").map((it) => ({
      [Color.Red]: it.includes(Color.Red) ? getNumber(it) : 0,
      [Color.Green]: it.includes(Color.Green) ? getNumber(it) : 0,
      [Color.Blue]: it.includes(Color.Blue) ? getNumber(it) : 0,
    })),
  );
};

const parseGame = (input: string): Game => {
  const [firstPart, secondPart] = input.split(":");
  const games = secondPart.split(";");
  return {
    id: getNumber(firstPart),
    results: getResults(games),
  };
};

const isValidGame = (game: Game): boolean => {
  return game.results.every(
    (result) =>
      result[Color.Red] <= Max.Red &&
      result[Color.Green] <= Max.Green &&
      result[Color.Blue] <= Max.Blue,
  );
};

fs.readFile("./input/day2.txt", "utf-8", (err, data) => {
  if (err) {
    console.error(err);
    return;
  }

  const result = data.split("\n").reduce((acc, curr) => {
    const game = parseGame(curr);

    if (isValidGame(game)) {
      acc += game.id;
    }

    return acc;
  }, 0);

  console.log(`Final result is: ${result}`);
});
