import React from "react";
import lkd from "../assets/aboutme/linkedin.png";
import gth from "../assets/aboutme/github.png";
import gml from "../assets/aboutme/gmail.png";
import www from "../assets/aboutme/www.png";

const AboutMe = () => {
  return (
    <div>
      <div className="aboutme-text">
        <h4>I'm Nithin aka humanbeeng</h4>
        <br/>
        <h6>Connect with me.</h6>
      
        <a href="https://github.com/humanbeeng">
          <img src={gth} hspace="20" vspace="20" height="40px"></img>
        </a>
        <a href="https://linkedin.com/in/thenithinraj">
          <img src={lkd} hspace="20" vspace="20" height="40px"></img>
        </a>
        <a href="https://nithinsj.netlify.app">
          <img src={www} hspace="20" vspace="20" height="40px"></img>
        </a>
        <a href="mailto:thenithinraj@gmail.com">
          <img src={gml} hspace="20" vspace="20" height="40px"></img>
        </a>

        <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
      </div>
    </div>
  );
};

export default AboutMe;
