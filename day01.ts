import { mod } from "./lib/mod.ts";

const input = (await Bun.stdin.text()).trim();

const output = input
  .replaceAll("L", "-")
  .replaceAll("R", "")
  .split("\n")
  .map(Number)
  .reduce(
    (prev, num) => {
      const clicks = prev.pointer + num;
      const pointer = mod(clicks, 100);
      const password1 = prev.password1 + Number(pointer === 0);
      const password2 = 0; // TODO

      return {
        password1,
        password2,
        pointer,
      };
    },
    { password1: 0, password2: 0, pointer: 50 }
  );

console.log(`Part 1: ${output.password1}`);
console.log(`Part 2: ${output.password2}`);
