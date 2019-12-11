import React, {useState} from "react";
import {numbers} from "../../../data.js";
import {NumberButton} from "./NumberButton.js";
//import any components needed

// example of import from data.js. Note all the ../   This is how we move through folders. 
/* 
import { numbers } from '../../../data' 
*/
//Import your array data to from the provided data file

 export const Numbers = (props) => {
   //console.log("Numbers data:", numbers);
   //console.log("Numbers prop:", props);
  // STEP 2 - add the imported data to state
  const [numberState, setNumberState] = useState(numbers);
  console.log("Number STate:", numberState);
  return (
    <div className="numberButtons">
      {/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/}
       {numberState.map(function(value,index){

         return (<NumberButton displayVal = {props.displayVal} setDisplayVal={props.setDisplayVal} key = {index} num = {value}/>)
       })}
    </div>
  );
};
