import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "animate.css/animate.min.css";
import Navbar from "./Component/Navbar/Navbar.js";
import Skills from "./Component/Skills/Skills.js";
import Projects from "./Component/Projects/Projects.js";
import Footer from "./Component/Footer/Footer.js";
import Contact from "./Component/Contact/Contact.js";
import Landing from "./Component/Landing/Landing";

function App() {
  return (
    <div className="center">
      <Navbar />
      <Landing />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
