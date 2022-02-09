export type GridSpaceState = "FILLED" | "EMPTY" | "INVALID";

type ForwardPositions = "ST" | "CF" | "RW" | "LW";
type MidFieldPositions = "LM" | "RM" | "CM" | "AM" | "DM";
type DefensivePositions = "CB" | "LB" | "RB" | "WB";
type GoalKeeperPositions = "GK";

export type PlayerPositions =
  | ForwardPositions
  | MidFieldPositions
  | DefensivePositions
  | GoalKeeperPositions;

export interface PlayerPositionStat {
  position: PlayerPositions;
  rating: number;
}

export interface Player {
  name: { firstName: string; surname: string };
  positions: PlayerPositionStat[];
  jerseyNumber: number;
  id: string;
  isGk?: boolean;
}

export interface GridSpace {
  state: GridSpaceState;
  playerData: Player | null;
}

export interface Substitiute extends Player {
  sub: true;
}

export type Formations = {
  "4-3-3": GridSpaceState[];
  "4-2-3-1": GridSpaceState[];
};

export type FormationKey = keyof Formations;

export type ContextType = {
  firstElevenPlayers: Player[];
  subs: Substitiute[];
  formation: keyof Formations;
  filledOutFirstEleven: (Player | null)[];
  onDragStart: (id: string) => void;
  onDragEnd: (id: string) => void;
  onDragOver: (id: string) => void;
  draggedId: string;
  setFormation: (value: keyof Formations) => void;
};
