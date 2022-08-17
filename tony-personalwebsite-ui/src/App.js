import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./Component/Navbar/Navbar.js";
import About from "./Component/About/About.js";
import Skills from "./Component/Skills/Skills.js";
import Landing from "./Component/Landing/Landing.js";
import "./App.css";
import Projects from "./Component/Projects/Projects.js";

function App() {
  return (
    <div className="center">
      <Navbar />
      <Landing />
      <About name="Bono" />
      <Skills />
      <Projects />
    </div>
  );
}

export default App;
