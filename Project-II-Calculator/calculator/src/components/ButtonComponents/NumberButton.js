import React from "react";
import "../../index.scss";

const NumberButton = props => {
  return (
    <div className="numbers">
      {/* <div className="numbers-button">clear</div> */}
      <div className="numbers-button">{props.calNumbers.num}</div>
    </div>

    // <div className="numbers">
    //   <div className="numbers-button">clear</div>
    //   <div className="row">
    //     <div className="numbers-button">{props.calNumbers[0]}</div>
    //     <div className="numbers-button">{props.calNumbers[1]}</div>
    //     <div className="numbers-button">{props.calNumbers[2]}</div>
    //   </div>
    //   <div className="row">
    //     <div className="numbers-button">{props.calNumbers[3]}</div>
    //     <div className="numbers-button">{props.calNumbers[4]}</div>
    //     <div className="numbers-button">{props.calNumbers[5]}</div>
    //   </div>
    //   <div className="row">
    //     <div className="numbers-button">{props.calNumbers[6]}</div>
    //     <div className="numbers-button">{props.calNumbers[7]}</div>
    //     <div className="numbers-button">{props.calNumbers[8]}</div>
    //   </div>
    //   <div className="numbers-button">0</div>
    // </div>
  );
};

export default NumberButton;
