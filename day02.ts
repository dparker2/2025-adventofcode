export function main(input: string) {
  const ans = { part1: 0, part2: 0 };

  for (const match of input.matchAll(/(\d+)-(\d+)/g)) {
    const start = Number(match[1]);
    const end = Number(match[2]);
    for (let i = start; i <= end; i++) {
      const id = i.toString();
      if (id.match(/^(\d+)\1$/)) ans.part1 += i;
      if (id.match(/^(\d+)\1+$/)) ans.part2 += i;
    }
  }

  return ans;
}

if (import.meta.main) {
  console.log(main((await Bun.stdin.text()).trim()));
}
