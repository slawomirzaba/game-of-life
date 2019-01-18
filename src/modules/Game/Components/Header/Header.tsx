import React from "react";
import "./header.css";

interface PropsI {
  tableColumns: number;
  tableRows: number;
  setColumns: (columns: string) => void;
  setRows: (rows: string) => void;
}

export const Header = ({
  tableColumns,
  tableRows,
  setColumns,
  setRows
}: PropsI) => {
  return (
    <div className="header">
      <div className="boardForm">
        <div className="boardForm__field">
          <label className="boardForm__fieldLabel">Columns:</label>
          <input
            className="boardForm__fieldInput"
            type="number"
            value={tableColumns}
            onChange={e => setColumns(e.target.value)}
          />
        </div>
        <div className="boardForm__field">
          <label className="boardForm__fieldLabel">Rows:</label>
          <input
            className="boardForm__fieldInput"
            type="number"
            value={tableRows}
            onChange={e => setRows(e.target.value)}
          />
        </div>
      </div>
    </div>
  );
};
