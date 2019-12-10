import React from "react";

const SpecialButton = (props) => {
  const { special } = props;
  console.log(special)
  return (
    <>
      <button className={['special', special].join(' ')}>{special}</button>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
    </>
  );
};

export default SpecialButton;