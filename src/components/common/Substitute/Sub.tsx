import React from "react";
import { ReactComponent as ProfileSvg } from "@footium/assets/svgs/profile.svg";
import { SubContainerProps } from "./types";
import classes from "./Sub.module.css";

const Player: React.FC<SubContainerProps> = ({
  sub,
  playerJerseyUrl,
  gkJerseyUrl,
}) => (
  <div className={classes.container}>
    <div className={classes.jerseyWrapper}>
      <img
        src={sub.isGk ? gkJerseyUrl : playerJerseyUrl}
        alt="jersey"
        className={classes.jersey}
      />
      <div className={classes.jerseyNumber}>{sub.jerseyNumber}</div>
    </div>
    <div className={classes.playerInfo}>
      <div className={classes.playerPersonalInfo}>
        <ProfileSvg className={classes.profile} />
        <div className={classes.playerName}>{sub.name.firstName}</div>
      </div>
    </div>
    <div className={classes.position}>{sub.positions[0].position}</div>
  </div>
);

export default Player;
