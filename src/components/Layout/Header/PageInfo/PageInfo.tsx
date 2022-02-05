import React from "react";
import { ReactComponent as ArrowSvg } from "@footium/assets/svgs/arrow.svg";
import { ReactComponent as ArrowHeadSvg } from "@footium/assets/svgs/arrow-head.svg";
import { ReactComponent as MagnifyingGlassSvg } from "@footium/assets/svgs/magnifying-glass.svg";
import { mergeClasses } from "@footium/utility/functions";
import classes from "./PageInfo.module.css";

const PageInfo: React.FC = () => (
  <div
    className={mergeClasses(
      "d-flex w-100 align-items-center h-100",
      classes.wrapper
    )}
  >
    <div
      className={mergeClasses(
        "d-flex w-100 align-items-center h-100",
        classes.container
      )}
    >
      <div className={mergeClasses(classes.arrowButtons, "d-flex h-100")}>
        <button>
          <ArrowSvg />
        </button>
        <button>
          <ArrowSvg />
        </button>
      </div>
      <div className={classes.teaminfo}>
        <div className={classes.background}>
          <div className={classes.backgroundinner}>
            <div className={classes.stripes}>
              <div />
              <div />
            </div>
            <div className={classes.bigStripe} />
            <div className={classes.smallStripes}>
              <div />
              <div />
              <div />
            </div>
          </div>
          <div className={classes.gap} />
          <div className={classes.closeEdge}>
            {new Array(7).fill(0).map(() => (
              <div />
            ))}
          </div>
          <div className={classes.edge}>
            {new Array(5).fill(0).map(() => (
              <div />
            ))}
          </div>
        </div>

        <div className={classes.pageContent}>
          <img
            src="assets/images/barcelona.png"
            alt="Team logo"
            className={classes.teamLogo}
          />
          <div className={classes.controllers}>
            <button>
              <ArrowHeadSvg />
            </button>
            <button>
              <ArrowHeadSvg />
            </button>
          </div>

          <MagnifyingGlassSvg className={classes.magnifyingGlass} />

          <div className={classes.teamData}>
            <h1 className={classes.teamName}>Tactics</h1>
            <p className={classes.teamNextGame}>
              5th in the Spanish League - Next Match: Athletico (A) (Tomorrow
              19:45)
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default PageInfo;
