import React from "react";
import "./header.css";
import { BoardForm } from "../BoardForm";
import { Patterns } from "../Patterns";
import { PatternI } from "../../interfaces";

interface PropsI {
  tableColumns: number;
  tableRows: number;
  isPlay: boolean;
  setColumns: (columns: string) => void;
  setRows: (rows: string) => void;
  selectPattern: (pattern: PatternI) => void;
}

export const Header = ({
  tableColumns,
  tableRows,
  isPlay,
  setColumns,
  setRows,
  selectPattern
}: PropsI) => {
  return (
    <div className="header">
      <BoardForm
        tableColumns={tableColumns}
        tableRows={tableRows}
        setColumns={setColumns}
        setRows={setRows}
      />
        <Patterns selectPattern={selectPattern} isPlay={isPlay} />
    </div>
  );
};
