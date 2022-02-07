import { mergeClasses } from "@footium/utility/functions";
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
        <TacticsBoard />
      </div>
      <div className={classes.right}></div>
    </div>
  </div>
);

export default Tactics;
