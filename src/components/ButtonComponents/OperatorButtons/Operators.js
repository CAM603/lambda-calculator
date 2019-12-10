import React from "react";
import OperatorButton from "./OperatorButton";
//import any components needed

//Import your array data to from the provided data file

const Operators = (props) => {
  const { operators } = props;
  
  const makeOperatorNumber = () => operators.map(op => {
      return <OperatorButton operator={op.char} value={op.value} key={op.value}/>
    })
  // STEP 2 - add the imported data to state
  return (
    <>
      {makeOperatorNumber()}
      {/* STEP 3 - Use .map() to iterate over your array data and return a button
      component matching the name on the provided file. Pass
      it any props needed by the child component*/}
    </>
  );
};

export default Operators;