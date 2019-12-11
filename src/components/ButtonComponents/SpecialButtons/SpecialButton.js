import React from "react";
import {specials} from "../../../data.js";


export const SpecialButton = (props) => {
  return (
    
  <button className="special-btn" onClick={() => props.setDisplayVal(props.displayVal.length > 0 & props.displayVal[props.displayVal.length-1] !== ("C" || "+/-" || "%")   ? eval(props.displayVal + props.specialVal): null)}>{props.specialVal}</button>
  );
};
