import React from "react";
import "./tableFooter.css";

interface PropsI {
  tableColumns: number;
  isPlayEnabled: boolean;
  playAction: () => void;
  executeOneIteration: () => void;
  pauseAction: () => void;
  clearBoard: () => void;
  toggleBorders: () => void;
}

export const TableFooter = ({
  tableColumns,
  isPlayEnabled,
  playAction,
  executeOneIteration,
  pauseAction,
  clearBoard,
  toggleBorders
}: PropsI) => {
  return (
    <tr>
      <td colSpan={tableColumns} className="board__tableFooter">
        <button onClick={playAction} disabled={isPlayEnabled}>
          <i className="fas fa-play" />
        </button>
        <button onClick={pauseAction} disabled={!isPlayEnabled}>
          <i className="fas fa-pause" />
        </button>
        <button onClick={executeOneIteration} disabled={isPlayEnabled}>
          <i className="fas fa-redo" />
        </button>
        <button onClick={clearBoard} disabled={isPlayEnabled}>
          <i className="fas fa-trash" />
        </button>
        <button onClick={toggleBorders}>
          <i className="fas fa-th" />
        </button>
      </td>
    </tr>
  );
};
