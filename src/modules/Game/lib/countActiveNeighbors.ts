import { ActiveElementsKeysI } from "../interfaces";
import { getCellKey } from "./getCellKey";

export const countActiveNeighbors = (
  cellKey: string,
  rowsNumber: number,
  columnsNumber: number,
  activeElementsKeys: ActiveElementsKeysI
): number => {
  let neighbours = 0;
  const [cellRowNumber, cellColumnNumber] = cellKey
    .split(",")
    .map((element: string) => parseInt(element, 10));

  const firstRowToCheck = Math.max(cellRowNumber - 1, 0);
  const lastRowToCheck = Math.min(cellRowNumber + 1, rowsNumber);
  const firstColumnToCheck = Math.max(cellColumnNumber - 1, 0);
  const lastColumnToCheck = Math.min(cellColumnNumber + 1, columnsNumber);

  for (let i = firstRowToCheck; i <= lastRowToCheck; ++i) {
    for (let j = firstColumnToCheck; j <= lastColumnToCheck; ++j) {
      const key = getCellKey(i, j);
      if (key !== cellKey && activeElementsKeys[key]) neighbours++;
    }
  }

  return neighbours;
};
