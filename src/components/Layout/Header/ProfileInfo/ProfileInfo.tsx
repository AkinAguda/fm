import React from "react";
import { mergeClasses } from "@footium/utility/functions";
import { ReactComponent as GlobeSvg } from "@footium/assets/svgs/globe.svg";
import { ReactComponent as QuestionMarkSvg } from "@footium/assets/svgs/question-mark.svg";
import { ReactComponent as ArrowHead } from "@footium/assets/svgs/arrow-head.svg";
import classes from "./ProfileInfo.module.css";

const ProfileInfo: React.FC = () => (
  <div className="d-flex align-items-center w-100 h-100">
    <div className="h-full d-flex align-tems-center pe-3">
      <button className={classes.globe}>
        <GlobeSvg />
      </button>
      <button className={mergeClasses(classes.questionMark, "mx-2")}>
        <QuestionMarkSvg />
      </button>
      <button className={classes.footiumLogo}>
        <img src="assets/images/footium-logo.jpg" alt="footium logo" />
      </button>
    </div>
    <div className={mergeClasses("h-75 w-full d-flex", classes.right)}>
      <div className={classes.filler} />
      <div className={classes.dateAndTime}>
        <div className={classes.dateAndTimeBackground} />
        <div className={mergeClasses(classes.dateTimeText, "thin-scrollbar")}>
          <div className={classes.date}>26 AUG 2019</div>
          <div className={classes.time}>Mon 9:00</div>
        </div>
      </div>
      <button className={mergeClasses(classes.continueButton)}>
        continue
        <div>
          <ArrowHead />
        </div>
      </button>
    </div>
  </div>
);

export default ProfileInfo;
