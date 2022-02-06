import React from "react";
import Menu from "./Menu";
import classes from "./Tactics.module.css";

const Tactics: React.FC = () => (
  <div className={classes.container}>
    <div>
      <Menu />
    </div>
  </div>
);

export default Tactics;
