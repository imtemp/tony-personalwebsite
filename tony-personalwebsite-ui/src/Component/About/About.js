import React from "react";
import "./About.css";
const About = (props) => {
  return (
    <div className="about-background">
      <h1 className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 to-amber-200">
        Hello! I am {props.name}
      </h1>
      <h2 className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-amber-300">
        I am a Software Engineer
      </h2>
      <p className="about-hero-text">
        Previous student from University of Toronto for Computer Science
        <br /> Graduate from Centennial College for Software Engineering
        <br /> I love programming because there is an endless possibility of
        what is possible and creating something feels extremely rewarding.
        <br />
      </p>
    </div>
  );
};

export default About;
