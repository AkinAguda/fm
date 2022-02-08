import React from "react";
import { Player } from "../../../types";
import PlayerComponent from "../../../../common/Player";
import classes from "./GridTile.module.css";

const GridTile: React.FC<{
  player: Player | null;
}> = ({ player }) => (
  <div className={classes.container}>
    {player ? <PlayerComponent player={player} /> : <></>}
  </div>
);

export default GridTile;
