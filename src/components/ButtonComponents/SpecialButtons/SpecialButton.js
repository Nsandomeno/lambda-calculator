import React from "react";
import {specials} from "../../../data.js";


export const SpecialButton = (props) => {
  return (
    <div>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
  <button>{props.specialVal}</button>
    </div>
  );
};
