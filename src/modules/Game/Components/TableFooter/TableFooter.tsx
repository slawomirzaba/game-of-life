import React, { ChangeEvent, useRef } from "react";
import "./tableFooter.css";

interface PropsI {
  tableColumns: number;
  isPlayEnabled: boolean;
  playAction: () => void;
  executeOneIteration: () => void;
  pauseAction: () => void;
  clearBoard: () => void;
  toggleBorders: () => void;
  saveConfiguration: () => void;
  handleUploadFile: (event: ChangeEvent<HTMLInputElement>) => void;
}

export const TableFooter = ({
  tableColumns,
  isPlayEnabled,
  playAction,
  executeOneIteration,
  pauseAction,
  clearBoard,
  toggleBorders,
  saveConfiguration,
  handleUploadFile
}: PropsI) => {
  const inputUploadRef = useRef(null);

  const clearUploadFileValue = () => {
    inputUploadRef.current.value = "";
  };

  return (
    <tr>
      <td colSpan={tableColumns} className="board__tableFooter">
        {isPlayEnabled ? (
          <button onClick={pauseAction}>
            <i className="fas fa-pause" />
          </button>
        ) : (
          <button onClick={playAction}>
            <i className="fas fa-play" />
          </button>
        )}
        <button onClick={executeOneIteration} disabled={isPlayEnabled}>
          <i className="fas fa-arrow-right" />
        </button>
        <button onClick={clearBoard} disabled={isPlayEnabled}>
          <i className="fas fa-trash" />
        </button>
        <button onClick={toggleBorders}>
          <i className="fas fa-th" />
        </button>
        <button onClick={saveConfiguration} disabled={isPlayEnabled}>
          <i className="fas fa-save" />
        </button>
        <label
          htmlFor="pattern-upload"
          className={`board__uploadFileLabel ${
            isPlayEnabled ? "board__uploadFileLabel--disabled" : ""
          }`}
        >
          <i className="fas fa-upload" />
        </label>
        <input
          id="pattern-upload"
          type="file"
          ref={inputUploadRef}
          className="board__uploadFileInput"
          onChange={handleUploadFile}
          disabled={isPlayEnabled}
          onClick={clearUploadFileValue}
        />
      </td>
    </tr>
  );
};
