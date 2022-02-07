import React from "react";
import { mergeClasses } from "@footium/utility/functions";
import Header from "./Header";
import Nav from "./Nav";
import classes from "./Layout.module.css";

const Layout: React.FC = ({ children }) => (
  <div className={mergeClasses("vw-100 d-flex", classes.container)}>
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
      className={mergeClasses(
        "w-100 h-100 position-relative d-flex flex-column",
        classes.right
      )}
    >
      <div className={mergeClasses(classes.header)}>
        <Header />
      </div>
      <div className={mergeClasses("h-100", classes.content)}>{children}</div>
    </div>
  </div>
);

export default Layout;
