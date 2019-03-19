import React from "react";
import "./App.css";
import HeaderContainer from "./components/HeaderComponents/HeaderContainer.js";
import CardContainer from "./components/CardComponents/CardContainer.js";
import Footer from "./components/FooterComponents/Footer.js";

const appStyle = {
  background: "#f0f0f0",
  width: 800,
  border: "solid black 2px",
  margin: "0 auto"
};

const App = () => {
  return (
    <div style={appStyle}>
      <HeaderContainer />
      <CardContainer />
      <Footer />
    </div>
  );
};

export default App;
