import React from "react";

const Display = (props) => {
  let {screen} = props;
  
  return <div className="display">{screen}</div>;
};
export default Display;