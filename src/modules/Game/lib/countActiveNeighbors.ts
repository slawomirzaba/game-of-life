import { ActiveElementsKeysI } from "../interfaces";
import { getCellKey } from "./getCellKey";

export const countActiveNeighbors = (
  cellKey: string,
  activeElementsKeys: ActiveElementsKeysI
): number => {
  let neighbours = 0;
  const [cellRowNumber, cellColumnNumber] = cellKey
    .split(",")
    .map((element: string) => parseInt(element, 10));

  for (let i = cellRowNumber - 1; i <= cellRowNumber + 1; ++i) {
    for (let j = cellColumnNumber - 1; j <= cellColumnNumber + 1; ++j) {
      const key = getCellKey(i, j);
      if (key !== cellKey && activeElementsKeys[key]) neighbours++;
    }
  }

  return neighbours;
};
