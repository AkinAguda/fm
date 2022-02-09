import { mergeClasses } from "@footium/utility/functions";
import { team1, team2 } from "./constants";
import React from "react";
import Menu from "./Menu";
import TacticsBoard from "./TacticsBoard";
import classes from "./Tactics.module.css";

const Tactics: React.FC = () => (
  <div
    className={mergeClasses(
      "position-relative d-flex flex-column h-100",
      classes.container
    )}
  >
    <div className={classes.menu}>
      <Menu />
    </div>
    <div className={mergeClasses("p-4 d-flex", classes.main)}>
      <div className={classes.left}>
        <TacticsBoard
          team={team1}
          formations={["4-2-3-1", "4-3-3"]}
          playerJerseyUrl="assets/images/player-jersey.png"
          gkJerseyUrl="assets/images/gk-jersey.png"
        />
      </div>
      <div className={classes.right}>
        <TacticsBoard
          team={team2}
          formations={["4-3-3", "4-2-3-1"]}
          playerJerseyUrl="assets/images/player-jersey-2.png"
          gkJerseyUrl="assets/images/gk-jersey.png"
        />
      </div>
    </div>
  </div>
);

export default Tactics;
