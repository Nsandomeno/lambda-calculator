import React from "react";
import {numbers} from "../../../data.js";

export const NumberButton = (props) => {
  //console.log("NumberButton Props:",props);
  return (
    <div className="num-div">
      {/* Display a button element rendering the data being passed down from the parent container on props */}
  <button className="num-btn" onClick={() => props.setDisplayVal(props.displayVal + props.num)}>{props.num}</button>
    </div>
  );
};
