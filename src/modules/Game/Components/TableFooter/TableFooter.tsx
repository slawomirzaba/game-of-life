import React from "react";
import "./tableFooter.css";

interface PropsI {
  tableColumns: number;
  isPlayEnabled: boolean;
  playAction: () => void;
  executeOneIteration: () => void;
  pauseAction: () => void;
}

export const TableFooter = ({
  tableColumns,
  isPlayEnabled,
  playAction,
  executeOneIteration,
  pauseAction
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
      </td>
    </tr>
  );
};
