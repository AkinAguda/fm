import React, { useState } from "react";
import {
  DEFAULT_FIRST_ELEVEN,
  DEFAULT_FORMATION,
  DEFAULT_SUBS,
} from "./constants";
import { fillFormationSpacesWithNull } from "./functions";
import { ContextType, Player, Substitiute, Formations } from "./types";
import { TacticsContext } from "./context";
import Tactics from "./Tactics";

const TacticsContainer: React.FC = () => {
  const [firstElevenPlayers, setFirstElevenPlayers] = useState<Player[]>([
    ...DEFAULT_FIRST_ELEVEN,
  ]);
  const [subs, setSubs] = useState<Substitiute[]>([...DEFAULT_SUBS]);
  const [formation, setFormation] = useState(DEFAULT_FORMATION);
  const [filledOutFirstEleven, setFilledOutFirstEleven] = useState<
    (Player | null)[]
  >(fillFormationSpacesWithNull(firstElevenPlayers, formation));
  const [draggedId, setDraggedId] = useState("");
  const onDragStart = (id: string) => {
    setDraggedId(id);
  };

  const onDragEnd = (id: string) => {
    setDraggedId("");
  };

  const onDragOver = (id: string) => {
    if (draggedId) {
      const firstElevenCopy = [...firstElevenPlayers];

      const indexA = firstElevenCopy.findIndex((p) => p.id === id);
      const indexB = firstElevenCopy.findIndex((p) => p.id === draggedId);

      if (indexA >= 0 && indexB >= 0) {
        const temp = { ...firstElevenCopy[indexA] };
        firstElevenCopy[indexA] = { ...firstElevenCopy[indexB] };
        firstElevenCopy[indexB] = temp;
      }
      setFirstElevenPlayers(firstElevenCopy);
      setFilledOutFirstEleven(
        fillFormationSpacesWithNull(firstElevenCopy, formation)
      );
    }
  };

  const setFormationHandler = (formation: keyof Formations) => {
    setFormation(formation);
    setFilledOutFirstEleven(
      fillFormationSpacesWithNull({ ...firstElevenPlayers }, formation)
    );
  };

  const state: ContextType = {
    firstElevenPlayers,
    formation,
    filledOutFirstEleven,
    onDragStart,
    onDragEnd,
    onDragOver,
    draggedId,
    setFormation: setFormationHandler,
    subs,
  };

  return (
    <TacticsContext.Provider value={state}>
      <Tactics />
    </TacticsContext.Provider>
  );
};

export default TacticsContainer;
