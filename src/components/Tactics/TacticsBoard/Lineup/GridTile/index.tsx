import React from "react";
import { Player, GridSpaceState } from "../../../types";
import GridTile from "./GridTile";

const GridTileContainer: React.FC<{
  player: Player | null;
  gridSpaceState: GridSpaceState;
}> = ({ player, gridSpaceState }) => {
  return <GridTile player={player} />;
};

export default GridTileContainer;
