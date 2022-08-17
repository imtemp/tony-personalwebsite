import React from "react";
import Language from "./Language";
import "./Skills.css";

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

  return (
    <div className="lang-size">
      <Language title={js} name="JavaScript" />
      <Language title={html} name="HTML5" />
      <Language title={css} name="CSS3" />
      <Language title={tailwind} name="Tailwind" />
      <Language title={bootstrap} name="Bootstrap" />
      <Language title={python} name="Python" />
      <Language title={java} name="Java" />
      <Language title={react} name="React" />
      <Language title={node} name="Node" />
      <Language title={mysql} name="MySQL" />
      <Language title={mongo} name="MongoDB" />
      <Language title={jquery} name="jQuery" />
    </div>
  );
};

export default Skills;

/**      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" />
      <span className="caption">JavaScript</span>
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original-wordmark.svg" />
      <span className="caption">HTML5</span>
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original-wordmark.svg" />
      <span className="caption">CSS3</span>
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg" />
      <span className="caption">Tailwind</span>
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" />
      <span className="caption">Bootstrap</span>
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" />
      <span className="caption">Python</span>
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" />
      <span className="caption">Java</span>
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" />
      <span className="caption">React</span>
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" />
      <span className="caption">Node.js</span>
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-plain-wordmark.svg" />
      <span className="caption">MySQL</span>
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" />
      <span className="caption">MongoDB</span>
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jquery/jquery-original.svg" />
      <span className="caption">jQuery</span> */
