import React from "react";
import { ReactComponent as RewindSvg } from "@footium/assets/svgs/rewind.svg";
import { TacticCardProps } from "./types";
import classes from "./TacticCard.module.css";
import { mergeClasses } from "@footium/utility/functions";

const TacticCard: React.FC<TacticCardProps> = ({
  Svg,
  tactic,
  children,
  fontSize,
}) => (
  <div className={classes.container}>
    <div
      className="d-flex align-items-center text-uppercase fw-bolder font-small mb-2 text-center justify-content-center"
      style={{ fontSize }}
    >
      <Svg className="me-1" />
      {tactic}
    </div>
    <div className={mergeClasses(classes.description, "font-tiny")}>
      {children}
    </div>
    <button
      className={mergeClasses(
        classes.change,
        "d-flex align-items-center mx-auto fw-bold text-uppercase font-small mt-2"
      )}
    >
      <RewindSvg className="me-1" /> Change
    </button>
  </div>
);

export default TacticCard;
