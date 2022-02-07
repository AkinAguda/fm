import React from "react";
import Header from "./Header";
import classes from "./TacticsBoard.module.css";

const TacticsBoard: React.FC = () => (
  <div className={classes.container}>
    <Header />
  </div>
);

export default TacticsBoard;
