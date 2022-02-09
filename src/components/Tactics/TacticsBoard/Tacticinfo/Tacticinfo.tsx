import React from "react";
import { mergeClasses } from "@footium/utility/functions";
import { ReactComponent as ArrowHeadSvg } from "@footium/assets/svgs/arrow-head.svg";
import { ReactComponent as Football } from "@footium/assets/svgs/football.svg";
import TacticCard from "./TacticCard/TacticCard";
import classes from "./Tacticinfo.module.css";

const Tacticinfo: React.FC = () => (
  <div
    className={mergeClasses(classes.container, "p-2 text-center overflow-auto")}
  >
    <div
      className={mergeClasses(classes.formationHeading, "fw-bold font-small")}
    >
      TACTICAL STYLE
    </div>
    <div className={mergeClasses(classes.tacticStyle, "fw-bold")}>
      TIKI-TAKA <ArrowHeadSvg />
    </div>
    <hr className={classes.separator} />
    <div className={mergeClasses(classes.mentality, "fw-bold font-small")}>
      MENTALITY
    </div>
    <div
      className={mergeClasses(
        classes.mentalitySelection,
        "d-flex align-items-center justify-content-center mt-1"
      )}
    >
      <Football className={mergeClasses(classes.football, "me-1 ms-auto")} />
      Balanced
      <ArrowHeadSvg className={mergeClasses(classes.arrowHead, "ms-auto")} />
    </div>
    <div className="mt-3">
      <TacticCard tactic="in possession" Svg={Football}>
        Much Shorter Passing
        <br />
        Play Out of Defence
        <br />
        Low Crosses
        <br />
        Dribble Less
        <br />
        Work Ball Into Box
        <br />
        Much Lower Tempo
        <br />
        Narrow
      </TacticCard>
    </div>
    <div className="mt-3">
      <TacticCard tactic="in transition" Svg={Football}>
        Distribute to Centre-Backs
        <br />
        Distribute Quickly
        <br />
        Hold Shape
        <br />
        Counter Press
      </TacticCard>
    </div>
    <div className="mt-3">
      <TacticCard fontSize="12px" tactic="out of possession" Svg={Football}>
        Much Higher Defence Line
        <br />
        Much Higher Line Of Engagement
        <br />
        Extremely Urgent
        <br />
        Prevent Short GK
        <br />
        Distribution
        <br />
        Use Offside Trap
      </TacticCard>
    </div>
  </div>
);

export default Tacticinfo;
