import React from "react";
import {operators} from "../../../data.js";

export const OperatorButton = (props) => {
  //console.log("OpButton Props:", props);
  return (

      <button className="op-btn" onClick={() => props.setDisplayVal(props.displayVal !== "" ? props.displayVal + props.op : null)}>{props.op}</button>
   
  );
};
