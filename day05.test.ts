import { test, expect } from "bun:test";
import { main } from "./day05";

const out = main(
  `3-5
10-14
16-20
12-18

1
5
8
11
17
32`
);

test("Part 1", () => {
  expect(out.part1).toBe(3);
});

test("Part 2", () => {
  expect(out.part2).toBe(14);
});
