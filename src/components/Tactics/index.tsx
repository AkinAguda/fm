import React, { useState, useRef } from "react";
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
  const hovered = useRef<{ id: string; isSub?: boolean }>({
    id: "",
    isSub: false,
  });

  const onDragStart = (id: string, isSub?: boolean) => {
    setdragged({ id, isSub });
  };

  const onDragEnd = () => {
    const { id, isSub } = hovered.current;
    if (dragged.id) {
      const firstElevenCopy = [...firstElevenPlayers];
      const subsCopy = [...subs];
      if (!dragged.isSub) {
        const arr = hovered.current.isSub ? subsCopy : firstElevenCopy;

        const indexA = arr.findIndex((p) => p.id === id);
        const indexB = firstElevenCopy.findIndex((p) => p.id === dragged.id);

        if (indexA >= 0 && indexB >= 0) {
          const temp = { ...arr[indexA] };
          arr[indexA] = { ...firstElevenCopy[indexB] };
          firstElevenCopy[indexB] = temp;
        }
        if (isSub) {
          setSubs(arr);
          setFirstElevenPlayers(firstElevenCopy);
          setFilledOutFirstEleven(
            fillFormationSpacesWithNull(firstElevenCopy, formation)
          );
        } else {
          setFirstElevenPlayers(arr);
          setSubs(subsCopy);
          setFilledOutFirstEleven(fillFormationSpacesWithNull(arr, formation));
        }
      } else {
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
        }
      }
    }
    hovered.current = { id: "", isSub: false };
    setdragged({ id: "", isSub: false });
  };

  const onDragOver = (id: string, isSub?: boolean) => {
    hovered.current = { id, isSub };
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
