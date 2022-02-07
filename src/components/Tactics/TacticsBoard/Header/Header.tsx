import React from "react";
import { mergeClasses } from "@footium/utility/functions";
import { ReactComponent as RewindSvg } from "@footium/assets/svgs/rewind.svg";
import TacticSelector from "./TacticSelector";
import classes from "./Header.module.css";

const Header: React.FC = () => (
  <div className={mergeClasses(classes.container, "d-flex 100")}>
    <button className={classes.rewindButton}>
      <RewindSvg />
      <div className={classes.rewindButtonbackground} />
    </button>
    <div className="px-2 py-1 d-flex align-items-center">
      <TacticSelector />
    </div>
  </div>
);

export default Header;
