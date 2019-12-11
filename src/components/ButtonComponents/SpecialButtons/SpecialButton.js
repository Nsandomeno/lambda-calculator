import React from "react";
import {specials} from "../../../data.js";


export const SpecialButton = (props) => {
  return (
    
    <div className="num-div">
      {/* Display a button element rendering the data being passed down from the parent container on props */}
  <button className="special-btn" onClick={() => props.setDisplayVal(props.displayVal.length > 0 & props.displayVal[props.displayVal.length-1] !== ("C" || "+/-" || "%")   ? eval(props.displayVal + props.specialVal): null)}>{props.specialVal}</button>
    </div>
  );
};
