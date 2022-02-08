import {
  PlayerPositionStat,
  PlayerPositions,
  Player,
  FormationKey,
} from "./types";
import { ALL_POSITIONS, formations } from "./constants";

export const fillAllPosWithRating = (
  rating: number,
  exceptions?: PlayerPositions[]
): PlayerPositionStat[] => {
  let allPos = [...ALL_POSITIONS];
  if (exceptions) {
    allPos = allPos.filter((pos) => !exceptions.includes(pos));
  }

  return allPos.map((position) => ({ rating, position }));
};

export const fillFormationSpacesWithNull = (
  firstElevenPlayers: Player[],
  formation: FormationKey
) => {
  const result: (Player | null)[] = [];
  let firstElevenIndex = 0;
  formations[formation].forEach((state) => {
    if (state === "FILLED") {
      result.push(firstElevenPlayers[firstElevenIndex]);
      firstElevenIndex++;
    } else {
      result.push(null);
    }
  });
  return result;
};
