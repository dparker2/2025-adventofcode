import { test, expect } from "bun:test";
import { main } from "./day01";

const out = main(
  `L68
L30
R48
L5
R60
L55
L1
L99
R14
L82`
);

test("Part 1", () => {
  expect(out.part1).toBe(3);
});

test("Part 2", () => {
  expect(out.part2).toBe(6);
});
