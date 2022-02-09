import React from "react";
import { ReactComponent as ProfileSvg } from "@footium/assets/svgs/profile.svg";
import { PlayerContainerProps } from "./types";
import classes from "./Player.module.css";

const Player: React.FC<PlayerContainerProps> = ({ player }) => (
  <div className={classes.container}>
    <div className={classes.jerseyWrapper}>
      <img
        src={`assets/images/${player.isGk ? "gk" : "player"}-jersey.png`}
        alt="jersey"
        className={classes.jersey}
      />
      <div className={classes.jerseyNumber}>{player.jerseyNumber}</div>
    </div>
    <div className={classes.playerInfo}>
      <div className={classes.playerPosStats}>
        <div className={classes.circle}></div>
        <div className={classes.position}>{player.positions[0].position}</div>
      </div>
      <div className={classes.playerPersonalInfo}>
        <ProfileSvg className={classes.profile} />
        <div className={classes.playerName}>{player.name.firstName}</div>
      </div>
    </div>
  </div>
);

export default Player;
