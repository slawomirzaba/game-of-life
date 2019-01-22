export interface ActiveElementsKeysI {
  [key: string]: boolean;
}

export interface PatternI {
  name: string;
  structure: ActiveElementsKeysI;
  url: string;
  minColumns?: number;
  minRows?: number;
}

export interface SliderConfigI {
  min: number;
  max: number;
  values: { [key: number]: number };
}
