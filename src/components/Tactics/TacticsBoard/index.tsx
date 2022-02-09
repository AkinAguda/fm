import React, { useState, useRef } from "react";
import { fillFormationSpacesWithNull } from "./functions";
import {
  ContextType,
  Player,
  Formations,
  TacticsContainerProps,
} from "./types";
import { TacticsContext } from "./context";
import TacticsBoard from "./TacticsBoard";

const TacticsBoardContainer: React.FC<TacticsContainerProps> = ({
  team,
  formations,
  playerJerseyUrl,
  gkJerseyUrl,
}) => {
  const [firstElevenPlayers, setFirstElevenPlayers] = useState<Player[]>([
    ...team.firstEleven,
  ]);
  const [subs, setSubs] = useState<Player[]>([...team.subs]);
  const [formation, setFormation] = useState(formations[0]);
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
    gkJerseyUrl,
    playerJerseyUrl,
    formations,
  };

  return (
    <TacticsContext.Provider value={state}>
      <TacticsBoard />
    </TacticsContext.Provider>
  );
};

export default TacticsBoardContainer;
