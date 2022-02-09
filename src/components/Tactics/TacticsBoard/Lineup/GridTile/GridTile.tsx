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
    {({ onDragEnd, onDragOver, onDragStart, draggedId }) => (
      <div
        className={mergeClasses(classes.container, [
          draggedId === player?.id,
          classes.hide,
        ])}
      >
        {player ? (
          <div
            onDragStart={(e) => {
              onDragStart(player.id);
            }}
            onDragEnd={(e) => {
              onDragEnd(player.id);
            }}
            onDragOver={(e) => {
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
