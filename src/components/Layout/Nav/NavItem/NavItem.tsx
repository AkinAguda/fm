import React from "react";
import { NavItemProps } from "./types";
import classes from "./NavItem.module.css";
import { mergeClasses } from "@footium/utility/functions";

const NavItem: React.FC<NavItemProps> = ({
  Svg,
  title,
  line,
  active,
  notifCount,
}) => (
  <div
    className={mergeClasses(
      classes.container,
      [!!line, classes.line],
      [!!active, classes.active]
    )}
  >
    {!!notifCount && <div className={classes.notif}>{notifCount}</div>}
    <Svg />
    {title}
  </div>
);

export default NavItem;
