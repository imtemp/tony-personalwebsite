import { useRef } from "react";
import Language from "./Language";
import "./Skills.css";
import { AnimationOnScroll } from "react-animation-on-scroll";

const Skills = () => {
  const skillsRef = useRef(null);
  const scrollTo = () => {
    skillsRef.current.scrollIntoView();
  };
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
    <div className="skill-section">
      <div onClick={scrollTo} className="down-button">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="70"
          height="70"
          class="bi bi-arrow-down-circle"
          viewBox="0 0 16 16"
        >
          <path
            fill-rule="evenodd"
            d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v5.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V4.5z"
          />
        </svg>
      </div>

      <AnimationOnScroll animateOnce={true} animateIn="animate__zoomIn">
        <h1 ref={skillsRef} id="skills" className="header-center">
          Skills
        </h1>
      </AnimationOnScroll>
      <div className="skill-lang">
        <div className="image-lang">
          <h2>Languages:</h2>
          <Language title={js} name="JavaScript" />
          <Language title={typescript} name="TypeScript" />
          <Language title={csharp} name="C#" />
          <Language title={python} name="Python" />
          <Language title={java} name="Java" />
          <Language title={html} name="HTML5" />
          <Language title={css} name="CSS3" />
          <h2>Frameworks:</h2>
          <Language title={react} name="React" />
          <Language title={jquery} name="jQuery" />
          <Language title={node} name="Node" />
          <Language title={expressjs} name="Express" />
          <Language title={tailwind} name="Tailwind" />
          <Language title={bootstrap} name="Bootstrap" />
          <Language title={spring} name="Spring" />
          <h2>Databases:</h2>
          <Language title={mongo} name="MongoDB" />
          <Language title={mysql} name="MySQL" />
          <h2>Web Services:</h2>
          <Language title={azure} name="Azure" />
          <Language title={aws} name="Amazon Web Service" />
        </div>
      </div>
    </div>
  );
};

export default Skills;
