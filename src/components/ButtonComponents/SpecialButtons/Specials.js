import React, {useState} from "react";
import {specials} from "../../../data.js";
import {SpecialButton} from "./SpecialButton.js";
//import any components needed

//Import your array data to from the provided data file

export const Specials = (props) => {
  // STEP 2 - add the imported data to state
  const [specialState, setSpecialState] = useState(specials);
  console.log("This is the specialState:", specialState);
  console.log("This is the props of Specials:", props);

  return (
    <div>
      {/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/}
       {specialState.map(function(value, index){
         return (<SpecialButton displayVal={props.displayVal} setDisplayVal={props.setDisplayVal} key = {index} specialVal = {value}/>)
       })}
    </div>
  );
};
