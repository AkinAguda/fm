import React from "react";
import { SubContainerProps } from "./types";
import Sub from "./Sub";

const SubContainer: React.FC<SubContainerProps> = (props) => {
  return <Sub {...props} />;
};

export default SubContainer;
