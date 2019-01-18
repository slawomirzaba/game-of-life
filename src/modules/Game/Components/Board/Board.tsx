import React from "react";
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
  toggleActiveElementKey: (key: string) => void;
  playAction: () => void;
  executeOneIteration: () => void;
  pauseAction: () => void;
}

export const Board = ({
  tableColumns,
  tableRows,
  activeElementsKeys,
  toggleActiveElementKey,
  playAction,
  executeOneIteration,
  pauseAction,
  isPlayEnabled
}: PropsI) => {
  return (
    <div className="board">
      <table className="board__table">
        <tbody>
          {_times(tableRows).map((rowIndex: number) => (
            <tr key={rowIndex}>
              {_times(tableColumns).map((columnIndex: number) => {
                const key = getCellKey(rowIndex, columnIndex);

                return (
                  <Element
                    key={key}
                    elementKey={key}
                    isActive={activeElementsKeys[key]}
                    toggleActiveElementKey={toggleActiveElementKey}
                  />
                );
              })}
            </tr>
          ))}
          <TableFooter
            tableColumns={tableColumns}
            playAction={playAction}
            executeOneIteration={executeOneIteration}
            pauseAction={pauseAction}
            isPlayEnabled={isPlayEnabled}
          />
        </tbody>
      </table>
    </div>
  );
};
