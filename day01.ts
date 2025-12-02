import { mod } from "./lib/mod.ts";

export function main(input: string) {
  const ans = input
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

  return { part1: ans.pw1, part2: ans.pw2 };
}

if (import.meta.main) {
  console.log(main((await Bun.stdin.text()).trim()));
}
