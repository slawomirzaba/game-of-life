export interface ActiveElementsKeysI {
  [key: string]: boolean;
}

export interface GameStateI {
  columns: number;
  rows: number;
  activeElementsKeys: ActiveElementsKeysI;
  iteration: number;
  playOption: boolean;
  refreshTime: number;
}
