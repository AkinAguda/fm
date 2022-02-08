import React from "react";
import { mergeClasses } from "@footium/utility/functions";
import Header from "./Header";
import Tacticinfo from "./Tacticinfo";
import Lineup from "./Lineup";
import classes from "./TacticsBoard.module.css";

const TacticsBoard: React.FC = () => (
  <div className={classes.container}>
    <div
      className={mergeClasses("position-sticky top-0", classes.headerWrapper)}
    >
      <Header />
    </div>
    <div className="d-flex p-2 h-100">
      <div className={mergeClasses(classes.tacticInfo, "h-100")}>
        <Tacticinfo />
      </div>
      <div className="w-100 ms-3">
        <Lineup />
      </div>
    </div>
  </div>
);

export default TacticsBoard;
