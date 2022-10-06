import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./Component/Navbar/Navbar.js";
import About from "./Component/About/About.js";
import Skills from "./Component/Skills/Skills.js";
import "./App.css";
import Projects from "./Component/Projects/Projects.js";
import ProjectCard from "./Component/Projects/ProjectCard.js";
import Footer from "./Component/Footer/Footer.js";
import "animate.css/animate.min.css";

function App() {
  return (
    <div className="center">
      <Navbar />
      <About name="Tony" />
      <Skills />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
