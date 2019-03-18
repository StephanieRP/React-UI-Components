import React from "react";
import "./Footer.css";

const toggleNum = e => {
  let num = document.querySelectorAll(".number");
  num.forEach(number => {
    console.log(number);
    let count = 1;
    return (number.innerHTML = count++);
  });
};

const Footer = () => {
  return (
    <div className="icon-content">
      <div>
        <i className="far fa-comment" onClick={toggleNum} />
        <span className="number" />
      </div>
      <i className="fas fa-sync-alt" />
      <div>
        <i className="far fa-heart" onClick={toggleNum} />
        <span className="number" />
      </div>

      <i className="far fa-envelope" />
    </div>
  );
};

export default Footer;
