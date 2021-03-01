import React from "react";
import LandingImage from "../assets/landing.svg";
import LandingButtons from "./LandingButtons";
const Landing = () => {
  return (
    <div>
      <div>
        <h1 className="Landing-text">Bigocheatsheet Revamped</h1>
        <h3 className="Landing-slogan">Made with simplicity...</h3>
      </div>

      <div className="Landing-image">
        <img src={LandingImage} height="30%"></img>
      </div>
      <br/>
      <br/>
      <br/>
      <LandingButtons />
    </div>
  );
};

export default Landing;
