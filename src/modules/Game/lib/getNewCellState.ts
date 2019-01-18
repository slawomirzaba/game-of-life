import { ActiveElementsKeysI } from "../interfaces";
import { countActiveNeighbors } from ".";

export const getNewCellState = (
  cellKey: string,
  rowsNumber: number,
  columnsNumber: number,
  activeElementsKeys: ActiveElementsKeysI
): boolean => {
  const isActiveCell = activeElementsKeys[cellKey];
  const neighborsCount = countActiveNeighbors(
    cellKey,
    rowsNumber,
    columnsNumber,
    activeElementsKeys
  );

  if (isActiveCell && neighborsCount < 2) return false;
  if (isActiveCell && neighborsCount > 3) return false;
  if (isActiveCell && (neighborsCount === 2 || neighborsCount === 3))
    return true;
  if (!isActiveCell && neighborsCount === 3) return true;

  return false;
};
