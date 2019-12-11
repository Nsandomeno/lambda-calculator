import React from "react";
import {numbers} from "../../../data.js";

export const NumberButton = (props) => {
  //console.log("NumberButton Props:",props);
  return (
    <div>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
  <button onClick={() => props.setDisplayVal(props.displayVal + props.num)}>{props.num}</button>
    </div>
  );
};
