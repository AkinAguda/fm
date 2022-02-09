import { createContext } from "react";
import { ContextType } from "./types";

const defaultValues: ContextType = {
  firstElevenPlayers: [],
  subs: [],
  formation: "4-3-3",
  filledOutFirstEleven: [],
  onDragStart: () => {},
  onDragEnd: () => {},
  onDragOver: () => {},
  dragged: { id: "" },
  setFormation: () => {},
  gkJerseyUrl: "",
  playerJerseyUrl: "",
  formations: [],
};

export const TacticsContext = createContext(defaultValues);
