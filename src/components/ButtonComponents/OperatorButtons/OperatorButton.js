import React from "react";

const OperatorButton = (props) => {
  const { operator, value } = props;
  return (
    <>
      <button className={['operator', operator].join(' ')}>{operator}</button>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
    </>
  );
};

export default OperatorButton;