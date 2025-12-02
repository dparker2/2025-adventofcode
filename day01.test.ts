import { $ } from "bun";
import { test, expect } from "bun:test";

const output = await $`bun run day01.ts < ${Buffer.from(`
L68
L30
R48
L5
R60
L55
L1
L99
R14
L82
`)}`.text();

test("Part 1", () => {
  expect(output).toInclude("Part 1: 3");
});

test("Part 2", () => {
  expect(output).toInclude("Part 2: 6");
});
