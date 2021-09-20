import "./App.css";
import Nav from "./components/Nav/Nav";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Experience from "./components/Experience/Experience";
import TechnicalSkills from "./components/TechnicalSkills/TechnicalSkills";
import Contact from "./components/Contact/Contact";

function App() {
  return (
    <div className="App">
      <Nav />
      <Home />
      <About />
      {/* <h1>MineSweep</h1> */}
      <Projects />
      <Experience />
      <TechnicalSkills />
      <Contact />
    </div>
  );
}

export default App;
