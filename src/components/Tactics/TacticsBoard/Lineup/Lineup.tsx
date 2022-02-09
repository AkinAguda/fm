import React from "react";
import { mergeClasses } from "@footium/utility/functions";
import { ReactComponent as ArrowHeadSvg } from "@footium/assets/svgs/arrow-head.svg";
import { formations } from "../../constants";
import { TacticsContext } from "../../context";
import GridTile from "./GridTile";
import Substitiute from "../../../common/Substitute";
import classes from "./Lineup.module.css";

const Lineup: React.FC = () => (
  <TacticsContext.Consumer>
    {({
      formation,
      filledOutFirstEleven,
      subs,
      onDragEnd,
      onDragOver,
      onDragStart,
    }) => (
      <div className={mergeClasses(classes.container, "h-100 w-100")}>
        <div className={mergeClasses(classes.teamViewer, "d-flex")}>
          <div className="w-100 ms-2">
            <div className="text-center mb-2">
              <div
                className={mergeClasses(
                  "font-small text-light fw-bolder",
                  classes.formationHeading
                )}
              >
                FORMATION
              </div>
              <div className="fw-bolder text-light d-flex align-items-center justify-content-center">
                {formation} WIDE
                <ArrowHeadSvg className={classes.arrowHead} />
              </div>
            </div>
            <div className="position-relative h-100 w-100">
              <div className={classes.backgroundWrapper}>
                <div className={classes.pitchDesign}>
                  <div className={classes.homeBox}>
                    <div className={classes.goal} />
                    <div className={classes.pkBox} />
                  </div>
                  <div className={classes.center}>
                    <div className={classes.line} />
                    <div className={classes.circle} />
                  </div>
                  <div className={classes.awayBox}>
                    <div className={classes.goal} />
                    <div className={classes.pkBox} />
                  </div>
                </div>
                <div className={classes.background}>
                  {formations[formation].map((val, index) => (
                    <React.Fragment key={index}>
                      <div
                        className={mergeClasses(
                          classes.tile,
                          classes[val.toLowerCase()]
                        )}
                      />
                    </React.Fragment>
                  ))}
                </div>
              </div>
              <div className={classes.grid}>
                {formations[formation].map((val, index) => (
                  <React.Fragment key={index}>
                    <GridTile
                      gridSpaceState={val}
                      player={filledOutFirstEleven[index]}
                    />
                  </React.Fragment>
                ))}
              </div>
            </div>
          </div>

          <div className={classes.subsWrapper}>
            <div
              className={mergeClasses(
                "font-small text-light fw-bolder text-center",
                classes.formationHeading
              )}
            >
              SUBS
            </div>
            <div className="text-light d-flex align-items-center justify-content-center text-center mb-2 font-small">
              Max. of 7
            </div>
            <div className={classes.subs}>
              {subs.map((sub) => (
                <React.Fragment key={sub.id}>
                  <div
                    draggable
                    className={classes.subComponentWrapper}
                    onDragStart={(e) => {
                      onDragStart(sub.id, true);
                    }}
                    onDragEnd={(e) => {
                      console.log("EEk");
                      onDragEnd(sub.id);
                    }}
                    onDragOver={(e) => {
                      e.preventDefault();
                      onDragOver(sub.id, true);
                    }}
                  >
                    <Substitiute sub={sub} />
                  </div>
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>
      </div>
    )}
  </TacticsContext.Consumer>
);

export default Lineup;
