import React, {useState} from "react";
import {operators} from "../../../data";
import {OperatorButton} from "./OperatorButton";
//import any components needed

//Import your array data to from the provided data file

export const Operators = (props) => {
  // STEP 2 - add the imported data to state
  const [operatorState, setOperatorState] = useState(operators);
  //console.log("This is Operators Props:",props);
  //console.log("This is operatorState:", operatorState);
  return (
    <div className="operatorButton">
      {/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/} 
       {operatorState.map(function(value, index){
         return (<OperatorButton displayVal={props.displayVal} setDisplayVal={props.setDisplayVal} key = {index} op = {value.char}/>)
       })}
    </div>
  );
};
