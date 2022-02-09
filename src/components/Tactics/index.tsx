import React, { useState } from "react";
import {
  DEFAULT_FIRST_ELEVEN,
  DEFAULT_FORMATION,
  DEFAULT_SUBS,
} from "./constants";
import { fillFormationSpacesWithNull } from "./functions";
import { ContextType, Player, Formations } from "./types";
import { TacticsContext } from "./context";
import Tactics from "./Tactics";

const TacticsContainer: React.FC = () => {
  const [firstElevenPlayers, setFirstElevenPlayers] = useState<Player[]>([
    ...DEFAULT_FIRST_ELEVEN,
  ]);
  const [subs, setSubs] = useState<Player[]>([...DEFAULT_SUBS]);
  const [formation, setFormation] = useState(DEFAULT_FORMATION);
  const [filledOutFirstEleven, setFilledOutFirstEleven] = useState<
    (Player | null)[]
  >(fillFormationSpacesWithNull(firstElevenPlayers, formation));
  const [dragged, setdragged] = useState<{ id: string; isSub?: boolean }>({
    id: "",
  });
  const onDragStart = (id: string, isSub?: boolean) => {
    setdragged({ id, isSub });
  };

  const onDragEnd = (id: string) => {
    setdragged({ id: "", isSub: false });
  };

  const onDragOver = (id: string, isSub?: boolean) => {
    if (dragged.id) {
      const firstElevenCopy = [...firstElevenPlayers];
      if (!dragged.isSub) {
        const indexA = firstElevenCopy.findIndex((p) => p.id === id);
        const indexB = firstElevenCopy.findIndex((p) => p.id === dragged.id);

        if (indexA >= 0 && indexB >= 0) {
          const temp = { ...firstElevenCopy[indexA] };
          firstElevenCopy[indexA] = { ...firstElevenCopy[indexB] };
          firstElevenCopy[indexB] = temp;
        }
        setFirstElevenPlayers(firstElevenCopy);
        setFilledOutFirstEleven(
          fillFormationSpacesWithNull(firstElevenCopy, formation)
        );
      } else {
        const subsCopy = [...subs];
        const arr = isSub ? subsCopy : firstElevenCopy;

        const indexA = arr.findIndex((p) => p.id === id);
        const indexB = subsCopy.findIndex((p) => p.id === dragged.id);

        if (indexA >= 0 && indexB >= 0) {
          const temp = { ...arr[indexA] };
          arr[indexA] = { ...subsCopy[indexB] };
          subsCopy[indexB] = temp;
        }
        if (isSub) {
          setSubs(arr);
        } else {
          setFirstElevenPlayers(arr);
          setSubs(subsCopy);
          setFilledOutFirstEleven(fillFormationSpacesWithNull(arr, formation));
          onDragEnd(id);
        }
      }
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
    dragged,
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
