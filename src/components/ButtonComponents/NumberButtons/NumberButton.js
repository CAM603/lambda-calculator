import React from "react";


const NumberButton = (props) => {
  const { number, something } = props
  
  return (
    <>
      <button onClick={something} className={['button', number].join(' ')} >{number}</button>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
    </>
  );
};

export default NumberButton;