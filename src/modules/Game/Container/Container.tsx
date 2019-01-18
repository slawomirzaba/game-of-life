import React, { useState, useEffect } from "react";
import { times as _times } from "lodash";
import { ActiveElementsKeysI } from "../interfaces";
import { Header } from "../Components/Header";
import { Board } from "../Components/Board";
import "./game.css";
import { getCellKey, getNewCellState } from "../lib";

export const Container = () => {
  const REFRESH_TIME = 200;
  const INITIAL_ROWS_NUMBER = 20;
  const INITIAL_COLUMNS_NUMBER = 20;
  const INITIAL_ACTIVE_ELEMENTS_KEYS: ActiveElementsKeysI = {};

  const [columns, setColumns] = useState(INITIAL_ROWS_NUMBER);
  const [rows, setRows] = useState(INITIAL_COLUMNS_NUMBER);
  const [iteration, setIteration] = useState(0);
  const [playOption, setPlayOption] = useState(false);
  const [activeElementsKeys, setActiveElementsKeys] = useState(
    INITIAL_ACTIVE_ELEMENTS_KEYS
  );

  useEffect(
    () => {
      if (!playOption) return;

      setTimeout(() => executeOneIteration(), REFRESH_TIME);
    },
    [iteration, playOption]
  );

  const onSetColumns = (columns: string): void => {
    const columnsValue = parseInt(columns, 10) || 0;

    setColumns(columnsValue);
  };

  const onSetRows = (rows: string): void => {
    const rowsValue = parseInt(rows, 10) || 0;

    setRows(rowsValue);
  };

  const toggleActiveElementKey = (key: string): void => {
    if (playOption) return;

    setActiveElementsKeys(prevActiveElementsKeys => {
      const value = prevActiveElementsKeys[key] ? false : true;

      return { ...prevActiveElementsKeys, [key]: value };
    });
  };

  const playAction = () => {
    setPlayOption(true);
  };

  const pauseAction = () => {
    setPlayOption(false);
  };

  const executeOneIteration = () => {
    const currentActiveElementsKeys = activeElementsKeys;
    const newActiveElementsKeys: ActiveElementsKeysI = {};

    _times(rows).forEach(rowIndex => {
      _times(columns).forEach(columnIndex => {
        const key = getCellKey(rowIndex, columnIndex);
        const newCellValue = getNewCellState(
          key,
          rows,
          columns,
          currentActiveElementsKeys
        );

        if (newCellValue) newActiveElementsKeys[key] = newCellValue;
        else delete newActiveElementsKeys[key];
      });
    });

    setActiveElementsKeys(newActiveElementsKeys);
    setIteration(prevIteration => prevIteration + 1);
  };

  return (
    <div className="game">
      <Header
        tableColumns={columns}
        tableRows={rows}
        setColumns={onSetColumns}
        setRows={onSetRows}
      />
      <Board
        tableColumns={columns}
        tableRows={rows}
        toggleActiveElementKey={toggleActiveElementKey}
        activeElementsKeys={activeElementsKeys}
        playAction={playAction}
        executeOneIteration={executeOneIteration}
        pauseAction={pauseAction}
        isPlayEnabled={playOption}
      />
    </div>
  );
};
