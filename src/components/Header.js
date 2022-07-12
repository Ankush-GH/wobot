import React from "react";
import HEADER from "../assets/header.jpg";
import "../App.scss";

const Header = () => {
  return (
    <div className="header">
      <img className="img" src={HEADER} alt="Wobot.ai" />
    </div>
  );
};

export default Header;
