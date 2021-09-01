import "./App.css";
import Nav from "./components/Nav/Nav";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";

function App() {
  return (
    <div className="App">
      <Nav />
      <Home />
      <About />
      {/* <h1>MineSweep</h1> */}
      <Projects />
      <h1>Experience</h1>
      <h1>Contact</h1>
    </div>
  );
}

export default App;
