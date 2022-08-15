import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./Component/Navbar/Navbar.js";
import About from "./Component/About/About.js";
import Skills from "./Component/Skills/Skills.js";

function App() {
  return (
    <div>
      <Navbar />
      <About name="Bono" />
      <Skills />
    </div>
  );
}

export default App;
