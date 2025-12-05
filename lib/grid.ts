export class Grid {
  cells: string[][];
  nrows: number;
  ncols: number;

  constructor(grid: string) {
    this.cells = grid.split("\n").map((line) => line.split(""));
    this.nrows = this.cells.length;
    this.ncols = this.cells[0]?.length || 0;
  }

  set(x: number, y: number, val: string) {
    if (this.cells[y] === undefined) return;
    this.cells[y][x] = val;
  }

  at(x: number, y: number) {
    return this.cells[y]?.[x];
  }

  forAdjacent(
    x: number,
    y: number,
    callback: (adj: string, x: number, y: number, cell: string) => void
  ) {
    const cell = this.cells[y]?.[x];
    if (cell === undefined) return;

    for (let i = -1; i <= 1; i++) {
      for (let j = -1; j <= 1; j++) {
        if (i === 0 && j === 0) continue;
        const adj = this.cells[y - i]?.[x - j];
        if (adj) callback(adj, x - j, y - i, cell);
      }
    }
  }

  log() {
    console.log("%d x %d", this.ncols, this.nrows);
    console.log(this.cells.map((row) => row.join("")).join("\n"));
    console.log();
  }
}
