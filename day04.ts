import { Grid } from "./lib/grid";

function adjacentPapers(grid: Grid, x: number, y: number): [number, number][] {
  const arr: [number, number][] = [];
  grid.forAdjacent(x, y, (adj, x2, y2) => {
    if (adj === "@") arr.push([x2, y2]);
  });
  return arr;
}

export function main(input: string) {
  const ans = { part1: 0, part2: 0 };
  const p1grid = new Grid(input);
  const p2grid = new Grid(input);

  for (let i = 0; i < p1grid.ncols; i++) {
    for (let j = 0; j < p1grid.nrows; j++) {
      if (p1grid.at(i, j) !== "@") continue;

      if (adjacentPapers(p1grid, i, j).length < 4) {
        ans.part1++;
      }

      const candidates: [number, number][] = [[i, j]];
      while (candidates.length > 0) {
        const [curri, currj] = candidates.pop()!;
        if (p2grid.at(curri, currj) !== "@") continue;

        const papers = adjacentPapers(p2grid, curri, currj);
        if (papers.length < 4) {
          ans.part2++;
          p2grid.set(curri, currj, "x");
          candidates.push(...papers);
        }
      }
    }
  }

  return ans;
}

if (import.meta.main) {
  console.log(main((await Bun.stdin.text()).trim()));
}
