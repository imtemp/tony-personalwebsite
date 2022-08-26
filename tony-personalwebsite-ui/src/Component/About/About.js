import React from "react";
import "./About.css";
const About = (props) => {
  return (
    <div className="about-background">
      <h1 className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 to-amber-200">
        Hello! I am {props.name}
      </h1>
      <h2 className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-amber-300">
        I am a Full-Stack Developer
      </h2>
      <p className="about-hero-text">
        Previous student from University of Toronto for Computer Science,
        graduate from Centennial College for Software Engineering
        <br /> I am someone who loves programming, with an endless passion for
        web development. I own an array of skills required to suceed as a web
        developer.
        <br />
        <br />
        I describe myself as someone who is:
        <br />
        Easy Going | Open Minded | Relaxed
        <br />
        Diligent | Problem Solver | Creative
        <br />
        <a
          href="../../public/assets/Resume_Tony_Lin.pdf"
          className="no-underline"
        >
          Resume
        </a>
      </p>
    </div>
  );
};

export default About;
