import React from "react";
import Numbers from "./Numbers";

const NumberButton = (props) => {
  const { number } = props
  return (
    <>
      <button className={number}>{number}</button>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
    </>
  );
};

export default NumberButton;