import React from "react";
import "./Card.css";
import CardBanner from "./CardBanner.js";

const CardContent = () => {
  return (
    <div className="card-content">
      <CardBanner />
      <h1 className="card-title"> Get started with React</h1>
      <p className="card-info">
        React makes it painless to create interactive UIs. Design simple views
        for each state of your application.
      </p>
      <a href="reactjs.org">reactjs.org</a>
    </div>
  );
};

export default CardContent;
