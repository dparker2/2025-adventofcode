import { test, expect, mock } from "bun:test";
import { Grid } from "./grid";

const basic = new Grid(
  `123
456
789`
);

test("basic.forAdjacent(0, 0)", () => {
  const callback = mock();
  basic.forAdjacent(0, 0, callback);

  expect(callback).toHaveBeenCalledWith("2", 1, 0, "1");
  expect(callback).toHaveBeenCalledWith("4", 0, 1, "1");
  expect(callback).toHaveBeenCalledWith("5", 1, 1, "1");
  expect(callback).toHaveBeenCalledTimes(3);
});

test("basic.forAdjacent(1, 1)", () => {
  const callback = mock();
  basic.forAdjacent(1, 1, callback);

  expect(callback).toHaveBeenCalledWith("1", 0, 0, "5");
  expect(callback).toHaveBeenCalledWith("2", 1, 0, "5");
  expect(callback).toHaveBeenCalledWith("3", 2, 0, "5");
  expect(callback).toHaveBeenCalledWith("4", 0, 1, "5");
  expect(callback).toHaveBeenCalledWith("6", 2, 1, "5");
  expect(callback).toHaveBeenCalledWith("7", 0, 2, "5");
  expect(callback).toHaveBeenCalledWith("8", 1, 2, "5");
  expect(callback).toHaveBeenCalledWith("9", 2, 2, "5");
  expect(callback).toHaveBeenCalledTimes(8);
});

test("basic.forAdjacent(-1, -1)", () => {
  const callback = mock();
  basic.forAdjacent(-1, -1, callback);

  expect(callback).not.toHaveBeenCalled();
});
