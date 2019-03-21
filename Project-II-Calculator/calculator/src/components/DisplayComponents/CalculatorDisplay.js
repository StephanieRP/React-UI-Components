import React from "react";
import "../../App.scss";

const CalculatorDisplay = props => {
  console.log(props);
  return <div className="display">{props.display}</div>;
};

export default CalculatorDisplay;
