import React, { useState, useEffect } from "react";
import { times as _times } from "lodash";
import { GameStateI, ActiveElementsKeysI } from "../interfaces";
import { Header } from "../Components/Header";
import { Board } from "../Components/Board";
import "./game.css";
import { getCellKey, getNewCellState } from "../lib";

export const Container = () => {
  const MIN_REFRESH_TIME = 100;
  const initialState: GameStateI = {
    columns: 20,
    rows: 20,
    refreshTime: 200,
    activeElementsKeys: {},
    iteration: 0,
    playOption: false
  };
  const [state, setState] = useState(initialState);

  useEffect(
    () => {
      if (!state.playOption) return;
      const refreshTime = Math.max(MIN_REFRESH_TIME, state.refreshTime);
      setTimeout(() => executeOneIteration(), refreshTime);
    },
    [state.iteration, state.playOption, state.refreshTime]
  );

  const setColumns = (columns: string): void => {
    const columnsValue = parseInt(columns, 10) || 0;

    setState(prevState => {
      return { ...prevState, columns: columnsValue };
    });
  };

  const setRows = (rows: string): void => {
    const rowsValue = parseInt(rows, 10) || 0;

    setState(prevState => {
      return { ...prevState, rows: rowsValue };
    });
  };

  const setRefreshTime = (time: string): void => {
    const refreshTime = parseInt(time, 10) || 0;

    setState(prevState => {
      return {
        ...prevState,
        refreshTime
      };
    });
  };

  const toggleActiveElementKey = (key: string): void => {
    if (state.playOption) return;

    setState(prevState => {
      const value = prevState.activeElementsKeys[key] ? false : true;

      return {
        ...prevState,
        activeElementsKeys: { ...prevState.activeElementsKeys, [key]: value }
      };
    });
  };

  const playAction = () => {
    setState(prevState => {
      return {
        ...prevState,
        playOption: true,
        iteration: prevState.iteration + 1
      };
    });
  };

  const pauseAction = () => {
    setState(prevState => {
      return {
        ...prevState,
        playOption: false
      };
    });
  };

  const executeOneIteration = () => {
    const currentActiveElementsKeys = state.activeElementsKeys;
    const newActiveElementsKeys: ActiveElementsKeysI = {};

    _times(state.rows).forEach(rowIndex => {
      _times(state.columns).forEach(columnIndex => {
        const key = getCellKey(rowIndex, columnIndex);
        const newCellValue = getNewCellState(
          key,
          state.rows,
          state.columns,
          currentActiveElementsKeys
        );

        if (newCellValue) newActiveElementsKeys[key] = newCellValue;
        else delete newActiveElementsKeys[key];
      });
    });

    setState(prevState => {
      return {
        ...prevState,
        activeElementsKeys: newActiveElementsKeys,
        iteration: prevState.iteration + 1
      };
    });
  };

  return (
    <div className="game">
      <Header
        tableColumns={state.columns}
        tableRows={state.rows}
        refreshTime={state.refreshTime}
        setColumns={setColumns}
        setRows={setRows}
        setRefreshTime={setRefreshTime}
      />
      <Board
        tableColumns={state.columns}
        tableRows={state.rows}
        toggleActiveElementKey={toggleActiveElementKey}
        activeElementsKeys={state.activeElementsKeys}
        playAction={playAction}
        executeOneIteration={executeOneIteration}
        pauseAction={pauseAction}
        isPlayEnabled={state.playOption}
      />
    </div>
  );
};
