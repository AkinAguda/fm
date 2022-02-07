import { mergeClasses } from "@footium/utility/functions";
import React from "react";
import Menu from "./Menu";
import classes from "./Tactics.module.css";

const Tactics: React.FC = () => (
  <div
    className={mergeClasses(
      "position-relative d-flex flex-column h-full",
      classes.container
    )}
  >
    <div>
      <Menu />
    </div>
    <div
      className={mergeClasses("px-4 py-4 d-flex h-full w-full", classes.main)}
    >
      <div className={classes.left}></div>
      <div className={classes.right}></div>
    </div>
  </div>
);

export default Tactics;
