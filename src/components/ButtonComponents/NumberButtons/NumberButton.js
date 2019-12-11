import React from "react";
import {numbers} from "../../../data.js";

export const NumberButton = (props) => {
  //console.log("NumberButton Props:",props);
  return (
  <button className="num-btn" onClick={() => props.setDisplayVal(props.displayVal + props.num)}>{props.num}</button>
  );
};
