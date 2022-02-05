import React from "react";
import PageInfo from "./PageInfo/PageInfo";
import classes from "./Header.module.css";

const Header: React.FC = () => (
  <div className="h-100 w-100 d-flex">
    <div className={classes.pageInfo}>
      <PageInfo />
    </div>
  </div>
);

export default Header;
