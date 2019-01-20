export interface ActiveElementsKeysI {
  [key: string]: boolean;
}

export interface PatternI {
  name: string;
  structure: ActiveElementsKeysI;
  minColumns?: number;
  minRows?: number;
}
