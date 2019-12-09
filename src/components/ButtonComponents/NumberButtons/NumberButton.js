import React from "react";


export const NumberButton = (props) => {
  console.log(props.number)
  return (
    <>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
      <button>{props.number}</button>
    </>
  );
};
