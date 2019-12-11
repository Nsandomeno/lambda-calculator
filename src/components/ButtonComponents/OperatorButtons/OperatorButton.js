import React from "react";
import {operators} from "../../../data.js";

export const OperatorButton = (props) => {
  //console.log("OpButton Props:", props);
  return (
    <div id="opContainer" className="op-div">
      {/* Display a button element rendering the data being passed down from the parent container on props */}
      <button className="op-btn" onClick={() => props.setDisplayVal(props.displayVal !== "" ? props.displayVal + props.op : null)}>{props.op}</button>
    </div>
  );
};
