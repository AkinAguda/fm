import React from "react";
import { ReactComponent as TacticsSvg } from "@footium/assets/svgs/tactics.svg";
import { mergeClasses } from "@footium/utility/functions";
import { TacticsContext } from "../../../context";
import classes from "./TacticSelector.module.css";

const TacticSelector: React.FC = () => (
  <TacticsContext.Consumer>
    {({ formation }) => (
      <div className="d-flex h-100 align-items-center">
        <TacticsSvg className={classes.tacticSvg} />
        <div className={mergeClasses("ms-1 font-small", classes.tacticsText)}>
          TACTICS
        </div>
        <div
          className={mergeClasses(
            classes.formationConfig,
            "h-100 ms-3 d-flex align-items-center"
          )}
        >
          <button
            className={mergeClasses(classes.formationButton, classes.active)}
          >
            <span>1</span>
          </button>
          <button className={mergeClasses(classes.formationButton, "ms-1")}>
            <span>2</span>
          </button>
          <div
            className={mergeClasses(classes.formationName, "px-3 py-2 ms-1")}
          >
            <span>{formation} Default - Custom...</span>
          </div>
          <button className={mergeClasses(classes.formationButton, "ms-1")}>
            <span></span>
          </button>
        </div>
      </div>
    )}
  </TacticsContext.Consumer>
);

export default TacticSelector;
