export function main(input: string) {
  const ans = { part1: 0, part2: 0 };
  const ranges: [number, number][] = [];
  const ids: number[] = [];
  let idSection = false;

  input.split("\n").forEach((line) => {
    if (idSection) ids.push(Number(line));
    else if (line === "") idSection = true;
    else {
      const nums = line.split("-");
      ranges.push([Number(nums[0]), Number(nums[1])]);
    }
  });

  // Make ranges non-overlapping
  ranges.sort((a, b) => a[0] - b[0]);
  const rangesNonOverlap = ranges.reduce<[number, number][]>((arr, range) => {
    const prev = arr.at(-1);
    if (!prev || prev[1] < range[0]) arr.push(range);
    else if (prev && prev[1] < range[1]) prev[1] = range[1];
    return arr;
  }, []);

  // Do the things
  for (const [min, max] of rangesNonOverlap) {
    for (const id of ids) {
      if (min <= id && id <= max) ans.part1++;
    }
    ans.part2 += max - min + 1;
  }

  return ans;
}

if (import.meta.main) {
  console.log(main((await Bun.stdin.text()).trim()));
}
