import React from "react";
import "./About.css";
const About = (props) => {
  return (
    <div>
      <h1>Hello! I am {props.name}</h1>
      <h2>I am a Full-Stack Developer</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tempor
        massa sed odio hendrerit, nec lacinia nisi aliquet. Donec eu metus et
        felis egestas fermentum nec eu libero. Fusce aliquam tellus quis ligula
        suscipit, dignissim congue justo sollicitudin. In sodales egestas
        tincidunt. Integer venenatis porttitor ipsum, pellentesque tempor sem
        condimentum et. Pellentesque id risus nec ligula lacinia iaculis sit
        amet vitae diam. Nulla tristique tincidunt est sed euismod. Fusce sit
        amet mauris tempus, mollis nisi vel, tempus ipsum. Quisque faucibus enim
        sit amet ligula ornare placerat. Phasellus rutrum neque vel efficitur
        aliquam. Vestibulum at interdum mi, quis dapibus dolor. In viverra,
        lectus vel aliquet scelerisque, elit turpis hendrerit odio, ut pharetra
        nisl diam a sapien.
      </p>
    </div>
  );
};

export default About;
