import { Player, PlayerPositions, Formations, FormationKey } from "./types";
import { fillAllPosWithRating } from "./functions";

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

export const DEFAULT_FIRST_ELEVEN: Player[] = [
  {
    positions: [
      { position: "LW", rating: 91 },
      { position: "CF", rating: 85 },
      ...fillAllPosWithRating(20, ["LW", "CF"]),
    ],
    name: { firstName: "Neymar", surname: "Jr" },
    jerseyNumber: 11,
    id: "wrfwoithrge",
  },
  {
    positions: [
      { position: "ST", rating: 95 },
      { position: "CF", rating: 90 },
      ...fillAllPosWithRating(20, ["ST", "CF"]),
    ],
    name: { firstName: "Zlatan", surname: "Ibrahimovic" },
    jerseyNumber: 9,
    id: "wrfwoithrg",
  },
  {
    positions: [
      { position: "RW", rating: 98 },
      { position: "CF", rating: 97 },
      ...fillAllPosWithRating(20, ["RW", "CF"]),
    ],
    name: { firstName: "Messi", surname: "Lionel" },
    jerseyNumber: 7,
    id: "wrfwoithrg1",
  },
  {
    positions: [
      { position: "LM", rating: 98 },
      { position: "CM", rating: 97 },
      ...fillAllPosWithRating(25, ["LM", "CM"]),
    ],
    name: { firstName: "Sumo", surname: "Farano" },
    jerseyNumber: 10,
    id: "wrfwoithrg2",
  },
  {
    positions: [
      { position: "CM", rating: 97 },
      ...fillAllPosWithRating(30, ["CM"]),
    ],
    name: { firstName: "Son", surname: "Goku" },
    jerseyNumber: 14,
    id: "wrfwoithrg3",
  },
  {
    positions: [
      { position: "RM", rating: 97 },
      ...fillAllPosWithRating(30, ["RM"]),
    ],
    name: { firstName: "Naruto", surname: "Uzumaki" },
    jerseyNumber: 17,
    id: "wrfwoithrg4",
  },

  ///////
  {
    positions: [
      { position: "LW", rating: 91 },
      { position: "CF", rating: 85 },
      ...fillAllPosWithRating(21, ["LW", "CF"]),
    ],
    name: { firstName: "Hatake", surname: "Kakashi" },
    jerseyNumber: 12,
    id: "wrfwoithrg5",
  },
  {
    positions: [
      { position: "RW", rating: 98 },
      { position: "CF", rating: 97 },
      ...fillAllPosWithRating(22, ["RW", "CF"]),
    ],
    name: { firstName: "Mina", surname: "Namikaze" },
    jerseyNumber: 20,
    id: "wrfwoithrg6",
  },
  {
    positions: [
      { position: "LM", rating: 98 },
      { position: "CM", rating: 97 },
      ...fillAllPosWithRating(25, ["LM", "CM"]),
    ],
    name: { firstName: "Monk", surname: "D.Luffy" },
    jerseyNumber: 8,
    id: "wrfwoithrg7",
  },
  {
    positions: [
      { position: "CM", rating: 97 },
      ...fillAllPosWithRating(30, ["CM"]),
    ],
    name: { firstName: "Rona", surname: "Zoro" },
    jerseyNumber: 3,
    id: "wrfwoithrg8",
  },
  {
    positions: [
      { position: "GK", rating: 100 },
      ...fillAllPosWithRating(30, ["GK"]),
    ],
    name: { firstName: "Mosh", surname: "Kishimoto" },
    jerseyNumber: 1,
    id: "wrfwoithrg9",
    isGk: true,
  },
];

export const DEFAULT_SUBS: Player[] = [
  {
    positions: [
      { position: "GK", rating: 81 },
      ...fillAllPosWithRating(25, ["CF"]),
    ],
    name: { firstName: "Midori", surname: "Kuroko" },
    jerseyNumber: 19,
    id: "wrfwoithrg743534",
    isGk: true,
    isSub: true,
  },
  {
    positions: [
      { position: "LM", rating: 98 },
      { position: "CM", rating: 97 },
      ...fillAllPosWithRating(25, ["LM", "CM"]),
    ],
    name: { firstName: "Ichigo", surname: "Kurosaki" },
    jerseyNumber: 44,
    id: "wrfwoithrg743",
    isSub: true,
  },
  {
    positions: [
      { position: "CF", rating: 81 },
      ...fillAllPosWithRating(25, ["CF"]),
    ],
    name: { firstName: "Sado", surname: "Rukia" },
    jerseyNumber: 47,
    id: "wrfwoithrg7435",
    isSub: true,
  },
];

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
      "INVALID",    "EMPTY",    "FILLED",  "EMPTY",    "INVALID",
      "FILLED",      "EMPTY",   "FILLED",  "EMPTY",   "FILLED",
      "INVALID",     "INVALID",  "INVALID",  "INVALID", "INVALID",
      "EMPTY",    "FILLED",    "INVALID",   "FILLED",   "EMPTY",
      "INVALID",     "INVALID",  "INVALID",  "INVALID", "INVALID",
      "FILLED",  "FILLED",  "EMPTY",   "FILLED",  "FILLED",
      "INVALID", "INVALID", "FILLED",  "INVALID", "INVALID"
    ]
}

export const DEFAULT_FORMATION: FormationKey = "4-2-3-1";

// console.log(formations["4-3-3"].length);
// console.log(formations["4-3-3"].filter((v) => v === "FILLED").length);
// console.log(formations["4-2-3-1"].filter((v) => v === "FILLED").length);
