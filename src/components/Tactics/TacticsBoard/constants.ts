import { PlayerPositions, Formations, FormationKey } from "./types";

export const ALL_POSITIONS: PlayerPositions[] = [
  "ST",
  "CF",
  "RW",
  "LW",
  "LM",
  "RM",
  "CM",
  "AM",
  "DM",
  "CB",
  "LB",
  "RB",
  "WB",
  "GK",
];

// export const DEFAULT_SUBS: Player[] =;

// prettier-ignore
export const formations: Formations = {
    "4-3-3": [
       "EMPTY",   "FILLED",  "FILLED",  "FILLED",  "EMPTY",
       "INVALID", "INVALID", "EMPTY",   "INVALID", "INVALID",
       "EMPTY",   "FILLED",  "FILLED",  "FILLED",  "EMPTY",
       "INVALID", "INVALID", "EMPTY",   "INVALID", "INVALID",
       "FILLED",  "FILLED",  "EMPTY",   "FILLED",  "FILLED",
       "INVALID", "EMPTY",   "EMPTY",   "EMPTY",   "INVALID",
       "INVALID", "INVALID", "FILLED",  "INVALID", "INVALID"
    ],
    "4-2-3-1": [
      "INVALID",  "EMPTY",   "FILLED",  "EMPTY",   "INVALID",
      "FILLED",   "EMPTY",   "FILLED",  "EMPTY",   "FILLED",
      "INVALID",  "INVALID", "INVALID", "INVALID", "INVALID",
      "EMPTY",    "FILLED",  "INVALID", "FILLED",  "EMPTY",
      "INVALID",  "INVALID", "INVALID", "INVALID", "INVALID",
      "FILLED",   "FILLED",  "EMPTY",   "FILLED",  "FILLED",
      "INVALID",  "INVALID", "FILLED",  "INVALID", "INVALID"
    ]
}

export const DEFAULT_FORMATION: FormationKey = "4-2-3-1";

// console.log(formations["4-3-3"].length);
// console.log(formations["4-3-3"].filter((v) => v === "FILLED").length);
// console.log(formations["4-2-3-1"].filter((v) => v === "FILLED").length);
