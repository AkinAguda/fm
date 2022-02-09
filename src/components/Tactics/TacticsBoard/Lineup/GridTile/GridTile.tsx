import React from "react";
import { Player } from "../../../types";
import PlayerComponent from "../../../../common/Player";
import classes from "./GridTile.module.css";
import { TacticsContext } from "../../../context";
import { mergeClasses } from "@footium/utility/functions";

const GridTile: React.FC<{
  player: Player | null;
}> = ({ player }) => (
  <TacticsContext.Consumer>
    {({ onDragEnd, onDragOver, onDragStart, dragged }) => (
      <div
        className={mergeClasses(classes.container, [
          dragged.id === player?.id,
          classes.hide,
        ])}
      >
        {player ? (
          <div
            draggable
            className={classes.playerComponentWrapper}
            onDragStart={(e) => {
              onDragStart(player.id);
            }}
            onDragEnd={(e) => {
              onDragEnd(player.id);
            }}
            onDragOver={(e) => {
              e.preventDefault();
              onDragOver(player.id);
            }}
          >
            <PlayerComponent player={player} />
          </div>
        ) : (
          <></>
        )}
      </div>
    )}
  </TacticsContext.Consumer>
);

export default GridTile;
