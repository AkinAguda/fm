import React, { useState } from "react";
import { DEFAULT_FIRST_ELEVEN, DEFAULT_FORMATION } from "./constants";
import { fillFormationSpacesWithNull } from "./functions";
import { ContextType, Player } from "./types";
import { TacticsContext } from "./context";
import Tactics from "./Tactics";

const TacticsContainer: React.FC = () => {
  const [firstElevenPlayers, setFirstElevenPlayers] = useState<Player[]>([
    ...DEFAULT_FIRST_ELEVEN,
  ]);
  const [formation, setFormation] = useState(DEFAULT_FORMATION);
  const [filledOutFirstEleven] = useState<(Player | null)[]>(
    fillFormationSpacesWithNull(firstElevenPlayers, formation)
  );

  const state: ContextType = {
    firstElevenPlayers,
    formation: DEFAULT_FORMATION,
    filledOutFirstEleven,
  };

  return (
    <TacticsContext.Provider value={state}>
      <Tactics />
    </TacticsContext.Provider>
  );
};

export default TacticsContainer;
