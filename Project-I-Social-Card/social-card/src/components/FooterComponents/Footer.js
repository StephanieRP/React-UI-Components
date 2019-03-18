import React from "react";
import "./Footer.css";

const countUp = () => {
  let num = 0;
  return (num += num);
};

const Footer = () => {
  return (
    <div className="icon-content">
      <i class="far fa-comment" />
      <i class="fas fa-sync-alt" />
      <i class="far fa-heart" />
      <i class="far fa-envelope" />
    </div>
  );
};

export default Footer;
