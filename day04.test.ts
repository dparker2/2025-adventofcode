import { test, expect } from "bun:test";
import { main } from "./day04";

const out = main(
  `..@@.@@@@.
@@@.@.@.@@
@@@@@.@.@@
@.@@@@..@.
@@.@@@@.@@
.@@@@@@@.@
.@.@.@.@@@
@.@@@.@@@@
.@@@@@@@@.
@.@.@@@.@.`
);

test("Part 1", () => {
  expect(out.part1).toBe(13);
});

test("Part 2", () => {
  expect(out.part2).toBe(43);
});
