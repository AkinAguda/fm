import React from "react";
import { PlayerContainerProps } from "./types";
import PlayerView from "./Player";

const PlayerContainer: React.FC<PlayerContainerProps> = (props) => {
  return <PlayerView {...props} />;
};

export default PlayerContainer;
