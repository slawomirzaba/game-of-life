import { PatternI } from "../../interfaces";

export const block: PatternI = {
  name: "Block",
  structure: { "1,1": true, "1,2": true, "2,2": true, "2,1": true }
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
  }
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
  }
};

export const boat: PatternI = {
  name: "Boat",
  structure: { "3,1": true, "2,1": true, "2,2": true, "3,3": true, "4,2": true }
};

export const tub: PatternI = {
  name: "Tub",
  structure: { "1,2": true, "2,1": true, "3,2": true, "2,3": true }
};
