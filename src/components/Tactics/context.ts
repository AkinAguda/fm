import { createContext } from "react";
import { ContextType } from "./types";
import { DEFAULT_FIRST_ELEVEN } from "./constants";

const defaultValues: ContextType = {
  firstElevenPlayers: { ...DEFAULT_FIRST_ELEVEN },
  formation: "4-3-3",
  filledOutFirstEleven: [],
};

export const TacticsContext = createContext(defaultValues);
