import React from "react";
import { TacticCardProps } from "./types";
import TacticCard from "./TacticCard";

const TacticCardContainer: React.FC<TacticCardProps> = (props) => {
  return <TacticCard {...props}>{props.children}</TacticCard>;
};

export default TacticCardContainer;
