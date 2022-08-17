import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./Component/Navbar/Navbar.js";
import About from "./Component/About/About.js";
import Skills from "./Component/Skills/Skills.js";
import Landing from "./Component/Landing/Landing.js";
import "./App.css";

function App() {
  return (
    <div className="center">
      <Navbar />
      <Landing />
      <About name="Tony" />
      <Skills />
    </div>
  );
}

export default App;
