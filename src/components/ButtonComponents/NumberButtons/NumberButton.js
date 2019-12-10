import React from "react";


const NumberButton = (props) => {
  const { number, displayNumber } = props
  
  return (
    <>
      <button onClick={displayNumber} className={['button', number].join(' ')} >{number}</button>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
    </>
  );
};

export default NumberButton;