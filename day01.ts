import { mod } from "./lib/mod.ts";

const input = (await Bun.stdin.text()).trim();

const output = input
  .replaceAll("L", "-")
  .replaceAll("R", "")
  .split("\n")
  .map(Number)
  .reduce(
    (acc, num) => {
      // unga bunga
      let clicks;
      const step = num < 0 ? -1 : 1;
      for (clicks = 0; clicks !== num; clicks += step) {
        acc.pointer = mod(acc.pointer + step, 100);
        acc.pw2 += Number(acc.pointer === 0);
      }
      acc.pw1 += Number(acc.pointer === 0);

      return acc;
    },
    { pw1: 0, pw2: 0, pointer: 50 }
  );

console.log(`Part 1: ${output.pw1}`);
console.log(`Part 2: ${output.pw2}`);
