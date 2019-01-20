import { PatternI } from "../../interfaces";

export const block: PatternI = {
  name: "Block",
  structure: { "1,1": true, "1,2": true, "2,2": true, "2,1": true },
  url:
    "https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Game_of_life_block_with_border.svg/66px-Game_of_life_block_with_border.svg.png"
};

export const beehive: PatternI = {
  name: "Beehive",
  structure: {
    "4,1": true,
    "3,2": true,
    "3,3": true,
    "5,2": true,
    "5,3": true,
    "4,4": true
  },
  url:
    "https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/Game_of_life_beehive.svg/98px-Game_of_life_beehive.svg.png"
};

export const loaf: PatternI = {
  name: "Loaf",
  structure: {
    "2,1": true,
    "3,2": true,
    "4,3": true,
    "3,4": true,
    "2,4": true,
    "1,3": true,
    "1,2": true
  },
  url:
    "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/Game_of_life_loaf.svg/98px-Game_of_life_loaf.svg.png"
};

export const boat: PatternI = {
  name: "Boat",
  structure: {
    "3,1": true,
    "2,1": true,
    "2,2": true,
    "3,3": true,
    "4,2": true
  },
  url:
    "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7f/Game_of_life_boat.svg/82px-Game_of_life_boat.svg.png"
};

export const tub: PatternI = {
  name: "Tub",
  structure: { "1,2": true, "2,1": true, "3,2": true, "2,3": true },
  url:
    "https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Game_of_life_flower.svg/82px-Game_of_life_flower.svg.png"
};
