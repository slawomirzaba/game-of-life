import React, { RefObject, ChangeEvent } from "react";
import { times as _times } from "lodash";
import "./board.css";
import { Element } from "../Element";
import { ActiveElementsKeysI } from "../../interfaces";
import { TableFooter } from "../TableFooter";
import { getCellKey } from "../../lib";

interface PropsI {
  tableColumns: number;
  tableRows: number;
  activeElementsKeys: ActiveElementsKeysI;
  isPlayEnabled: boolean;
  isBorders: boolean;
  toggleActiveElementKey: (key: string) => void;
  playAction: () => void;
  executeOneIteration: () => void;
  pauseAction: () => void;
  clearBoard: () => void;
  onMouseEnterElement: (elementKey: string) => void;
  onMouseDownElement: (elementKey: string) => void;
  onMouseUpBoard: () => void;
  onMouseLeaveBoard: () => void;
  toggleBorders: () => void;
  saveConfiguration: () => void;
  handleUploadFile: (event: ChangeEvent<HTMLInputElement>) => void;
}

export const Board = ({
  tableColumns,
  tableRows,
  activeElementsKeys,
  isPlayEnabled,
  isBorders,
  playAction,
  executeOneIteration,
  pauseAction,
  clearBoard,
  onMouseEnterElement,
  onMouseDownElement,
  onMouseUpBoard,
  onMouseLeaveBoard,
  toggleBorders,
  saveConfiguration,
  handleUploadFile
}: PropsI) => {
  return (
    <div className="board">
      <table
        className={`board__table ${
          !isBorders ? "board__table--disabledBorders" : ""
        }`}
      >
        <tbody onMouseUp={onMouseUpBoard} onMouseLeave={onMouseLeaveBoard}>
          {_times(tableRows).map((rowIndex: number) => (
            <tr key={rowIndex}>
              {_times(tableColumns).map((columnIndex: number) => {
                const key = getCellKey(rowIndex, columnIndex);

                return (
                  <Element
                    key={key}
                    elementKey={key}
                    isActive={activeElementsKeys[key]}
                    onMouseEnter={onMouseEnterElement}
                    onMouseDown={onMouseDownElement}
                  />
                );
              })}
            </tr>
          ))}
        </tbody>
        <tfoot>
          <TableFooter
            tableColumns={tableColumns}
            playAction={playAction}
            executeOneIteration={executeOneIteration}
            pauseAction={pauseAction}
            isPlayEnabled={isPlayEnabled}
            clearBoard={clearBoard}
            toggleBorders={toggleBorders}
            saveConfiguration={saveConfiguration}
            handleUploadFile={handleUploadFile}
          />
        </tfoot>
      </table>
    </div>
  );
};
