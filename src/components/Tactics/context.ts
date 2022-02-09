import { createContext } from "react";
import { ContextType } from "./types";
import { DEFAULT_FIRST_ELEVEN, DEFAULT_SUBS } from "./constants";

const defaultValues: ContextType = {
  firstElevenPlayers: { ...DEFAULT_FIRST_ELEVEN },
  subs: { ...DEFAULT_SUBS },
  formation: "4-3-3",
  filledOutFirstEleven: [],
  onDragStart: () => {},
  onDragEnd: () => {},
  onDragOver: () => {},
  draggedId: "",
  setFormation: () => {},
};

export const TacticsContext = createContext(defaultValues);
