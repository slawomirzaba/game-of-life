import React from "react";
import "./boardForm.css";

interface PropsI {
  tableColumns: number;
  tableRows: number;
  setColumns: (value: string) => void;
  setRows: (value: string) => void;
}

export const BoardForm = ({
  tableColumns,
  tableRows,
  setColumns,
  setRows
}: PropsI) => (
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
);
