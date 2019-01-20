import { PatternI } from "../../interfaces";

export const blinker: PatternI = {
  name: "Blinker",
  structure: { "1,1": true, "1,2": true, "1,3": true },
  url:
    "https://upload.wikimedia.org/wikipedia/commons/9/95/Game_of_life_blinker.gif"
};

export const toad: PatternI = {
  name: "Toad",
  structure: {
    "1,2": true,
    "1,1": true,
    "1,3": true,
    "2,2": true,
    "2,3": true,
    "2,4": true
  },
  url:
    "https://upload.wikimedia.org/wikipedia/commons/1/12/Game_of_life_toad.gif"
};

export const beacon: PatternI = {
  name: "Beacon",
  structure: {
    "1,1": true,
    "2,1": true,
    "1,2": true,
    "2,2": true,
    "3,3": true,
    "4,3": true,
    "4,4": true,
    "3,4": true
  },
  url:
    "https://upload.wikimedia.org/wikipedia/commons/1/1c/Game_of_life_beacon.gif"
};

export const iColumn: PatternI = {
  name: "I-column",
  structure: {
    "3,9": true,
    "3,10": true,
    "3,8": true,
    "4,9": true,
    "5,9": true,
    "6,10": true,
    "6,9": true,
    "6,8": true,
    "8,8": true,
    "8,9": true,
    "8,10": true,
    "9,10": true,
    "9,9": true,
    "9,8": true,
    "11,8": true,
    "11,9": true,
    "11,10": true,
    "12,9": true,
    "13,9": true,
    "14,10": true,
    "14,9": true,
    "14,8": true
  },
  url: "https://upload.wikimedia.org/wikipedia/commons/f/fb/I-Column.gif"
};

export const pulsar: PatternI = {
  name: "Pulsar",
  structure: {
    "6,8": true,
    "7,8": true,
    "8,8": true,
    "4,7": true,
    "4,6": true,
    "4,5": true,
    "9,7": true,
    "9,6": true,
    "9,5": true,
    "6,3": true,
    "7,3": true,
    "8,3": true,
    "6,10": true,
    "8,10": true,
    "7,10": true,
    "9,11": true,
    "9,12": true,
    "9,13": true,
    "4,11": true,
    "4,12": true,
    "4,13": true,
    "6,15": true,
    "7,15": true,
    "8,15": true,
    "11,7": true,
    "11,6": true,
    "11,5": true,
    "11,11": true,
    "11,12": true,
    "11,13": true,
    "12,8": true,
    "13,8": true,
    "14,8": true,
    "12,10": true,
    "14,10": true,
    "13,10": true,
    "12,3": true,
    "13,3": true,
    "14,3": true,
    "16,5": true,
    "16,6": true,
    "16,7": true,
    "16,11": true,
    "16,12": true,
    "16,13": true,
    "14,15": true,
    "13,15": true,
    "12,15": true
  },
  url:
    "https://upload.wikimedia.org/wikipedia/commons/0/07/Game_of_life_pulsar.gif"
};
