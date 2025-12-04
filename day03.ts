export function largestNum(digits: number[], ndigits: number): number {
  if (ndigits <= 1) return Math.max(...digits);

  const max = Math.max(...digits.slice(0, 1 - ndigits));
  const idx = digits.indexOf(max);

  return (
    10 ** (ndigits - 1) * max + largestNum(digits.slice(idx + 1), ndigits - 1)
  );
}

export function main(input: string) {
  return input
    .split("\n")
    .map((line) => line.split("").map(Number))
    .reduce(
      (ans, bank) => {
        ans.part1 += largestNum(bank, 2);
        ans.part2 += largestNum(bank, 12);
        return ans;
      },
      { part1: 0, part2: 0 }
    );
}

if (import.meta.main) {
  console.log(main((await Bun.stdin.text()).trim()));
}
