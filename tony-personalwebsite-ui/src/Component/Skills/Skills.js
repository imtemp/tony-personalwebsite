import React from "react";
import Language from "./Language";
import "./Skills.css";
import { AnimationOnScroll } from "react-animation-on-scroll";

const Skills = () => {
  // CDN in a variable for logo icon
  const js =
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg";
  const html =
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original-wordmark.svg";
  const css =
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original-wordmark.svg";
  const tailwind =
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg";
  const bootstrap =
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg";
  const python =
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg";
  const java =
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg";
  const react =
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg";
  const node =
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg";
  const mysql =
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-plain-wordmark.svg";
  const mongo =
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg";
  const jquery =
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jquery/jquery-original.svg";
  const spring =
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg";
  const csharp =
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg";
  const expressjs =
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg";
  const aws =
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg";
  const azure =
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg";
  const typescript =
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg";

  return (
    <div className="skill-section row lang-size">
      <AnimationOnScroll animateIn="animate__fadeInLeftBig">
        <h1>Skills</h1>
      </AnimationOnScroll>

      <div className="column">
        <Language title={js} name="JavaScript" />
        <Language title={typescript} name="TypeScript" />
        <Language title={react} name="React" />
        <Language title={jquery} name="jQuery" />
        <Language title={node} name="Node" />
        <Language title={expressjs} name="Express" />
        <Language title={mongo} name="MongoDB" />
        <Language title={mysql} name="MySQL" />
        <Language title={html} name="HTML5" />
        <Language title={css} name="CSS3" />
        <Language title={tailwind} name="Tailwind" />
        <Language title={bootstrap} name="Bootstrap" />
        <Language title={python} name="Python" />
        <Language title={java} name="Java" />
        <Language title={spring} name="Spring" />
        <Language title={csharp} name="C#" />
        <Language title={azure} name="Azure" />
        <Language title={aws} name="Amazon Web Service" />
      </div>
    </div>
  );
};

export default Skills;
