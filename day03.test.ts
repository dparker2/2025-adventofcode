import { test, expect } from "bun:test";
import { largestNum, main } from "./day03";

const out = main(
  `987654321111111
811111111111119
234234234234278
818181911112111`
);

test("largestNum(987654321111111, 2)", () => {
  const digits = "987654321111111".split("").map(Number);
  expect(largestNum(digits, 2)).toBe(98);
});

test("largestNum(987654321111111, 12)", () => {
  const digits = "987654321111111".split("").map(Number);
  expect(largestNum(digits, 12)).toBe(987654321111);
});

test("largestNum(818181911112111, 2)", () => {
  const digits = "818181911112111".split("").map(Number);
  expect(largestNum(digits, 2)).toBe(92);
});

test("largestNum(818181911112111, 12)", () => {
  const digits = "818181911112111".split("").map(Number);
  expect(largestNum(digits, 12)).toBe(888911112111);
});

test("Part 1", () => {
  expect(out.part1).toBe(357);
});

test("Part 2", () => {
  expect(out.part2).toBe(3121910778619);
});
