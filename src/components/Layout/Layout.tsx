import React from "react";
import { mergeClasses } from "@footium/utility/functions";
import Header from "./Header";
import Nav from "./Nav";
import classes from "./Layout.module.css";

const Layout: React.FC = ({ children }) => (
  <div className="vw-100 vh-100 d-flex">
    <div
      className={mergeClasses(
        "position-absolute w-100 h-100",
        classes.background
      )}
    >
      <div className={classes.stripe1} />
      <div className={classes.stripe2} />
    </div>
    <div
      className={mergeClasses(
        "position-relative verflow-auto h-100",
        classes.left
      )}
    >
      <Nav />
    </div>
    <div
      className={mergeClasses("w-100 h-100 position-relative", classes.right)}
    >
      <div className={mergeClasses(classes.header, "w-100")}>
        <Header />
      </div>
      <div>{children}</div>
    </div>
  </div>
);

export default Layout;
