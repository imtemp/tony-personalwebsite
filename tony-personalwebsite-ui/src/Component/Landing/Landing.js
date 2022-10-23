import "./Landing.css";
import { TypeAnimation } from "react-type-animation";

const Landing = (props) => {
  return (
    <div className="landing-background">
      <div className="landing-text">
        <h1 className="header-hello font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 to-amber-200">
          Hello! I am a . . .
        </h1>
        <div style={{ width: "40em", minWidth: "30%" }}>
          <TypeAnimation
            className="type header-role text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-amber-300"
            sequence={[
              "Front-End Developer",
              1000,

              "Back-End Developer",
              1000,

              "Full-Stack Developer",
              1000,

              "Software Engineer",
              1000,

              "Innovator",
              1000,

              "Problem-Solver",
              1000,
            ]}
            speed={40}
            style={{ fontSize: "3em" }}
            wrapper="span"
            repeat={Infinity}
            cursor={false}
          />
        </div>
        <div className="about-text">
          <p>
            I'm Tony Lin. I have a huge passion for programming because the
            potential is endless.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Landing;
